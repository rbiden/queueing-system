import Background from "../assets/component/Background";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
   return (
      <main className='h-screen w-full'>
         <Header />

         <main className='flex items-start'>
            <Sidebar />
            <div className='pl-54 pt-20 lg:pl-80 w-full'>
               <Background />
               <div className='p-4'>{children}</div>
            </div>
         </main>
      </main>
   );
}
