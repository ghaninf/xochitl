import Image from "next/image";

export default function FooterLogo ({
  src,
  width = "min-w-[86px] md:min-w-[160px]",
  height = "min-h-[31px] md:min-h-[57px]",
}) {

  return(
    <div className={`relative ${width} ${height}`}>
      <Image
        fill
        sizes="100%"
        className={'absolute object-contain'}
        src={src}
        alt="logos"
      />
    </div>
  )
}