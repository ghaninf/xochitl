



export default function Filter() {
  return(
    <div className="relative w-full px-9 py-6 flex flex-row font-appliedSans font-normal font-secondary text-[18px]">
      <div className="flex flex-row gap-x-6 pr-3 items-center border-r-2 border-slate-400">
        <label htmlFor="">FILTRAR POR:</label>
        <select className="cursor-pointer">
          <option>Fetcha</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="flex flex-row gap-x-6 px-6 items-center">
        <label htmlFor="">ESTADO:</label>
        <select className="p-2 bg-stone-300 rounded-md cursor-pointer">
          <option>TODOS</option>
          <option>TODOS 1</option>
          <option>TODOS 2</option>
        </select>
      </div>
      <div className="flex flex-row gap-x-6 px-6 items-center">
        <label htmlFor="">MUNICIPIO:</label>
        <select className="p-2 bg-stone-300 rounded-md cursor-pointer">
          <option>Fetcha</option>
          <option>TODOS 1</option>
          <option>TODOS 2</option>
        </select>
      </div>
    </div>
  )
}