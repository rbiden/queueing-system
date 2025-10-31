import Background from "../assets/component/Background";
import LogoWithText from "../assets/images/icon/Logo.png";
import Footer from "./Footer";
import ButtonService from "../assets/component/ButtonService";

export default function ServiceSelection() {
   return (
      <main className='relative flex items-center justify-center h-screen w-full gap-24'>
         <Background />

         <section className='flex flex-col items-center justify-center gap-5 mb-36'>
            <img className='w-60' src={LogoWithText} alt='Logo_with_text' />

            <section className='grid grid-cols-2 gap-x-24 lg:gap-x-36 lg:gap-y-12'>
               <ButtonService path='/services/cashier' label='Cashier' />
               <ButtonService path='/services/registrar' label='Registrar' />
               <ButtonService path='/services/frontline' label='Frontline' />
               <ButtonService path='/services/osa' label='Office of Student Affairs' />
            </section>
         </section>

         <Footer className />
      </main>
   );
}
