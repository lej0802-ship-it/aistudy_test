import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Curriculum from '@/components/Curriculum'
import Teachers from '@/components/Teachers'
import Schedule from '@/components/Schedule'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Curriculum />
      <Teachers />
      <Schedule />
      <Reviews />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </>
  )
}
