'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import IconExpand from '@/assets/image/vector-expand.svg';
import Icon from "../icon/Icon";
import { ArrowText } from "../text";
import { handleRichText } from "@/app/utils";

export default function ProposalSection() {
  const router = useRouter();
  const [menu, setMenu] = useState({
    menu1: [
      { title: 'Xóchitlnomics', expand: false, description: 'México es uno de los países más desiguales del mundo. Sin duda, uno de los principales problemas de nuestro país es la distribución de la riqueza en pocas manos.\n\nPara combatir esto primero necesitamos tener un Estado de Derecho, la ley es la ley y la deben de cumplir todos sin excepción alguna.\n\nNecesitamos recuperar la paz y la tranquilidad eliminando por completo las extorciones por parte de los funcionarios públicos.\n\nTenemos que darle todas las herramientas necesarias a las nuevas generaciones para que destaquen profesionalmente, así como crear las condiciones necesarias para su desarrollo óptimo.'},
      { title: 'Sistema Universal de Salud', expand: false, description: 'Necesitamos que cualquier persona, sin importar si está en el seguro social o si tiene trabajo forma\u{2013}pueda acceder a un hospital público que tenga infraestructura de calidad.\n\nDe la misma manera, necesitamos un suministro basto y suficiente de medicamentos, incluyendo los que son de cadena fría.' },
      { title: 'Internet para todo México', expand: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
      { title: 'Vivienda', expand: false, description: 'Que todas las personas tengan acceso a una vivienda digna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nUt risus dui, ultrices nec ultrices non, tincidunt a tellus. Proin suscipit tortor magna, ut volutpat sem malesuada eget.' },
      { title: 'Seguridad', expand: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
    ],
    menu2: [
      { title: 'Empleo', expand: false, description: 'Seguro de vida para todos aquellos que trabajan. Habilidades tecnológicas a todos los jóvenes para que accedan a mejores empleos.' },
      { title: 'Cambio climático', expand: false, description: 'México podría ser una potencia mundial en energía limpia.\n\nTenemos cientos de litorales donde podríamos desalar el agua y con energía solar producir hidrógeno verde, que es lo que va a mover la industria automotriz del futuro.' },
      { title: 'Proteccion de animales', expand: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
      { title: 'Equidad de género', expand: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus dui, ultrices nec ultrices non, tincidunt a tellus.\n\nProin suscipit tortor magna, ut volutpat sem malesuada eget.' },
    ]
  })

  const handleMenu = (menuArr, index) => {
    let listMenu = menu[menuArr]
    if (listMenu[index]?.href) {
      router.push(listMenu[index]?.href)
      return
    }
    listMenu[index].expand = !listMenu[index].expand
    setMenu(prev => ({
      ...prev,
      [menuArr]: listMenu
    }))
  }

  return(
    <section className="relative w-full h-auto 2xl:px-[22%] xl:px-44 lg:px-28 md:px-20 px-16 lg:py-40 py-20">
      <div className="relative w-full max-w-[550px]">
        <h1 id="font-secondary" className="text-4xl lg:text-[55px] font-resolute tracking-[2px] leading-loose">PROPUESTAS</h1>
        <h4 className="text-black font-appliedSans text-sm lg:text-[18px] leading-[160%]">Xóchitl sabe los desafíos y obstáculos que los Mexicanos se enfrentan al querer superarse. Reconoce que la historia no ha sido justa con México y por eso propone una agenda enfocada en impulsar a México y a los mexicanos hacia un futuro más justo, verde y sin límites.</h4>
      </div>
      <article className="relative flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-40 justify-center font-secondary font-appliedSans text-sm sm:text-xl lg:text-[30px] font-normal max-lg:mt-10">
        <ul className="relative w-full flex flex-col gap-y-8 lg:mt-16 max-sm:max-w-full max-w-[476px]" >
          {
            menu.menu1.map((el, key) => (
              <li key={key} className="max-w-full md:max-w-[476px]" >
                <div onClick={() => handleMenu('menu1' ,key)} className='inline-flex items-center gap-x-3 lg:gap-x-4 w-fit cursor-pointer'>
                  <Icon
                    src={IconExpand}
                    width={11}
                    height={16}
                    title={'Xóchitlnomics'}
                    additionalCSS={`max-h-3 lg:max-h-4 max-w-[8px] lg:max-w-[11px] ease-in-out duration-200 ${el?.expand ? 'rotate-90' : ''}`}
                  />
                  <span className={`${el?.expand ? 'before:w-0' : ''} relative before:w-full before:border-b-2 before:border-pink-500 before:absolute before:-bottom-1 before:left-0 before:transform before:duration-200`}>{el.title}</span>
                </div>
                <div className={`${el.expand ? 'scale-100 h-auto' : 'h-0 scale-y-0'} relative mt-2 sm:mt-3 lg:mt-4 pl-5 lg:pl-7 max-w-full md:max-w-sm lg:max-w-md transform ease-in-out duration-300`}>
                  {handleRichText(el.description)}
                </div>
              </li>
            ))
          }
        </ul>
        <ul className="relative w-full flex flex-col gap-y-8 lg:-mt-6 lg:max-w-[476px]" >
          {
            menu.menu2.map((el, key) => (
              <li key={key} className="max-sm:max-w-full max-w-[476px]" >
                <div onClick={() => handleMenu('menu2', key)} className='inline-flex items-center gap-x-4 w-fit cursor-pointer'>
                  <Icon
                    src={IconExpand}
                    width={11}
                    height={16}
                    title={'Xóchitlnomics'}
                    additionalCSS={`max-h-3 lg:max-h-4 max-w-[8px] lg:max-w-[11px] ${el?.expand ? 'rotate-90' : ''}`}
                  />
                  <span className={`${el?.expand ? 'before:w-0' : 'before:w-full'} relative before:border-b-2 before:border-pink-500 before:absolute before:-bottom-1 before:left-0 before:transform before:duration-200`}>{el.title}</span>
                </div>
                <div className={`${el.expand ? 'scale-100 h-auto' : 'h-0 scale-y-0'} relative mt-2 sm:mt-3 lg:mt-4 pl-5 lg:pl-7 max-w-full md:max-w-sm lg:max-w-md transform ease-in-out duration-300`}>
                  {handleRichText(el.description)}
                </div>
              </li>
            ))
          }
          <ArrowText
            title={'VER TODAS'}
            color={'font-secondary'}
            arrowColor={'blue'}
            href={'/'}
            width={30}
            height={24}
            additionalClass={'mt-4 md:mt-20 lg:mt-28 text-sm lg:text-[30px]'}
          />
        </ul>
      </article>
    </section>
  )
}