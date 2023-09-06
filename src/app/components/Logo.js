import Image from "next/image";

import Link from "next/link";

export default function Logo ({
  src,
  width = "min-w-[86px] md:min-w-[160px]",
  height = "min-h-[31px] md:min-h-[57px]",
  href = '/'
}) {

  return(
    <Link href={href} className="" >
      <div className={`relative ${width} ${height}`}>
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