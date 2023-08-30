import { BannerImage, Button, Navbar, ProposalSection, SubscribeForm, VideoSection } from "./components";


export default function Home() {
  return (
    <>
      <Navbar page={'/'} />
      <main className="relative min-h-screen flex flex-col items-center justify-between">
        <BannerImage />
        <section className='relative w-full'>
          <SubscribeForm />
          <div className='font-black max-md:ml-[35px] max-md:-mt-10 max-w-[calc(100%-35px)] p-9 md:mb-20 md:w-[calc(50%-20px)] md:pl-[128px] md:pr-[182px] md:pt-[90px] md:pb-[223px] md:float-right relative box-border bg-[#ECECEC]'>
            <div className='w-full sm:w-[362px]'>
              <h2 className='font-resolute tracking-[0.8px] leading-[26px] font-normal text-[#231F20] text-[22px] pb-2 border-b-2 border-pink-500'>Es hora de tomar acción</h2>
              <h3 className='mt-[22px] text-[18px] font-bold'>México te necesita</h3>
              <h4 className='mt-[10px] text-[18px] font-medium'>Conoce aquí el calendario 2023-2024 de Xóchitl Gálvez y participa en ellos.</h4>
              <Button
                typeButton='button'
                typeColor={'primary'}
                text={'VER CALENDARIO'}
                customClass={'min-w-full sm:min-w-[318px] mt-[32px]'}
              />
            </div>
          </div>
        </section>
        <div className="relative w-full max-md:hidden">
          <ProposalSection />
        </div>
        <div className="relative w-full max-md:hidden">
          <VideoSection />
        </div>
      </main>
    </>
  )
}
