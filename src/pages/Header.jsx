import { LogOut, User2 } from "lucide-react";
import ServiceTitle from "../assets/component/ServiceTitle";
import Logo from "../assets/images/ququeing_icon.png";
import UserImage from "../assets/images/icon/user.png";
import { useState } from "react";

export default function Header() {
   const activeTab = localStorage.getItem("activeTab") || "Counter";
   const [showMenu, setShowMenu] = useState(false);

   const onLogout = () => {
      localStorage.removeItem("activeTab");
      localStorage.removeItem("user");

      window.location.reload();
   };

   return (
      <header className='bg-header px-8 py-2 flex items-center justify-between z-20 fixed top-0 left-0 right-0 h-20'>
         <div className='flex items-center gap-12'>
            <img className='w-15' src={Logo} alt='logo' />
            <ServiceTitle title={activeTab} className='text-white text-3xl!' />
         </div>
         <section className='relative'>
            <button className='relative' onClick={() => setShowMenu(!showMenu)}>
               <img className='size-12' src={UserImage} alt='user' />
            </button>
            {showMenu && (
               <div className='absolute right-0 shadow-lg rounded-lg w-48 p-3 font-mono bg-primary text-white border border-gray-400'>
                  <h1 className='text-lg'>Dha Dionisio</h1>
                  <p className='opacity-60'>Staff</p>

                  <button
                     onClick={onLogout}
                     className='flex items-center gap-1 border-t border-gray-300 w-full mt-2 pt-2'
                  >
                     <LogOut className='size-5 mr-2' /> Log Out
                  </button>
               </div>
            )}
         </section>
      </header>
   );
}
