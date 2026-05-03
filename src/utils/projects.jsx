import { FaNode } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import {
  SiReact,
  SiTailwindcss,
  SiRedis,
  SiRabbitmq,
  SiGrafana,
  SiPrometheus,
  SiExpress,
  SiAmazonwebservices
} from 'react-icons/si'

export const projects = [
  {
    title: 'Microservice Streaming',
    descriptionKey: 'projects.streaming.description',
    highlightsKey: 'projects.streaming.highlights',
    stack: [
      { icon: FaGolang, name: 'Golang' },
      { icon: FaNode, name: 'Node.js' },
      { icon: SiExpress, name: 'Express' },
      { icon: SiRedis, name: 'Redis' },
      { icon: SiRabbitmq, name: 'RabbitMQ' },
      { icon: SiGrafana, name: 'Grafana' },
      { icon: SiPrometheus, name: 'Prometheus' }
    ],
    status: 'in-progress',
    githubLink: 'https://github.com/LuizFernando991/streaming-microservices'
  },
  {
    title: 'Sphera Academy',
    descriptionKey: 'projects.sphera.description',
    highlightsKey: 'projects.sphera.highlights',
    stack: [
      { icon: FaNode, name: 'Node.js' },
      { icon: SiAmazonwebservices, name: 'AWS' },
      { icon: SiRedis, name: 'Redis' },
      { icon: SiRabbitmq, name: 'RabbitMQ' }
    ],
    status: 'live',
    link: 'https://www.spheraacademy.com/'
  },
  {
    title: 'VSCode Portfolio',
    descriptionKey: 'projects.vscode.description',
    highlightsKey: 'projects.vscode.highlights',
    stack: [
      { icon: SiReact, name: 'React' },
      { icon: SiTailwindcss, name: 'Tailwind' }
    ],
    status: 'live',
    link: 'https://devluizfernando.com.br/'
  },
  {
    title: 'Golang Raw Router',
    descriptionKey: 'projects.gorouter.description',
    highlightsKey: 'projects.gorouter.highlights',
    stack: [{ icon: FaGolang, name: 'Golang' }],
    status: 'open-source',
    githubLink: 'https://github.com/LuizFernando991/golang-raw-router'
  }
]
