"use client"

import { Dropdown } from "../form";

export default function Filter({ values, data, handleChange }) {

  return(
      <div className="relative w-full px-0 py-3 md:py-5 flex flex-row gap-x-2 md:gap-x-0 font-appliedSans font-normal font-secondary text-[18px]">
        <div className="relative flex flex-row gap-x-2 md:gap-x-6 md:pr-3 items-center border-r-2 border-slate-400">
          <label htmlFor="" className="text-xs md:text-base">FILTRAR POR:</label>
          <Dropdown
            name={'date'}
            value={values.date}
            placeholder={'FECHA'}
            data={data.date}
            isDate={true}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-6 md:px-6 items-center">
          <label htmlFor="" className="text-xs md:text-base">ESTADO:</label>
          <Dropdown
            name={'state'}
            value={values.state}
            placeholder={'TODOS'}
            data={data.state}
            arrow={'hidden'}
            customClassButton={'text-xs leading-8 tracking-normal font-bold p-1.5 text-zinc-800 bg-stone-300 rounded-md italic uppercase appearance-none cursor-pointer'}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-6 md:px-6 items-center">
          <label htmlFor="" className="text-xs md:text-base">MUNICIPIO:</label>
          <Dropdown
            name={'city'}
            value={values.city}
            placeholder={'TODOS'}
            data={data.city}
            arrow={'hidden'}
            customClassButton={'text-xs leading-8 tracking-normal font-bold p-1.5 text-zinc-800 bg-stone-300 rounded-md italic uppercase appearance-none cursor-pointer'}
            handleChange={handleChange}
          />
        </div>
      </div>
  )
}