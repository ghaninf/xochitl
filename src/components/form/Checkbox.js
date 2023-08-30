import Check from '../../assets/image/vector-checklist.svg';
import Icon from '../icon/Icon';


export default function Checkbox({ value }) {

  return(
    <div className={`relative w-[30px] h-[30px] border-2 rounded-[3px] border-white`} >
      {
        value
        ? <Icon
            title={'Aggree'}
            src={Check}
            width={30}
            height={30}
          />
        : ''
      }
    </div>
  )
}