'use client'

import { Filter, HeaderFilter, Icon, EventSection, Navbar } from '../components';

import Watermark from '@/assets/image/vector-watermark.svg';

export default function Events() {

  return(
    <>
      <Navbar page={'events'} />
      <main className="relative min-h-screen mt-[90px] px-40 py-16 flex flex-col">
        <section className="">
          <HeaderFilter />
          <Filter />
        </section>
        <EventSection />
        <Icon
          additionalCSS={'fixed bottom-0 right-0 '}
          title={'xochitl watermark'}
          src={Watermark}
          width={400}
          height={500}
        />
      </main>
    </>
  )
}