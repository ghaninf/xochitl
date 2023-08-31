"use client"

import { useState } from "react";
import { TitleCaptionForm } from ".";
import Button from "../Button";
import Checkbox from "./Checkbox";
import Script from "next/script";

export default function SubscribeForm() {

  const [state, setState] = useState({
    name: '',
    email: '',
    checked: false
  })

  const handleChange = (e) => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = () => {
    setState(prev => ({
      ...prev,
      checked: !prev.checked
    }))
  }

  const submitForm = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    };
    const publicURL = process.env.NEXT_PUBLIC_URL
    
    fetch(`${publicURL}/api/subscribe`, requestOptions)
      .then(() => {
        setState({
          checked: false,
          email: '',
          name: ''
        })
      })
      .catch(error => {
        setState(prev => ({
          ...prev,
          errorMessage: error.message
        }))
      })
  }

  return(
    <div id="subscribe-section" className="relative lg:absolute lg:-top-[104px] w-full max-w-full lg:max-w-[calc(50%+20px)] bg-secondary pt-6 pb-16 px-8 sm:pb-20 sm:pt-10 sm:px-16 lg:py-16 xl:py-[82px] lg:pl-[140px] lg:pr-[88px] box-border z-10">
      <p>{state?.errorMessage}</p>
      <TitleCaptionForm
        title={'LA EXPERANZA DE MÉXICO'}
        caption={'Xóchitl Gálvez conoce los desafíos que se enfrentan los mexicanos todos los días y tiene las soluciones que México necesita para un futuro sin límites.'}
        textLink={'CONOCER MÁS'}
        typeTextLink={'arrow'}
        link={'#'}
      />
      <form className="relative mt-12 sm:mt-16 md:mt-[90px] font-white">
        <h2 className="mb-4 text-[22px] tracking-[1.32px] text-center">HAGAMOS ESTO JUNTOS</h2>
        <div className="relative w-[318px] sm:w-[370px] mx-auto flex flex-col gap-[2px] justify-center items-center">
          <div className='relative flex flex-col gap-[2px]'>
            <label htmlFor='name' className='w-fit font-medium' >Nombre: <span className='text-[#D32F2F]'>*</span></label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder={'tu nombre'}
              value={state.name}
              onChange={handleChange}
              className='w-[318px] py-[10px] px-4 border border-transparant
                focus:outline-none focus:border focus:ring-1 focus:ring-blue-600
                disabled:bg-zinc-100 disabled:text-zinc-500 disabled:border-zinc-200 disabled:shadow-none'
            />
          </div>
          <div className="relative flex flex-col gap-[2px]">
            <label htmlFor='email' className='w-fit font-medium' >Correo electrónico: <span className='text-[#D32F2F]'>*</span></label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder={'ejemplo@email.com'}
              value={state.email}
              onChange={handleChange}
              className='w-[318px] py-[10px] px-4 border border-transparant 
                focus:outline-none focus:border focus:ring-1 focus:ring-blue-600
                disabled:bg-zinc-100 disabled:text-zinc-500 disabled:border-zinc-200 disabled:shadow-none'
            />
          </div>
          <Button
            typeButton={'button'}
            typeColor={'tertiary'}
            text={'UNIRME AHORA'}
            onClick={submitForm}
            customClass={'min-w-[318px] mt-4'}
          />
          <div onClick={handleClick} className="relative mt-8 -mr-12 flex flex-row flex-nowrap gap-x-4 cursor-pointer">
            <Checkbox value={state.checked} />  
            <span className="relative w-[324px] text-xs font-light">*Enviando este formulario otorgas tu consentimiento para recibir comunicación relacionada con Xóchitl Gálvez.</span>
          </div>
        </div>
      </form>
      <Script async type="text/javascript" src="https://embeds.beehiiv.com/attribution.js" />
    </div>
  )
}