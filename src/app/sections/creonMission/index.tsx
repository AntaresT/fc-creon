import Accordion from '@/app/components/accordion'
import Image from 'next/image'
import DarkImage from '../../../../public/assets/darkImg.png'
import Launch from '../../../../public/assets/launch.svg'
import Limitless from '../../../../public/assets/limitless.svg'
import Profitability from '../../../../public/assets/Profitability.svg'
import Transparent from '../../../../public/assets/transparent.svg'

export default function CreonMission() {
  return (
    <div className="flex h-screen w-screen justify-center items-center mb-40">
      <div className="flex flex-col">
        <section className="container mx-auto">
          <p className="font-monument uppercase text-4xl w-700px">
            Our vision is to support the innovation of AI blockchain projects
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 inline-block text-transparent bg-clip-text">
              while prioritizing communities and democratizing profits
            </span>
          </p>
          <Image
            src={DarkImage}
            width={800}
            height={500}
            alt="darkNft"
            priority
          />
        </section>
      </div>
      <div>
        <Accordion title="Profitability and Growth" srcImage={Profitability}>
          At Creon, we handpick cutting-edge AI projects and offer our community
          and token holders early access and investment opportunities. Our
          community actively contributes to the growth and profitability of
          these projects, creating a dynamic ecosystem of innovation and shared
          success.
        </Accordion>
        <Accordion
          title="Transparent & Fair Decentralized Earnings"
          srcImage={Transparent}
        >
          At Creon, we handpick cutting-edge AI projects and offer our community
          and token holders early access and investment opportunities. Our
          community actively contributes to the growth and profitability of
          these projects, creating a dynamic ecosystem of innovation and shared
          success.
        </Accordion>
        <Accordion title="Lauching the future" srcImage={Launch}>
          At Creon, we handpick cutting-edge AI projects and offer our community
          and token holders early access and investment opportunities. Our
          community actively contributes to the growth and profitability of
          these projects, creating a dynamic ecosystem of innovation and shared
          success.
        </Accordion>
        <Accordion
          title="Limitless Possibilities of AI & Crypto"
          srcImage={Limitless}
        >
          At Creon, we handpick cutting-edge AI projects and offer our community
          and token holders early access and investment opportunities. Our
          community actively contributes to the growth and profitability of
          these projects, creating a dynamic ecosystem of innovation and shared
          success.
        </Accordion>
      </div>
    </div>
  )
}
