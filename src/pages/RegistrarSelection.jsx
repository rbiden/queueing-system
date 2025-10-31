import { useNavigate } from "react-router-dom";
import Background from "../assets/component/Background";
import LogoWithText from "../assets/images/icon/Logo.png";
import Footer from "./Footer";
import ServiceTitle from "../assets/component/ServiceTitle";

export default function RegistrarSelection() {
   const navigate = useNavigate();

   const onFormClick = (type) => {
      navigate("/services/form", { state: { service: "Frontline", type } });
   };

   return (
      <main className='relative flex items-center justify-center h-screen w-full gap-24'>
         <Background />
         <button
            className='button-secondary text-lg absolute top-6 left-6 mx-auto font-mono px-6!'
            onClick={() => navigate("/services")}
         >
            BACK
         </button>

         <section className='flex flex-col items-center justify-center gap-16 mb-40'>
            <ServiceTitle title='REGISTRAR' />

            <section className='grid grid-cols-2 gap-x-24 gap-y-12'>
               <button
                  className='button-secondary text-xl lg:text-3xl w-50 lg:w-80 h-15 lg:h-20 mx-auto mt-8 font-mono px-6!'
                  onClick={() => onFormClick("Document Request")}
               >
                  DOCUMENT REQUEST
               </button>
               <button
                  className='button-secondary text-xl lg:text-3xl w-50 lg:w-80 h-15 lg:h-20 mx-auto mt-8 font-mono px-6!'
                  onClick={() => onFormClick("Inquiry")}
               >
                  INQUIRY
               </button>
            </section>
         </section>

         <Footer className />
      </main>
   );
}
