export default function BannerVideo() {
  return (
    <>
      <video
        className="absolute inset-0 object-cover -z-10 h-8vh w-screen"
        src={require('../../../../public/main-background.mp4')}
        autoPlay
        loop
        muted
      />
    </>
  )
}
