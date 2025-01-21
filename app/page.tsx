import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Gallery from "../components/gallery"
import Footer from "../components/footer"
import AboutSection from "../components/about-section"

export default function Home() {
  return (
    <main className="font-poppins bg-black">
      <Navbar />
      <Hero />
      <Gallery />
      <AboutSection/>
      <Footer />
    </main>
  )
}

