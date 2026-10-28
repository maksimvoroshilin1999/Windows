import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import Specs from '@/components/Specs'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <Gallery />
        <Specs />
        <Testimonials />
        <Process />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}