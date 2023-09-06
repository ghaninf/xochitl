import Image from "next/image";
import XochitlImage from '../assets/image/banner-image-2.png';
import ShareIcon from '../assets/image/socmed/share-white-fill.png';
import FacebookIcon from '../assets/image/socmed/facebook-white-fill.png';
import TwitterIcon from '../assets/image/socmed/twitter-white-fill.png';
import InstagramIcon from '../assets/image/socmed/instagram-white-fill.png';
import VidaPersonal from '../assets/image/vida-personal.png';
import { Icon, Navbar } from "../components";
import Footer from "../components/Footer";

export default function Meets() {
  const socMeds = [
    { src: ShareIcon, title: "share-icon", width: 24, height: 24 },
    { src: FacebookIcon, title: "facebook-icon", width: 11.57, height: 22.03 },
    { src: TwitterIcon, title: "twitter-icon", width: 25.05, height: 20.36 },
    { src: InstagramIcon, title: "instagram-icon", width: 22.03, height: 22.03 },
  ];

  const articles = [
    {
      title: "UNA VIDA DE COMPROMISO SOCIAL Y TECNOLOGICO",
      excerpt: 'Xóchitl es una mujer que toda su vida se ha enfrentado y ha luchado contra la desigualdad en México, y ha podido salir adelante a base esfuerzo, valentía y determinación.'
    },
    {
      title: "ORIGENES Y EDUCACION",
      excerpt: 'Nación en 1964 en Pachuca, Hidalgo, Xóchitl es de ascendencia otomí. Su origen indígena ha influido profundamente en su visión del mundo y en su compromiso con los derechos humanos y el bienestar de los pueblos indígenas de México. Para trasladarse a su escuela debía trasladarse todos los días y para costear sus estudios vendía gelatinas en el mercado de su pueblo. Xóchitl es ingeniera en sistemas computacionales por el Universidad Nacional Autónoma de México Politécnico Nacional (UNAM) y y posteriormente se especializó en robótica, inteligencia artificial, edificios inteligentes, sustentabilidad y ahorro de energía.'
    },
    {
      title: "TRAYECTORIA EN EL SECTOR PRIVADO",
      excerpt: 'Xóchitl comenzó su vida laboral como programadora y continuó desempeñándose c con éxito en el ámbito de las tecnologías de la información. Fundó empresas enfocadas en ofrecer servicios informáticos y digitales, consolidando su reputación como una de las mujeres más influyentes en el sector tecnológico mexicano.'
    },
    {
      title: "COMPROMISO SOCIAL",
      excerpt: 'A inicios del siglo XXI, su camino tomó un giro hacia el servicio público. Iniciando en la dirección de la Comisión Nacional para el Desarrollo de los Pueblos Indígenas (CDI). Desde este cargo, impulsó proyectos que buscaban mejorar las condiciones de vida de las comunidades indígenas, reconociendo y promoviendo sus derechos y cultura. Posteriormente, ha ocupado diversos cargos públicos, incluyendo fungir como Jefa Delegacional de la Miguel Hidalgo en la Ciudad de México y Senadora de la República. En cada puesto ha buscado combinar su experiencia académica con su compromiso social, generando proyectos que integren la modernización con la inclusión y justicia buscando un México justo y sin límites.'
    },
    {
      title: "VIDA PERSONAL",
      excerpt: 'Aunque no están casados, Xóchitl y Rubén Sánchez se dicen esposos y juntos tienen dos hijos Diana y Juan Pablo. Le va al Club de Fútbol Cruz Azul y es una fanática del ciclismo.',
      image: VidaPersonal
    },
    {
      title: "VISION",
      excerpt: 'Xóchitl es un claro ejemplo de que la combinación de pasión, educación y compromiso pueden generar transformaciones positivas. A través de su carrera, ha demostrado que es posible unir mundos aparentemente opuestos, como la tecnología y la tradición, para construir un México más justo e incluyente.Su historia es una inspiración para las nuevas generaciones, mostrando que con determinación y amor por lo que se hace, es posible dejar una huella profunda en la sociedad.'
    },
  ]

  return(
    <>
      <Navbar page='xochitl' />
      <main className="relative min-h-screen flex flex-col items-center justify-between">
        <section className="relative w-full h-[800px] flex flex-row flex-nowrap">
          <div className="relative bg-secondary w-full min-h-[800px] flex justify-center items-center">
            <div className="w-2/3 relative flex flex-col gap-10">
              <h1 className="text-[68.96px] leading-[89.54px] tracking-[4.06px] font-bold text-white font-resolute">CONOCE A XOCHITL</h1>
              <p className="text-white font-appliedSans text-[22px]"></p>
              <ul className="flex flex-row items-center gap-10">
                {socMeds.map((socMed, index) => (
                  <li key={index}><Icon {...socMed}/></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative bg-gray-500 w-full h-[760px]">
            <div className="w-full h-full">
              <Image src={XochitlImage} alt="xochitl-image" className="w-full h-full object-cover"/>
            </div>
          </div>
        </section>
        <section className="relative w-10/12 mx-auto min-h-screen bg-gray-300 mt-14 mb-28 box-border">
          <div className="flex flex-col gap-20">
            {articles.map((article, index) => (
              <article key={index} className="relative">
                <div className="flex flex-col gap-5 px-20">
                  <h2 className="font-resolute w-max text-[27px] text-[color:var(--secondary-color)] border-b-4 border-b-[color:var(--primary-color)]">{article.title}</h2>
                  <p className="font-appliedSans text-[25px]">{article.excerpt}</p>
                </div>
                {article.image ?
                  <Image src={article.image} alt={article.title} className="relative w-full mt-20"/>
                  :
                  ''
                }
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}