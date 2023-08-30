import Button from "../Button"
import ArrowText from "./Arrow.text"

export default function TitleCaption({ title, title2, caption, textLink, typeTextLink, link, onClick, color }) {


  const listType = {
    button: <Button text={textLink} typeColor={color} onClick={onClick} />,
    arrow: <ArrowText title={textLink} href={link} />
  }

  return(
    <div className="relative flex flex-col gap-y-[10px] text-white">
      <h2 className="font-resolute text-[55px] tracking-[2px] leading-[130%]">{title}</h2>
      {
        title2 
        ? <h2 className="font-resolute text-[55px] tracking-[2px] leading-[130%]">{title2}</h2>
        : ''
      }
      <h4 className="font-appliedSans text-[18px]">{caption}</h4>
      <div className="mt-4">
        {listType[typeTextLink]}
      </div>
    </div>
  )
}