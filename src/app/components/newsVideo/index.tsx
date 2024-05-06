export default function NewsVideo() {
  return (
    <>
      <video
        className="inset-0 object-cover -z-10 h-screen w-screen"
        src={require('../../../../public/roadmap-video.mp4')}
        autoPlay
        loop
        muted
      />
    </>
  )
}
