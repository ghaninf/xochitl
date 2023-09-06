export default function InputForm ({
  labelText,
  labelFor,
  inputType,
  inputId,
  inputName,
  inputPlaceholder,
  inputValue,
  onChange,
}) {
  return (
    <>
      <label htmlFor={labelFor} className='w-fit font-medium' >{labelText} <span className='text-[#D32F2F]'>*</span></label>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
        className='w-[318px] py-[10px] px-4 border border-transparant text-gray-600'
        required
      />
    </>
  )
};