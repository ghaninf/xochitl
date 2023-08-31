import Button from "../Button"
import ArrowText from "./Arrow.text"

export default function TitleCaption({ title, title2, caption, textLink, typeTextLink, link, onClick, color }) {


  const listType = {
    button: <Button text={textLink} typeColor={color} onClick={onClick} />,
    arrow: <ArrowText title={textLink} href={link} arrowColor={'white'} />
  }

  return(
    <div className="relative flex flex-col gap-2 lg:gap-3 text-white">
      <h2 className="font-resolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] tracking-[2px] xl:leading-[130%]">{title}</h2>
      {
        title2 
        ? <h2 className="font-resolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] tracking-[2px] leading-[130%]">{title2}</h2>
        : ''
      }
      <h4 className="font-appliedSans text-sm lg:text-base xl:text-[18px]">{caption}</h4>
      <div className="mt-4">
        {listType[typeTextLink]}
      </div>
    </div>
  )
}