import Image from "next/image";
import { Navbar } from "../components";





export default function Meets() {


  return(
    <>
      <Navbar page='xochitl' />
      <main className="relative min-h-screen flex flex-col items-center justify-between">
        <section className="relative w-full h-[800px] flex flex-row flex-nowrap">
          <div className="relative bg-secondary w-full min-h-[800px]">
            <div></div>
            <article></article>
          </div>
          <div className="relative bg-gray-500 w-full h-[760px]">
            <div className="">
            </div>
          </div>
        </section>
        <section className="relative w-10/12 mx-auto min-h-screen bg-gray-300 mt-14 mb-28 box-border">
          <article className="relative ">

          </article>
        </section>
      </main>
    </>
  )
}