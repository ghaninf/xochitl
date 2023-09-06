import { TitleCaptionText } from "../text";

export default function VideoSection() {
  // const linkVideo = "https://mega.nz/embed/lyt1zBDA#oXLwhWOgNly83QKydaPKcMmlrG2b6UB2twkVms0EkbU!1a1m"

  return(
    <section className="relative w-full lg:h-[667px] flex flex-col lg:flex-row-reverse bg-[color:var(--secondary-color)]">
      <div className="lg:absolute flex px-2 lg:p-0 -top-10 lg:-top-32 lg:right-20 lg:w-[600px] h-[398px] lg:h-[680px] bg-white">
        <video src={"./video/xochitlvideo1.mp4"} className='w-full h-full object-cover' autoPlay loop muted/>
      </div>
      <div className="basis-1/2 lg:basis-full flex justify-start items-center p-10 lg:p-20">
        <div className="lg:basis-5/12">
          <TitleCaptionText
            title={'SIN MIEDO'}
            title2={'A NADA'}
            caption={'Xóchitl toda su vida se ha enfrentado y ha luchado contra la desigualdad en México y está aquí para luchar por la gente de México.'}
            typeTextLink={'arrow'}
            textLink={'CONOCE A XÓCHITL'}
            link={'#'}
          />
        </div>
      </div>
    </section>
  )
}