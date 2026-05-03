import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiSocketdotio,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiExpress,
  SiPrisma,
  SiNestjs,
  SiGraphql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiMysql,
  SiRabbitmq,
  SiBun,
  SiFastify,
  SiTerraform,
  SiDrizzle,
  SiApachekafka,
  SiSwagger,
  SiLinux,
  SiGithub,
  SiPostman,
  SiInsomnia,
  SiGithubactions
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FaNode } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { DiRedis, DiPostgresql } from 'react-icons/di'
import { AiOutlineKubernetes } from 'react-icons/ai'

export const technologies = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: FaNode },
  { name: 'Bun', icon: SiBun },
  { name: 'Golang', icon: FaGolang },
  { name: 'Nest.js', icon: SiNestjs },
  { name: 'Fastify.js', icon: SiFastify },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React.js', icon: SiReact },
  { name: 'Express', icon: SiExpress },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Socket.io', icon: SiSocketdotio },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgresSQL', icon: DiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Drizzle', icon: SiDrizzle },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'AWS', icon: SiAmazonwebservices },
  { name: 'Docker', icon: SiDocker },
  { name: 'RabbitMQ', icon: SiRabbitmq },
  { name: 'Redis', icon: DiRedis },
  { name: 'Git', icon: SiGit },
  { name: 'Swagger', icon: SiSwagger }
]

export const technologyGroups = [
  {
    label: 'languages',
    color: 'blue',
    items: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Golang', icon: FaGolang }
    ]
  },
  {
    label: 'backend',
    color: 'green',
    items: [
      { name: 'Node.js', icon: FaNode },
      { name: 'Bun', icon: SiBun },
      { name: 'Nest.js', icon: SiNestjs },
      { name: 'Fastify.js', icon: SiFastify },
      { name: 'Express', icon: SiExpress },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'Socket.io', icon: SiSocketdotio },
      { name: 'Swagger', icon: SiSwagger }
    ]
  },
  {
    label: 'frontend',
    color: 'pink',
    items: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React.js', icon: SiReact },
      { name: 'Tailwind', icon: SiTailwindcss }
    ]
  },
  {
    label: 'database',
    color: 'yellow',
    items: [
      { name: 'PostgreSQL', icon: DiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: DiRedis },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Drizzle', icon: SiDrizzle }
    ]
  },
  {
    label: 'devops',
    color: 'purple',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: SiAmazonwebservices },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Git', icon: SiGit }
    ]
  }
]

export const actuallyStuding = [
  { name: 'Terraform', icon: SiTerraform },
  { name: 'Kubernetes', icon: AiOutlineKubernetes },
  { name: 'Kafka', icon: SiApachekafka }
]

export const devTools = [
  { name: 'VS Code', icon: VscVscode },
  { name: 'Linux', icon: SiLinux },
  { name: 'GitHub', icon: SiGithub },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'Postman', icon: SiPostman },
  { name: 'Insomnia', icon: SiInsomnia },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit }
]

export const methodologies = [
  'REST API',
  'Microservices',
  'Clean Architecture',
  'CI/CD',
  'Monorepo',
  'Event-Driven',
  'SOLID',
  'Design Patterns'
]
