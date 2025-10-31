import { Check } from "lucide-react";

const Radio = ({ id, name, label, checked, onChange, accentColor = "blue-600" }) => {
   // Dynamically creating Tailwind classes for reuse
   const checkedStyles = `peer-checked:border-${accentColor} peer-checked:bg-${accentColor}`;
   const focusStyles = `focus:ring-2 focus:ring-${accentColor} focus:ring-offset-2`;

   return (
      <label htmlFor={id} className='flex items-center space-x-3 cursor-pointer'>
         <input
            type='radio'
            id={id}
            name={name}
            value={id}
            checked={checked}
            onChange={onChange}
            className={`peer sr-only ${focusStyles}`}
         />

         <span className='text-white select-none'>{label}</span>

         <div
            className={`size-5 rounded bg-white border border-gray-400 flex items-center justify-center ${checkedStyles} transition-all duration-200 ease-in-out`}
         >
            {checked && <Check className='size-4 text-dark-primary' strokeWidth={5} />}
         </div>
      </label>
   );
};

export default Radio;
