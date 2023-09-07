import { getDictionary } from "./dictionaries/dictionaries";


const pageURL = process.env.NEXT_PUBLIC_URL;

export async function metaData (page) {
  const dict = await getDictionary(page);

  return {
    metadataBase: new URL(pageURL),
    title: dict.title, 
    description: dict.description,
    icons: {
      icon: '/xochitl.ico',
    },
    viewport: {
      initialScale: 1,
      minimumScale: 1,
      maximumScale: 5,
      userScalable: 'yes',
      width: 'device-width',
    },
    themeColor: '#ffffff',
    openGraph: {
      title: dict.title, 
      description: dict.description,
      images: [
        {
          url: "http://www.xochitl.io/cdn/shop/files/Frame_527.png?v=1693529956",
          width: 2400,
          height: 1260,
        }
      ],
      url: `${ pageURL }/${page === 'homepage' ? '/' : '/' + page}`,
      type: 'website',
      locale: 'es_MX',
      siteName: 'Xochitl',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${ pageURL }/${page === 'homepage' ? '/' : '/' + page}`
    }
  }
}