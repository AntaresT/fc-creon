export default function LogoVideo() {
  return (
    <video
      className="inset-0 object-cover -z-10 h-485 w-800"
      src={require('../../../../public/creon-logo.mp4')}
      autoPlay
      loop
      muted
    />
  )
}
