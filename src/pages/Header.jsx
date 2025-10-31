import { User2 } from "lucide-react";
import ServiceTitle from "../assets/component/ServiceTitle";
import Logo from "../assets/images/ququeing_icon.png";
import UserImage from "../assets/images/icon/user.png";

export default function Header() {
   const activeTab = localStorage.getItem("activeTab") || "Counter";

   return (
      <header className='bg-header px-8 py-2 flex items-center justify-between'>
         <div className='flex items-center gap-12'>
            <img className='w-15' src={Logo} alt='logo' />
            <ServiceTitle title={activeTab} className='text-white text-3xl!' />
         </div>
         <span>
            <img className='size-10' src={UserImage} alt='' />
         </span>
      </header>
   );
}
