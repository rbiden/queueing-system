import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
   return (
      <main className='h-screen w-full overflow-hidden'>
         <Header />

         <main className='flex items-start'>
            <Sidebar />
            <div className='p-4 h-[90vh] w-full'>{children}</div>
         </main>
      </main>
   );
}
