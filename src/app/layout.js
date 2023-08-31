import localFont from 'next/font/local';
import '@/assets/css/globals.css';
import '@/assets/css/animation.css';

const resoluteNF = localFont({
  src: '../assets/font/Resolute NF.ttf',
  variable: '--font-resolute'
})

const version1 = localFont({
  src: '../assets/font/Version1Int.otf',
  variable: '--font-version'
})

const AppliedSansPro = localFont({
  src: '../assets/font/AppliedSansPro.ttf',
  variable: '--font-applied-sans'
})

export const metadata = {
  title: 'Xóchitl Gálvez',
  description: 'Juntos por un México sin límites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es_MX">
      <body className={`${resoluteNF.variable} ${version1.variable} ${AppliedSansPro.variable}`}>
        {children}
      </body>
    </html>
  )
}
