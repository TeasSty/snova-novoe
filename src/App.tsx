import { CityChapter } from './components/CityChapter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { ShopFloor } from './components/ShopFloor'
import { Works } from './components/Works'
import { Workshops } from './components/Workshops'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        К содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <CityChapter />
        <ShopFloor />
        <Works />
        <Services />
        <Workshops />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
