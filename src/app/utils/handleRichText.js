


export default function HandleRichText(text) {
  let richText = text
  if (richText?.match(/(?:\r\n|\r|\n)/g)) {
    richText = richText.split(/(?:\r\n|\r|\n)/g).map((sentance, key) => (
      <p key={key} className={`font-appliedSans font-normal text-black tracking-wide text-xs sm:text-sm lg:text-base last:mb-0 mb-2 sm:mb-3 lg:mb-4 ${sentance.match('<bullet>') ? 'bullet' : sentance.match('<subbullet>') ? 'subbullet' : '' }`}>
        {
          sentance?.replaceAll('<bullet>', '')?.replaceAll('<subbullet>', '') || sentance
        }
      </p>
    ))
    return richText
  } else {
    return <p className="font-appliedSans font-normal text-black tracking-wide text-xs sm:text-sm lg:text-base last:mb-0 mb-2 sm:mb-3 lg:mb-4">{text}</p>
  }

}