import { ChevronDown } from "lucide-react";

export default function Select({ options, label, name, className }) {
   return (
      <fieldset className={`flex items-center gap-2 w-full ${className}`}>
         <label className='font-semibold text-white text-lg min-w-max w-auto'>{label}</label>
         <label className='relative bg-input rounded w-full'>
            <ChevronDown className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none' />
            <select name={name} className='appearance-none border-0 outline-0 pl-3 py-2 pr-5 w-full'>
               <option value=''>Select an option</option>
               {options.map((item, index) => (
                  <option key={index} value={item}>
                     {item}
                  </option>
               ))}
            </select>
         </label>
      </fieldset>
   );
}
