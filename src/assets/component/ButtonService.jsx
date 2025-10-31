import { useNavigate } from "react-router-dom";

export default function ButtonService({ path, label }) {
   const navigate = useNavigate();
   return (
      <button
         className='button-secondary text-lg lg:text-3xl w-50 lg:w-80 h-18 lg:h-21 mx-auto mt-8 font-mono px-6!'
         onClick={() => navigate(path)}
      >
         {label}
      </button>
   );
}
