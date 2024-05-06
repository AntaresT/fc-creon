import Card from '@/app/components/card'
import LaunchImg from '../../../../public/assets/launchpad.png'
import Revenue from '../../../../public/assets/revenue.png'
import Token from '../../../../public/assets/token.png'

export default function CardSection() {
  return (
    <div className="flex flex-row justify-center items-center mb-40 w-screen gap-28">
      <Card
        title="Token"
        subTitle="The gateway token to the world of AI"
        cardImg={Token}
        description="Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
      />
      <Card
        title="Revenue"
        subTitle="Driving income and growth through decentralization"
        cardImg={Revenue}
        description="CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
      />
      <Card
        title="Launchpad"
        subTitle="Driving the future of AI innovation"
        cardImg={LaunchImg}
        description="The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
      />
    </div>
  )
}
