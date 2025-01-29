import { tabsContent } from './tabs'

export const directory = [
  {
    name: 'Portfolio',
    type: 'folder',
    open: true,
    children: [
      {
        name: 'src',
        type: 'folder',
        open: true,
        children: [
          {
            name: 'components',
            type: 'folder',
            open: true,
            children: [
              tabsContent.about,
              tabsContent.projects,
              tabsContent.technologies
            ]
          },
          tabsContent.home,
          tabsContent.index
        ]
      },
      tabsContent.contact
    ]
  }
]
