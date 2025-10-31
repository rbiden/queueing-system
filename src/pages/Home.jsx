import { useNavigate } from "react-router-dom";
import Background from "../assets/component/Background";
import Logo from "../assets/images/ququeing_icon.png";

export default function Home() {
   const navigate = useNavigate();

   const onTouchStart = () => {
      navigate("/services/");
   };
   return (
      <main className='relative flex items-center justify-center h-screen w-full gap-12 lg:gap-24'>
         <Background />
         <section className='flex flex-col'>
            <div className='space-y-1 lg:space-y-2'>
               <h1 className='text-3xl lg:text-5xl font-light'>Optimized</h1>
               <h1 className='text-black text-5xl lg:text-7xl font-semibold'>
                  <span className='text-primary'>QUEUEING</span> SYSTEM
               </h1>
               <h1 className='text-3xl lg:text-5xl font-light'>for School Transactions Efficiency</h1>
            </div>
            <button
               className='button text-base lg:text-2xl w-max mx-auto mt-8 px-4! lg:px-6! py-2! lg:py-3!'
               onClick={onTouchStart}
            >
               Touch to Start
            </button>
         </section>

         <section>
            <img className='w-50 lg:w-100' src={Logo} alt='Logo' />
         </section>
      </main>
   );
}
