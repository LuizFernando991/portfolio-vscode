import { useTranslation } from 'react-i18next'
import { RiExternalLinkLine } from 'react-icons/ri'
import { SiRss } from 'react-icons/si'
import { blogPosts } from '../../../utils/blogPosts'

const tagColors = {
  nodejs: 'text-green',
  typescript: 'text-blue',
  architecture: 'text-purple',
  devops: 'text-yellow',
  nestjs: 'text-red'
}

export function BlogPosts() {
  const { t } = useTranslation()
  return (
    <div className="p-3 flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <SiRss className="text-soft-blue" />
        <span>{t('blog.recent-posts')}</span>
      </div>
      <div className="flex flex-col gap-1">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            target="_blank"
            href={post.link}
            className="w-full flex gap-2 justify-between items-start cursor-pointer text-white-75a hover:text-white group"
            rel="noreferrer"
          >
            <span className="flex flex-col gap-0.5">
              <span className="group-hover:underline leading-snug text-xs">
                {t(post.titleKey)}
              </span>
              <span
                className={`text-[10px] ${tagColors[post.tagKey] ?? 'text-white-50a'}`}
              >
                {t(`blog.topics.${post.tagKey}`)}
              </span>
            </span>
            <RiExternalLinkLine className="flex-shrink-0 mt-0.5" />
          </a>
        ))}
      </div>
    </div>
  )
}
