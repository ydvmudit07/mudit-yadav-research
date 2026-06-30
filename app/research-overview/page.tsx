import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import PaperContent from '@/components/PaperContent'

export const metadata = {
  title: 'Research Overview | Forecasting India\'s Eighth Pay Commission',
  description: 'Complete research overview of the paper on forecasting India\'s Eighth Pay Commission.',
}

export default function ExecutiveSummaryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PaperContent />
      </main>
      <Footer />
    </>
  )
}
