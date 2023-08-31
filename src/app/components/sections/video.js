import { TitleCaptionText } from "../text";
import VideoPlayer from '../VideoPlayer'

export default function VideoSection() {
  // const linkVideo = "https://drive.google.com/file/d/1O-rE5FhkCSr_oFEULwuZr2DW5LGw-l8Z/preview";
  // const linkVideo = "https://drive.google.com/file/d/1nBW_BGsKpSxOPI71L13-sJIrHV1wJpad/preview"
  const linkVideo = "https://mega.nz/embed/lyt1zBDA#oXLwhWOgNly83QKydaPKcMmlrG2b6UB2twkVms0EkbU!1a1m"

  return(
    <section className="relative max-lg:flex max-lg:flex-row max-lg:gap-10 w-full h-auto xl:mt-64 lg:mt-52 md:mt-40 xl:pl-[78px] lg:pl-14 md:pl-10 pl-6 xl:py-[138px] lg:py-24 md:py-16 py-12  box-border bg-secondary">
      <div className="relative max-w-[390px]">
        <TitleCaptionText
          title={'SIN MIEDO'}
          title2={'A NADA'}
          caption={'Xóchitl toda su vida se ha enfrentado y ha luchado contra la desigualdad en México y está aquí para luchar por la gente de México.'}
          typeTextLink={'arrow'}
          textLink={'CONOCE A XÓCHITL'}
          link={'#'}
        />
      </div>
      <div className="relative max-sm:-mt-10 max-md:-mt-16 max-lg:-mt-32 lg:absolute lg:-top-[230px] right-0 w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl h-full">
        <VideoPlayer src={linkVideo} width={680} height={680} />
      </div>
    </section>
  )
}