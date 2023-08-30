import { Button, SubscribeForm } from '@/components'
import BannerImage from '@/components/BannerImage'
import { ProposalSection, VideoSection } from '@/sections'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between">
      <BannerImage />
      <section className='relative w-full'>
        <SubscribeForm />
        <div className='font-black mb-20 w-[calc(50%-20px)] pl-[128px] pr-[182px] pt-[90px] pb-[223px] float-right box-border bg-[#ECECEC]'>
          <div className='w-[362px]'>
            <h2 className='font-resolute tracking-[0.8px] leading-[26px] font-normal text-[#231F20] text-[22px] pb-2 border-b-2 border-pink-500'>Es hora de tomar acción</h2>
            <h3 className='mt-[22px] text-[18px] font-bold'>México te necesita</h3>
            <h4 className='mt-[10px] text-[18px] font-medium'>Conoce aquí el calendario 2023-2024 de Xóchitl Gálvez y participa en ellos.</h4>
            <Button
              typeButton='button'
              typeColor={'primary'}
              text={'VER CALENDARIO'}
              customClass={'min-w-[318px] mt-[32px]'}
            />
          </div>
        </div>
      </section>
      <ProposalSection />
      <VideoSection />
    </main>
  )
}
