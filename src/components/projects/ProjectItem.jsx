import { useTranslation } from 'react-i18next'
import { BiLink } from 'react-icons/bi'
import { SiYoutube, SiGithub } from 'react-icons/si'

export function ProjectItem({
  image,
  title,
  description,
  tecnologies,
  youtubeLink,
  codeLink,
  link
}) {
  const { t } = useTranslation()
  return (
    <article className="flex flex-col items-center gap-10">
      <img src={image} alt={title} className="w-full max-w-140" />
      <div>
        <h3 className="mb-3 text-xl lg:text-3xl font-semibold font-mono">
          {title}
        </h3>
        <p className="text-white-75a text-sm lg:text-md">{t(description)}</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 text-sm md:text-2xl lg:text-4xl">
          {tecnologies.map((Tec, index) => (
            <Tec key={index} />
          ))}
        </div>
        <div className="flex gap-2">
          {link && (
            <a
              className="bg-white rounded-full p-2"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink className="text-sm md:text-3xl" color="#5fd7e7" />
            </a>
          )}
          {youtubeLink && (
            <a
              className="bg-white rounded-full p-2"
              href={youtubeLink}
              target="_blank"
              rel="noreferrer"
            >
              <SiYoutube className="text-sm md:text-3xl" color="#ff0000" />
            </a>
          )}
          {codeLink && (
            <a
              className="bg-white rounded-full p-2"
              href={codeLink}
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub className="text-sm md:text-3xl" color="#000000" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
