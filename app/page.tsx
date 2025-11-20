import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import ConsultationForm from '@/components/consultation-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
