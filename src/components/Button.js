import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

Button.propTypes = {
  icon: PropTypes.string,
  positionIcon: PropTypes.oneOf(['left', 'right']),
  text: PropTypes.string.isRequired,
  typeColor: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onClick: PropTypes.func,
  typeButton: PropTypes.oneOf(['button', 'link']),
  href: PropTypes.string
}

export default function Button(props) {
  const typeColor = {
    primary: 'font-white button-primary',
    secondary: 'font-white bg-secondary',
    tertiary: 'font-white button-cta',
  }
  const positionIcon = {
    left: 'flex-row',
    right: 'flex-row-reverse'
  }

  if (props.typeButton === 'button') {
    return(
      <button
        onClick={props?.onClick || undefined}
        className={`relative w-fit min-w-[100px] h-fit px-4 py-1.5 flex flex-nowrap gap-x-1 justify-center items-center box-border rounded-md cursor-pointer border border-transparent
          ${positionIcon[props?.positionIcon] || ''} ${typeColor[props?.typeColor] || ''} ${props?.customClass || ''}`}>
        { props?.icon ? <Image width={12} height={12} src={props?.icon} alt='ico' /> : '' }
        { props?.text || null }
      </button>
    )
  }

  return(
    <Link
      href={props?.href}
      className={`relative w-fit min-w-[100px] h-fit px-4 py-1.5 flex flex-nowrap gap-x-1 justify-center items-center box-border rounded-md cursor-pointer border border-transparent
        ${positionIcon[props?.positionIcon] || ''} ${typeColor[props?.typeColor] || ''} ${props?.customClass || ''}`}>
      { props?.icon ? <Image width={12} height={12} src={props?.icon} alt='ico' /> : '' }
      { props?.text || null }
    </Link>
  )
}