import Nav from './components/header'
import Banner from './sections/banner'
import CardSection from './sections/cardSection'
import CreonMission from './sections/creonMission'
import CreonPass from './sections/creonPass'
import Footer from './sections/footer'
import NewsLetter from './sections/newsLetter'
import ProfitSection from './sections/profit'

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <CreonPass />
      <ProfitSection />
      <CreonMission />
      <CardSection />
      <NewsLetter />
      <Footer />
    </main>
  )
}
