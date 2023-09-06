import { Navbar, ProposalSection } from "../components";

export default function Proposal() {
  return (
    <>
      <Navbar page={'propuestas'} />
      <main className="relative min-h-screen flex flex-col items-center justify-between">
        <ProposalSection />
      </main>
    </>
  )
}
