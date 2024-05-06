import GradientButton from '@/app/components/buttonBuyCreon'
import NftVideo from '@/app/components/nftVideo'
import PassNFTItems from '@/app/components/passNftItems'

export default function CreonPass() {
  return (
    <section className="bg-black flex h-screen justify-center items-center mb-40">
      <div className="w-45r flex flex-col px-10">
        <h3 className="font-monument uppercase text-7xl pb-8">
          Creon Pass NFT
        </h3>
        <div className="h-tiny bg-darkCian mb-8"></div>
        <h5 className="font-satoshi bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 inline-block text-transparent bg-clip-text text-xl w-35r pb-10">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </h5>
        <div className="flex flex-col gap-4 pb-8">
          <PassNFTItems>
            Pre-launch investment opportunities for upcoming AI projectss
          </PassNFTItems>
          <PassNFTItems>
            Free and early access to Creon built AI projects
          </PassNFTItems>
          <PassNFTItems>
            Higher allocation limits on the Creon AI Launchpad
          </PassNFTItems>
          <PassNFTItems>
            Revenue share distribution from Creon built AI projects
          </PassNFTItems>
        </div>
        <GradientButton>Buy Creon Pass</GradientButton>
      </div>
      <div className="shadow-inner">
        <NftVideo />
      </div>
    </section>
  )
}
