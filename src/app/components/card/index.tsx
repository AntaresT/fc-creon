import Image, { StaticImageData } from 'next/image'

interface ICard {
  title: string
  subTitle: string
  cardImg: StaticImageData
  description: string
}

export default function Card({ title, subTitle, cardImg, description }: ICard) {
  return (
    <div className="flex flex-col bg-darkCian w-400px h-auto rounded-md">
      <h4 className="font-monument uppercase px-8 pt-8 text-4xl">{title}</h4>
      <h4 className="font-satoshi bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 inline-block text-transparent bg-clip-text pt-8 px-8 text-xl">
        {subTitle}
      </h4>
      <Image className="pr-8" src={cardImg} alt="card-img" />
      <p className="p-8 font-satosh text-lg w-400px">{description}</p>
    </div>
  )
}
