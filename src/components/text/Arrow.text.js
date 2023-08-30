import Link from "next/link";

import { VectorArrowRight } from "../icon";

export default function Arrow({ title, color, arrowCollor, href, width, height, additionalClass }) {
  return(
    <div className="relative w-fit pb-1 border-b-2 border-pink-500 box-border">
      <Link href={href} className={`relative max-w-fit font-appliedSans flex flex-row gap-x-4 items-center ${ color || 'text-white'} ${ additionalClass || ''} text-[26.75px]`} >
        {title}
        <div className={`relative w-${width || '12'} h-${height || '12'}`} title={title} >
          <VectorArrowRight fill={arrowCollor} />
        </div>
      </Link>
    </div>
  )
}