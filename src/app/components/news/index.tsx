import Image, { StaticImageData } from 'next/image'

interface INews {
  title: string
  description: string
  imgSource: StaticImageData
}

export default function NewsItem({ title, description, imgSource }: INews) {
  return (
    <div className="flex">
      <div className="p-10">
        <h2 className="font-monument text-5xl pb-4">{title}</h2>
        <h4 className="font-satoshi text-base">{description}</h4>
      </div>
      <Image alt="news-img" src={imgSource} height={300} width={450} />
    </div>
  )
}
