import LogoVideo from '@/app/components/logoVideo'

export default function ProfitSection() {
  return (
    <section className="flex flex-col justify-center h-screen items-center mb-40">
      <div className="flex flex-col w-75% pb-10">
        <h3 className="font-monument text-7xl uppercase">Profiting Through</h3>
        <h5 className="font-monument text-4xl bg-gradient-to-r from-blue-600 via-purple-500 to-purple-700 inline-block text-transparent bg-clip-text self-end">
          AI Innovation & Decentralization
        </h5>
      </div>
      <div className="flex flex-row w-screen gap-16 justify-center">
        <LogoVideo />
        <div className="flex flex-col w-400px items-center justify-center">
          <h5 className="font-satoshi font-bold text-2xl pb-5">
            The dynamic community driven business model of the future.
          </h5>
          <h5 className="font-satoshi font-normal text-lg">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </h5>
        </div>
      </div>
    </section>
  )
}
