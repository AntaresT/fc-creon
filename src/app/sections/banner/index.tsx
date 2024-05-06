/* eslint-disable react/no-unescaped-entities */
import BannerVideo from '@/app/components/bannerVideo'
import GradientBackground from '@/app/components/gradientBg'

export default function Banner() {
  return (
    <div className="pb-40">
      <GradientBackground />
      <div className="flex flex-col align-center h-8vh justify-end items-center ">
        <BannerVideo />
        <section className="w-9/12 justify-center">
          <h3 className="font-monument text-7xl xl:text-5xl align-text-bottom items-baseline pb-12 leading-tight uppercase">
            The world's first platform for Tokenizing AI blockchain projects
          </h3>
          <h5 className="font-monument bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 inline-block text-transparent bg-clip-text text-2xl xl:text-lg">
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </h5>
        </section>
      </div>
    </div>
  )
}
