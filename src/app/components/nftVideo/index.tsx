import GradientBackground from '../gradientBg'

export default function NftVideo() {
  return (
    <>
      <GradientBackground />
      <video
        className="inset-0 w-800 object-cover h-800"
        src={require('../../../../public/nft-video.mp4')}
        autoPlay
        loop
        muted
      />
    </>
  )
}
