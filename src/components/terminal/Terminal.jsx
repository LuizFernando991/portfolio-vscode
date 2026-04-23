import { useRef, useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { VscChromeClose, VscChevronDown } from 'react-icons/vsc'
import { useTerminalContext } from '../../hooks/useTerminalContext'
import { processCommand, COMMAND_LIST } from '../../utils/terminalCommands'
import { TerminalOutput } from './TerminalOutput'

const PROMPT = 'luiz@portfolio:~$'
const MIN_HEIGHT = 120

export function Terminal() {
  const { t } = useTranslation()
  const terminal = useTerminalContext()
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestion, setSuggestion] = useState('')
  const [isResizing, setIsResizing] = useState(false)
  const { height, setHeight } = terminal

  const inputRef = useRef(null)
  const outputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [terminal.isOpen])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [terminal.history])

  const handleResizeStart = useCallback(
    (e) => {
      e.preventDefault()
      setIsResizing(true)

      const startY = e.clientY
      const startHeight = height
      const maxHeight = Math.floor(window.innerHeight * 0.75)

      const onMouseMove = (e) => {
        const delta = startY - e.clientY
        const next = Math.min(Math.max(startHeight + delta, MIN_HEIGHT), maxHeight)
        setHeight(next)
      }

      const onMouseUp = () => {
        setIsResizing(false)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [height, setHeight]
  )

  const updateSuggestion = useCallback((value) => {
    if (!value.startsWith('/')) {
      setSuggestion('')
      return
    }
    const match = COMMAND_LIST.find(
      (cmd) => cmd.startsWith(value) && cmd !== value
    )
    setSuggestion(match ? match.slice(value.length) : '')
  }, [])

  const handleInput = (e) => {
    const value = e.target.value
    setInput(value)
    setHistoryIndex(-1)
    updateSuggestion(value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        setCmdHistory((prev) => [input, ...prev])
      }
      processCommand(input, {
        addToHistory: terminal.addToHistory,
        clearHistory: terminal.clearHistory,
        t
      })
      setInput('')
      setSuggestion('')
      setHistoryIndex(-1)
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      if (suggestion) {
        setInput(input + suggestion)
        setSuggestion('')
      }
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const nextIndex = Math.min(historyIndex + 1, cmdHistory.length - 1)
      setHistoryIndex(nextIndex)
      const value = cmdHistory[nextIndex] ?? ''
      setInput(value)
      updateSuggestion(value)
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIndex = Math.max(historyIndex - 1, -1)
      setHistoryIndex(nextIndex)
      const value = nextIndex === -1 ? '' : (cmdHistory[nextIndex] ?? '')
      setInput(value)
      updateSuggestion(value)
      return
    }
  }

  const focusInput = () => inputRef.current?.focus()

  return (
    <div
      className="flex flex-col bg-dark-600 border-t border-dark-300 font-mono text-sm shrink-0"
      style={{ height, minHeight: MIN_HEIGHT }}
    >
      {/* Resize handle — invisible, apenas cursor row-resize */}
      <div
        onMouseDown={handleResizeStart}
        className="w-full shrink-0"
        style={{ height: '5px', cursor: 'row-resize' }}
      />

      {/* Header */}
      <div className="flex items-center justify-between bg-dark-500 border-b border-dark-300 px-3 py-1 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-white-50a">
            Terminal
          </span>
          <span className="text-xs text-pink border-b border-pink pb-0.5">
            bash
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={terminal.closeTerminal}
            className="p-1 rounded hover:bg-dark-400 text-white-50a hover:text-white transition-colors cursor-pointer"
            aria-label="Minimizar terminal"
          >
            <VscChevronDown className="w-4 h-4" />
          </button>
          <button
            onClick={terminal.closeTerminal}
            className="p-1 rounded hover:bg-dark-400 text-white-50a hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar terminal"
          >
            <VscChromeClose className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Output */}
      <div
        ref={outputRef}
        className="flex-1 overflow-y-auto px-4 py-2 cursor-text"
        onClick={focusInput}
        style={{ userSelect: isResizing ? 'none' : 'auto' }}
      >
        {terminal.history.map((entry, i) => (
          <TerminalOutput key={i} entry={entry} />
        ))}

        {/* Input row */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-400 shrink-0 select-none text-xs">
            {PROMPT}
          </span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none border-none text-white w-full caret-pink text-xs font-mono z-10 relative"
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
            {suggestion && (
              <span className="absolute left-0 top-0 pointer-events-none text-xs font-mono">
                <span className="invisible">{input}</span>
                <span className="text-white-50a">{suggestion}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
