import { Navbar, ProposalSection } from "../components";
import Footer from "../components/Footer";
import { metaData } from "../metaData";

export async function generateMetadata() {
  return await metaData('propuestas')
}

export default async function Proposal() {
  return (
    <>
      <Navbar page={'propuestas'} />
      <main className="relative min-h-screen pt-[140px] flex flex-col items-center justify-between box-border">
        <ProposalSection />
      </main>
      <Footer />
    </>
  )
}
