import { BannerImage, Button, Navbar, ProposalSection, SubscribeForm, VideoSection } from "./components";
import Footer from "./components/Footer";
import { metaData } from "./metaData";

export async function generateMetadata() {
  return await metaData('homepage')
}

export default async function Home() {
  return (
    <>
      <Navbar page={'/'} />
      <main className="relative min-h-screen flex flex-col items-center justify-between">
        <BannerImage />
        <section className='relative w-full'>
          <SubscribeForm />
          <div className='font-black md:min-h-[550px] max-sm:ml-[35px] max-lg:ml-[40%] max-lg:-mt-10 max-sm:max-w-[calc(100%-35px)] max-lg:max-w-[60%] p-9 lg:mb-20 lg:w-[calc(50%-20px)] lg:pl-[128px] lg:pt-[91px] lg:float-right relative box-border bg-[#ECECEC] z-20'>
            <div className='mx-auto w-full sm:w-[362px]'>
              <h2 className='font-resolute tracking-[0.8px] leading-[26px] font-normal text-[#231F20] text-[22px] pb-1 border-b-[3px] border-pink-500'>Es hora de tomar acción</h2>
              <h3 className='mt-[23px] text-[18px] text-black font-version uppercase font-normal leading-normal tracking-[1.08px]'>México te necesita</h3>
              <h4 className='mt-[10px] text-[18px] text-black font-normal font-appliedSans leading-6 tracking-[0.63px]'>Conoce aquí el calendario 2023-2024 de Xóchitl Gálvez y participa en ellos.</h4>
              <Button
                href={'/eventos'}
                typeButton={'link'}
                typeColor={'primary'}
                text={'VER CALENDARIO'}
                customClass={'min-w-full sm:min-w-[318px] mt-[32px]'}
              />
            </div>
          </div>
        </section>
        <ProposalSection />
        <VideoSection />
      </main>
      <Footer/>
    </>
  )
}
