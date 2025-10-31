import { useNavigate } from "react-router-dom";

export default function Sidebar() {
   const navigate = useNavigate();
   const activeTab = localStorage.getItem("activeTab") || "Counter";

   const onTabChange = (tab) => {
      localStorage.setItem("activeTab", tab);
      navigate(`/${tab}`);
   };

   console.log(activeTab);

   return (
      <aside className='w-70 lg:w-80 bg-secondary h-[90vh] flex flex-col'>
         <button
            className={`${
               activeTab === "Counter" && "bg-sidebar-item"
            } text-base lg:text-xl p-3 py-5 w-full text-white font-mono border-y border-white`}
            onClick={() => onTabChange("Counter")}
         >
            Counter
         </button>
         <button
            className={`${
               activeTab === "Transactions" && "bg-sidebar-item"
            } text-base lg:text-xl p-3 py-5 w-full text-white font-mono border-y border-white`}
            onClick={() => onTabChange("Transactions")}
         >
            Transactions
         </button>

         <div className='bg-sidebar-subitem text-white mt-auto mb-12 flex flex-col items-center justify-center h-45'>
            <p className='text-sm'>COUNTER</p>
            <h1 className='text-7xl font-mono'>1</h1>
            <h1 className='text-xl lg:text-3xl font-mono font-bold'>CASHIER</h1>
         </div>
      </aside>
   );
}
