"use client"

import { Dropdown } from "../form";

export default function Filter({ values, data, handleChange }) {

  return(
      <div className="relative w-full px-9 py-6 flex flex-row font-appliedSans font-normal font-secondary text-[18px]">
        <div className="relative flex flex-row gap-x-6 pr-3 items-center border-r-2  border-slate-400">
          <label htmlFor="">FILTRAR POR:</label>
          <Dropdown
            name={'date'}
            value={values.date}
            placeholder={'FECHA'}
            data={data.date}
            isDate={true}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-x-6 px-6 items-center">
          <label htmlFor="">ESTADO:</label>
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
        <div className="flex flex-row gap-x-6 px-6 items-center">
          <label htmlFor="">MUNICIPIO:</label>
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