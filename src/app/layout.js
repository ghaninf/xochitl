import localFont from 'next/font/local';
import './assets/css/globals.css';
import './assets/css/animation.css';

const resoluteNF = localFont({
  src: './assets/font/Resolute NF.ttf',
  variable: '--font-resolute'
})

const version1 = localFont({
  src: './assets/font/Version1Int.otf',
  variable: '--font-version'
})

const AppliedSansPro = localFont({
  src: './assets/font/AppliedSansPro.ttf',
  variable: '--font-applied-sans'
})

const AppliedSansProMed = localFont({
  src: './assets/font/AppliedSansProMedium.ttf',
  variable: '--font-applied-sans-med'
})

const Assistant = localFont({
  src: './assets/font/Assistant.ttf',
  variable: '--font-assistant'
})

const OpenSans = localFont({
  src: './assets/font/OpenSans.ttf',
  variable: '--font-open-sans'
})

const OpenSansLight = localFont({
  src: './assets/font/OpenSansLight.ttf',
  variable: '--font-open-sans-light'
})

export default function RootLayout({ children }) {
  return (
    <html lang="es_MX">
      <body className={`${resoluteNF.variable} ${version1.variable} ${AppliedSansPro.variable} ${Assistant.variable} ${OpenSans.variable} ${OpenSansLight.variable} ${AppliedSansProMed.variable}`}>
        {children}
      </body>
    </html>
  )
}
