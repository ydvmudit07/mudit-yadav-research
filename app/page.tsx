import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { AuthorSection } from '@/components/AuthorSection'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AuthorSection />
      </main>
      <Footer />
    </>
  )
}
