import { technologies, actuallyStuding } from './technologies'
import { projects } from './projects'
import { contactData } from './contact'

const COMMANDS = {
  '/help': () => ({
    type: 'help',
    items: [
      { cmd: '/help', descKey: 'terminal.help.items.help' },
      { cmd: '/whoami', descKey: 'terminal.help.items.whoami' },
      { cmd: '/about', descKey: 'terminal.help.items.about' },
      { cmd: '/skills', descKey: 'terminal.help.items.skills' },
      { cmd: '/projects', descKey: 'terminal.help.items.projects' },
      { cmd: '/contact', descKey: 'terminal.help.items.contact' },
      { cmd: 'clear', descKey: 'terminal.help.items.clear' }
    ]
  }),

  '/whoami': () => ({ type: 'whoami' }),
  '/about': () => ({ type: 'about' }),

  '/skills': () => ({
    type: 'skills',
    technologies,
    studying: actuallyStuding
  }),

  '/projects': () => ({
    type: 'projects',
    items: projects
  }),

  '/contact': () => ({
    type: 'contact',
    data: contactData.contact
  })
}

export function processCommand(input, { addToHistory, clearHistory }) {
  const trimmed = input.trim()

  if (!trimmed) return

  if (trimmed === '/clear' || trimmed === 'clear') {
    clearHistory()
    return
  }

  addToHistory({ type: 'command', text: trimmed })

  const handler = COMMANDS[trimmed]
  if (handler) {
    addToHistory(handler())
    return
  }

  addToHistory({
    type: 'error',
    cmd: trimmed,
    errorKey: 'terminal.error'
  })
}

export const COMMAND_LIST = Object.keys(COMMANDS).concat(['clear'])
