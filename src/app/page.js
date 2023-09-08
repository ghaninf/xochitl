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
          <div className='relative w-full sm:w-[362px] font-black min-h-[643px] max-sm:ml-[35px] max-lg:ml-[40%] max-lg:-mt-10 max-sm:max-w-[calc(100%-35px)] max-lg:max-w-[60%] p-9 lg:w-[calc(50%-20px)] lg:px-32 lg:py-24 lg:float-right box-border bg-[#ECECEC] z-20'>
            <div className='relative w-full max-w-[380px] flex flex-col gap-y-5 justify-center '>
              <h2 className='w-fit font-resolute tracking-[0.8px] leading-[26px] font-normal text-[#231F20] text-[22px] pb-1 border-b-[3px] border-pink-500'>Es hora de tomar acción</h2>
              <h3 className='text-2xl text-black font-version uppercase font-bold leading-6 tracking-[2px]'>México te necesita</h3>
              <h4 className='text-lg text-black font-normal font-openSans leading-6 tracking-[1px]'>Conoce aquí el calendario 2023-2024 de Xóchitl Gálvez y participa en ellos.</h4>
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
