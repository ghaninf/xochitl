import Image from "next/image";

import Link from "next/link";

export default function Logo ({ src }) {

  return(
    <Link href={'/'} className="" >
      <div className="relative min-w-[86px] min-h-[31px] md:min-w-[160px] md:min-h-[57px]">
        <Image
          fill
          sizes="100%"
          className={'absolute object-contain'}
          src={src}
          alt="logos"
        />
      </div>
    </Link>
  )
}