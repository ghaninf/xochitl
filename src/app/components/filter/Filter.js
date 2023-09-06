"use client"

import { useState } from "react"

import { Dropdown } from "../form";
import moment from "moment";

export default function Filter() {
  const [state, setState] = useState({
    value: {
      filter: 'FECHA',
      state: 'TODOS',
      city: 'TODOS'
    },
    data: {
      filter: ['FECHA', 'FECHA 1', 'FECHA 2', 'FECHA 3'],
      state: ['TODOS', 'TODOS 1', 'TODOS 2', 'TODOS 3'],
      city: ['TODOS', 'TODOS 1', 'TODOS 2', 'TODOS 3']
    }
  })

  const handleChange = (menu, value) => {
    setState(prev => ({
      ...prev,
      value: {
        ...prev.value,
        [menu]: value
      }
    }))
  }

  return(
    <div className="relative w-full px-9 py-6 flex flex-row font-appliedSans font-normal font-secondary text-[18px]">
      <div className="relative flex flex-row gap-x-6 pr-3 items-center border-r-2  border-slate-400">
        <label htmlFor="">FILTRAR POR:</label>
        <Dropdown
          name={'filter'}
          value={state.value.filter}
          data={state.data.filter}
          handleChange={handleChange}
        />
      </div>
      <div className="flex flex-row gap-x-6 px-6 items-center">
        <label htmlFor="">ESTADO:</label>
        <Dropdown
          name={'state'}
          value={state.value.state}
          data={state.data.state}
          arrow={'hidden'}
          customClassButton={'text-xs leading-8 tracking-normal font-bold p-1.5 text-zinc-800 bg-stone-300 rounded-md italic uppercase appearance-none cursor-pointer'}
          handleChange={handleChange}
        />
      </div>
      <div className="flex flex-row gap-x-6 px-6 items-center">
        <label htmlFor="">MUNICIPIO:</label>
        <Dropdown
          name={'city'}
          value={state.value.city}
          data={state.data.city}
          arrow={'hidden'}
          customClassButton={'text-xs leading-8 tracking-normal font-bold p-1.5 text-zinc-800 bg-stone-300 rounded-md italic uppercase appearance-none cursor-pointer'}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}