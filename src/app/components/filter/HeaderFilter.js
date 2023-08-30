import moment from "moment";
import Icon from "../icon/Icon";
require('moment/locale/es-mx');

import IconNext from '@/assets/image/vector-button-next.svg';
import IconBack from '@/assets/image/vector-button-back.svg';

export default function HeaderFilter() {
  let currentTime = moment();
  currentTime.locale('es-MX');

  return(
    <div className="relative min-w-full">
      <div className="relative w-full pb-3 flex flex-row justify-start items-center gap-x-6 border-b-2 border-pink-500">
        <time className="text-[40px] font-resolute font-secondary">{currentTime.format('MMMM, YYYY')}</time>
        <div className="relative h-fit flex flex-row gap-x-4 items-center">
          <Icon
            title={'Back Month'}
            width={36}
            height={36}
            src={IconBack}
            additionalCSS={'object-cover rotate-180 cursor-pointer'}
          />
          <Icon
            title={'Next Month'}
            width={36}
            height={36}
            src={IconNext}
            additionalCSS={'object-cover cursor-pointer'}
          />
        </div>
      </div>
    </div>
  )
}