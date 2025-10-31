export default function InputLogin({
   type = "text",
   name,
   placeholder = "Enter here",
   className,
   value,
   onChange,
   icon,
}) {
   return (
      <fieldset className={`flex items-center gap-2 w-full relative ${className}`}>
         <input
            className='bg-transparent border-0 border-b outline-0 p-2 w-full text-sm lg:text-base'
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
         />
         <span className='absolute right-0'>{icon}</span>
      </fieldset>
   );
}
