import Image from "next/image";

export default function FooterLogo ({
  src,
  width = "w-full max-w-[86px] md:max-w-[160px]",
  height = "h-[31px] md:h-[57px]",
}) {

  return(
    <div className={`relative ${width} ${height}`}>
      <Image
        fill
        sizes="100%"
        className={'object-cover'}
        src={src}
        alt="logos"
      />
    </div>
  )
}