import { Icon, Navbar, TableEventSection } from '../components';
import Footer from '../components/Footer';
import { metaData } from '../metaData';

import Watermark from '../assets/image/vector-watermark.svg';

export async function generateMetadata() {
  return await metaData('eventos')
}

export default async function Events() {

  return(
    <>
      <Navbar page={'eventos'} />
      <main className="relative min-h-screen mt-[90px] px-40 py-16 flex flex-col">
        <TableEventSection />
        <div className='absolute bottom-0 right-0'>
          <Icon
            title={'xochitl watermark'}
            src={Watermark}
            width={400}
            height={500}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}