import TopLeft from "../../assets/images/icon/top-left.svg";
import TopRight from "../../assets/images/icon/top-right.svg";
import BottomCenter from "../../assets/images/icon/bottom-center.svg";

export default function Background() {
   return (
      <main className='fixed h-screen w-full -z-10'>
         <img src={TopLeft} className='absolute top-0 left-0 w-100 h-70 lg:h-120' alt='Vector' />
         <img src={TopRight} className='absolute top-0 right-0 w-120 h-50 hidden lg:block' alt='Vector' />
         <img src={BottomCenter} className='absolute bottom-0 right-50 w-140' alt='Vector' />
      </main>
   );
}
