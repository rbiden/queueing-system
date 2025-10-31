export default function Input({ label, name, placeholder = "Enter here", className, value, onChange }) {
   return (
      <fieldset className={`flex items-center gap-2 w-full ${className}`}>
         <label className='font-semibold text-white text-lg min-w-max w-auto'>{label}</label>
         <input
            className='bg-input border-0 outline-0 rounded p-2 w-full'
            type='text'
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
         />
      </fieldset>
   );
}
