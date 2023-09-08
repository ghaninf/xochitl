'use client'

import { useState } from "react";
import Link from "next/link";

import Icon from "../icon/Icon";
import { handleRichText } from "../../utils";

import IconExpand from '../../assets/image/vector-expand.svg';
import ArrowBlue from '../../assets/image/vector-arrow-blue.svg';
import { usePathname } from "next/navigation";


export default function ProposalSection() {
  const pathName = usePathname();

  const menu = {
    menu1: [
      { id: 'menu1', title: 'Xóchitlnomics', description: 'México es uno de los países más desiguales del mundo. Sin duda, uno de los principales problemas de nuestro país es la distribución de la riqueza en pocas manos.\n\n\nPara combatir esto primero necesitamos tener un Estado de Derecho, la ley es la ley y la deben de cumplir todos sin excepción alguna.\n\nNecesitamos recuperar la paz y la tranquilidad eliminando por completo las extorciones por parte de los funcionarios públicos.\n\nTenemos que darle todas las herramientas necesarias a las nuevas generaciones para que destaquen profesionalmente, así como crear las condiciones necesarias para su desarrollo óptimo.'},
      { id: 'menu2', title: 'Sistema Universal de Salud', description: 'Necesitamos que cualquier persona, sin importar si está en el seguro social o si tiene trabajo forma\u{2013}pueda acceder a un hospital público que tenga infraestructura de calidad.\n\nDe la misma manera, necesitamos un suministro basto y suficiente de medicamentos, incluyendo los que son de cadena fría.' },
      { id: 'menu3', title: 'Internet para todo México', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
      { id: 'menu4', title: 'Vivienda', description: 'Que todas las personas tengan acceso a una vivienda digna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nUt risus dui, ultrices nec ultrices non, tincidunt a tellus. Proin suscipit tortor magna, ut volutpat sem malesuada eget.' },
      { id: 'menu5', title: 'Seguridad', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
    ],
    menu2: [
      { id: 'menu6', title: 'Empleo', description: 'Seguro de vida para todos aquellos que trabajan. Habilidades tecnológicas a todos los jóvenes para que accedan a mejores empleos.' },
      { id: 'menu7', title: 'Cambio climático', description: 'México podría ser una potencia mundial en energía limpia.\n\nTenemos cientos de litorales donde podríamos desalar el agua y con energía solar producir hidrógeno verde, que es lo que va a mover la industria automotriz del futuro.' },
      { id: 'menu8', title: 'Proteccion de animales', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
      { id: 'menu9', title: 'Equidad de género', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
    ]
  };
  const [active, setActive] = useState('');

  return(
    <section className="relative w-full h-auto 2xl:px-[22%] px-14 md:px-16 lg:px-20 xl:px-24 py-20 lg:py-20 ">
      <div className="relative w-full max-w-[650px]">
        <h1 id="font-secondary" className="text-4xl lg:text-6xl font-extrabold font-resolute tracking-[1px] leading-loose">PROPUESTAS</h1>
        <h4 className="text-black text-lg lg:text-[22px] font-openSansLight font-light tracking-[1px] leading-[160%]">Xóchitl sabe los desafíos y obstáculos que los Mexicanos se enfrentan al querer superarse. <br/><br/>Reconoce que la historia no ha sido justa con México y por eso propone una agenda enfocada en impulsar a México y a los mexicanos hacia un futuro más justo, verde y sin límites.</h4>
      </div>
      <article className="relative flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-32 justify-center font-secondary font-appliedSans font-normal text-sm sm:text-xl lg:text-[30px] leading-[53.5px] tracking-[1px] max-lg:mt-10">
        <ul className="relative w-full pl-20 flex flex-col gap-y-8 lg:mt-16 max-sm:max-w-full max-w-2xl" >
          {
            menu.menu1.map((el, key) => (
              <li key={key} className="max-w-full md:max-w-2xl" >
                <div onClick={() => setActive(el.id === active ? '' : el.id)} className='inline-flex items-center gap-x-3 lg:gap-x-4 w-fit cursor-pointer'>
                  <Icon
                    src={IconExpand}
                    width={11}
                    height={16}
                    title={'Xóchitlnomics'}
                    additionalCSS={`max-h-3 lg:max-h-4 max-w-[8px] lg:max-w-[11px] ease-in-out duration-200 ${el.id === active ? 'rotate-90' : ''}`}
                  />
                  <span className={`${el.id === active ? 'before:w-0' : 'before:w-full'} relative before:border-b-[3px] before:border-pink-500 before:absolute before:-bottom-1 before:left-0 before:transform before:duration-200`}>{el.title}</span>
                </div>
                <div className={`${el.id === active ? 'animate-show-text' : 'animate-hide-text'} relative overflow-hidden w-full mt-2 sm:mt-3 lg:mt-4 pl-5 lg:pl-7 max-w-full md:max-w-md lg:max-w-lg xl:max-w-2xl transform ease-in-out duration-300`}>
                  {handleRichText(el.description, 'first:mt-0 mt-6 text-[22px] font-openSansLight font-light')}
                </div>
              </li>
            ))
          }
        </ul>
        <ul className="relative w-full flex flex-col gap-y-8 lg:-mt-6 lg:max-w-[500px]" >
          {
            menu.menu2.map((el, key) => (
              <li key={key} className="max-sm:max-w-full max-w-[500px]" >
                <div onClick={() => setActive(el.id === active ? '' : el.id)} className='inline-flex items-center gap-x-4 w-fit cursor-pointer'>
                  <Icon
                    src={IconExpand}
                    width={11}
                    height={16}
                    title={'Xóchitlnomics'}
                    additionalCSS={`max-h-3 lg:max-h-4 max-w-[8px] lg:max-w-[11px] ${el.id === active ? 'rotate-90' : ''}`}
                  />
                  <span className={`${el.id === active ? 'before:w-0' : 'before:w-full'} relative before:border-b-[3px] before:border-pink-500 before:absolute before:-bottom-1 before:left-0 before:transform before:duration-200`}>{el.title}</span>
                </div>
                <div className={`${el.id === active ? 'animate-show-text' : 'animate-hide-text'} relative overflow-hidden w-auto mt-2 sm:mt-3 lg:mt-4 pl-5 lg:pl-7 max-w-full md:max-w-sm lg:max-w-md transform ease-in-out duration-300`}>
                {handleRichText(el.description, 'first:mt-0 mt-6 text-[22px] font-openSansLight font-light')}
                </div>
              </li>
            ))
          }
          {pathName !== '/propuestas' &&
            <div className="relative mt-12 group w-fit pb-1 box-border cursor-pointer before:w-full before:border-b-[3px] before:border-pink-500 before:absolute before:-bottom-1 before:left-0 before:transform before:scale-x-100">
              <Link href={'/propuestas'} className={`relative max-w-fit font-version font-normal leading-[53.5px] tracking-[1px] flex flex-row gap-x-4 items-center text-secondary-color text-lg md:text-xl lg:text-[27px]`} >
                VER TODAS
                <div className={`relative w-fit h-fit`} >
                  <Icon
                    title={'VER TODAS'}
                    width={28}
                    height={22}
                    src={ArrowBlue}
                    additionalCSS={'w-[28px] h-[22.5px]'}
                  />
                </div>
              </Link>
            </div>
          }
          {/* <ArrowText
            title={'VER TODAS'}
            color={'font-secondary'}
            arrowColor={'blue'}
            href={'/eventos'}
            width={30}
            height={24}
            additionalClass={'mt-4 md:mt-20 lg:mt-28 text-sm lg:text-[30px]'}
          /> */}
        </ul>
      </article>
    </section>
  )
}