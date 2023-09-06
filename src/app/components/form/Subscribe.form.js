"use client"

import { useState } from "react";
import Script from "next/script";

import Button from "../Button";
import { TitleCaptionForm } from ".";
import { SubscribeService } from "@/app/services";
import { checkFormIsFill } from "@/app/utils";
import InputForm from "./InputForm";

export default function SubscribeForm() {
  const [state, setState] = useState({
    input: {
      name: '',
      email: '',
      checked: false,
    },
    valid: {
      name: true,
      email: true,
      checked: true
    },
    isFill: false,
    disabled: false,
    success: false
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let valid = false;
    if (name === 'email') {
      valid = value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    }
    if (name === 'name') {
      valid = value.match(/^(\w+[a-zA-ZñÑáéíóúÁÉÍÓÚ\s])$/)
    }
    setState(prev => ({
      ...prev,
      input: {
        ...prev.input,
        [e.target.name]: e.target.value
      },
      valid: {
        ...prev.valid,
        [e.target.name]: valid
      },
      isFill: !checkFormIsFill({ ...state.input, [e.target.name]: e.target.value })
    }))
  }

  const handleClick = () => {
    setState(prev => ({
      ...prev,
      input: {
        ...prev.input,
        checked: !prev.input.checked
      },
      valid: {
        ...prev.valid,
        checked: !prev.valid.checked
      },
      isFill: !checkFormIsFill({ ...state.input, checked: !state.input.checked })
    }))
  }

  const [isLoading, setIsLoading] = useState(false)
 
  async function onSubmit(event) {
    if (state.isFill) {
      event.preventDefault();
      setIsLoading(true)
      try {
        const res = await SubscribeService.subscribe(state.input);
        if (res) {
          setState(prev => ({
            ...prev,
            success: true,
          }))
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const resetForm = () => {
    setState(prev => ({
      ...prev,
      input: {
        name: '',
        email: '',
        checked: false,
      },
      valid: {
        name: true,
        email: true,
        checked: true
      },
      isFill: false,
      success: false,
      disabled: false
    }))
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
      <form className="relative mt-12 sm:mt-16 md:mt-[90px] font-white" onSubmit={onSubmit}>
        <h2 className="mb-4 text-[22px] tracking-[1.32px] text-center">HAGAMOS ESTO JUNTOS</h2>
        <div className={`relative w-[318px] sm:w-[370px] mx-auto ${state.success ? 'flex' : 'hidden'} flex-col gap-[2px] justify-center items-center`}>
          <h4 className="text-center">You have been subscribe</h4>
          <Button
            text="Ok"
            onClick={resetForm}
            typeButton="button"
            typeColor="tertiary"
          />
        </div>
        <div className={`relative ${state.success ? 'hidden' : 'flex'} flex-col gap-[2px] justify-center items-center`}>
          <div className={`relative flex flex-col gap-[2px]`}>
            <InputForm
              labelText={'Nombre:'}
              labelFor={'name'}
              inputType={'text'}
              inputId={'name'}
              inputName={'name'}
              inputPlaceholder={'tu nombre'}
              inputValue={state.name}
              onChange={handleChange}
            />
            {
              !state.valid.name
              ? <div className="text-center w-[318px]">
                  <p>{'Please provide a valid name "John Doe"'}</p>
                </div>
              : ''
            }
          </div>
          <div className="relative flex flex-col gap-[2px]">
            <InputForm
              labelText={'Correo electrónico:'}
              labelFor={'email'}
              inputType={'email'}
              inputId={'email'}
              inputName={'email'}
              inputPlaceholder={'ejemplo@email.com'}
              inputValue={state.email}
              onChange={handleChange}
            />
            {
              !state.valid.email
              ? <div className="text-center w-[318px]">
                <p>{`Please provide a valid email address "example@domain.com"`}</p>
              </div>
              : ''
            }
          </div>
          <Button
            typeButton={'button'}
            typeColor={'tertiary'}
            text={isLoading ? 'CARGANDO...' : 'UNIRME AHORA'}
            onClick={onSubmit}
            customClass={'min-w-[318px] mt-4'}
          />
          <div id="suscribir" onClick={handleClick} className={`w-[318px] relative mt-8 flex flex-row items-center md:items-start flex-nowrap gap-x-4 cursor-pointer`}>
            <input type="checkbox" id="myCheck" name="test" required></input>
            <span className="relative w-[324px] text-[7.63px] md:text-xs font-light">*Enviando este formulario otorgas tu consentimiento para recibir comunicación relacionada con Xóchitl Gálvez.</span>
          </div>
        </div>
      </form>
      <Script async type="text/javascript" src="https://embeds.beehiiv.com/attribution.js" />
    </div>
  )
}