import Image from "next/image";
import { Icon, Navbar } from "../components";
import Footer from "../components/Footer";
import { generateContentItem } from "../utils";
import { metaData } from "../metaData";

import XochitlImage from '../assets/image/banner-image-2.png';
import ShareIcon from '../assets/image/socmed/share-white-fill.png';
import FacebookIcon from '../assets/image/socmed/facebook-white-fill.png';
import TwitterIcon from '../assets/image/socmed/twitter-white-fill.png';
import InstagramIcon from '../assets/image/socmed/instagram-white-fill.png';
import VidaPersonal from '../assets/image/vida-personal.png';
import ConoceImage from '../assets/image/text/image-conoce-xochitl.webp';


export async function generateMetadata() {
  return await metaData('xochitl')
}

export default async function Meets() {
  const socMeds = [
    { src: ShareIcon, title: "share-icon", width: 24, height: 24 },
    { src: FacebookIcon, title: "facebook-icon", width: 11.57, height: 22.03 },
    { src: TwitterIcon, title: "twitter-icon", width: 25.05, height: 20.36 },
    { src: InstagramIcon, title: "instagram-icon", width: 22.03, height: 22.03 },
  ];

  const content = [
    {
      type: 'article',
      title: "Una vida de compromiso social y tecnológico",
      excerpt: 'Xóchitl Gálvez es una destacada ingeniera, empresaria y política mexicana, cuyo trabajo y dedicación han dejado huellas en varios sectores del país, desde la tecnología hasta el servicio público.\nSu trayectoria es un ejemplo de cómo con determinación y persistencia–sí se puede salir adelante en México.'
    },
    {
      type: 'article',
      title: "Orígenes y Educación",
      excerpt: 'Nación en 1964 en Pachuca, Hidalgo, Xóchitl es de ascendencia otomí. Su origen indígena ha influido profundamente en su visión del mundo y en su compromiso con los derechos humanos y el bienestar de los pueblos indígenas de México.\nPara trasladarse a su escuela debía trasladarse todos los días y para costear sus estudios vendía gelatinas en el mercado de su pueblo.\nXóchitl es ingeniera en sistemas computacionales por el Universidad Nacional Autónoma de México Politécnico Nacional (UNAM) y y posteriormente se especializó en robótica, inteligencia artificial, edificios inteligentes, sustentabilidad y ahorro de energía.'
    },
    {
      type: 'article',
      title: "Trayectoria en el Sector Privado",
      excerpt: 'Xóchitl comenzó su vida laboral como programadora y continuó desempeñándose c con éxito en el ámbito de las tecnologías de la información.\nFundó empresas enfocadas en ofrecer servicios informáticos y digitales, consolidando su reputación como una de las mujeres más influyentes en el sector tecnológico mexicano.'
    },
    {
      type: 'quote',
      quote: `¨Tengo un enfoque distinto para México, con ideas más frescas encaminadas hacia un México sin límites.¨`,
      author: 'Xóchitl Gálvez'
    },
    {
      type: 'article',
      title: "Compromiso Social",
      excerpt: 'A inicios del siglo XXI, su camino tomó un giro hacia el servicio público. Iniciando en la dirección de la Comisión Nacional para el Desarrollo de los Pueblos Indígenas (CDI).\nDesde este cargo, impulsó proyectos que buscaban mejorar las condiciones de vida de las comunidades indígenas, reconociendo y promoviendo sus derechos y cultura. Posteriormente, ha ocupado diversos cargos públicos, incluyendo fungir como Jefa Delegacional de la Miguel Hidalgo en la Ciudad de México y Senadora de la República.\nEn cada puesto ha buscado combinar su experiencia académica con su compromiso social, generando proyectos que integren la modernización con la inclusión y justicia buscando un México justo y sin límites.'
    },
    {
      type: 'article',
      title: "Vida Personal",
      excerpt: 'Aunque no están casados, Xóchitl y Rubén Sánchez se dicen esposos y juntos tienen dos hijos Diana y Juan Pablo. Le va al Club de Fútbol Cruz Azul y es una fanática del ciclismo.',
    },
    {
      type: 'image',
      image: VidaPersonal
    },
    {
      type: 'article',
      title: "Visión",
      excerpt: 'Xóchitl es un claro ejemplo de que la combinación de pasión, educación y compromiso pueden generar transformaciones positivas.\nA través de su carrera, ha demostrado que es posible unir mundos aparentemente opuestos, como la tecnología y la tradición, para construir un México más justo e incluyente.\nSu historia es una inspiración para las nuevas generaciones, mostrando que con determinación y amor por lo que se hace, es posible dejar una huella profunda en la sociedad.'
    },
  ];

  return(
    <>
      <Navbar page='xochitl' />
      <main className="relative min-h-screen flex flex-col items-center justify-between">
        <section className="relative w-full h-screen md:h-[800px] flex flex-col-reverse md:flex-row flex-nowrap">
          <div className="basis-1/3 md:basis-1/2 md:relative bg-secondary w-full md:min-h-[800px] flex justify-center items-center">
            <div className="w-3/4 md:w-2/3 h-max relative flex flex-col gap-5 md:gap-10">
              <div className="absolute md:relative w-full h-[99px] -top-44 md:-top-0 lg:w-[360px] lg:h-[180px]">
                <Image
                  fill
                  sizes="100%"
                  alt="Conoce a Xochitl"
                  src={ConoceImage}
                  className="object-contain"
                />
              </div>
              <p className="text-white font-appliedSans text-base md:text-[22px]">Xóchitl es una mujer que toda su vida se ha enfrentado y ha luchado contra la desigualdad en México, y ha podido salir adelante a base esfuerzo, valentía y determinación.</p>
              <ul className="flex flex-row items-center gap-10">
                {socMeds.map((socMed, index) => (
                  <li key={index}><Icon {...socMed}/></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="basis-2/3 md:basis-1/2 md:relative w-full md:h-[760px]">
            <div className="w-full h-full">
              <Image src={XochitlImage} alt="xochitl-image" className="w-full h-full object-cover"/>
            </div>
          </div>
        </section>
        <section className="relative w-full lg:w-10/12 mx-auto min-h-screen mt-14 mb-14 box-border">
          <div className="flex flex-col gap-10 md:gap-20">
            {content.map((item, index) => generateContentItem(item, index))}
          </div>
        </section>
      </main>
      <Footer borderStyle="border-t-[1.25px] border-[color:var(--secondary-color)]"/>
    </>
  )
}