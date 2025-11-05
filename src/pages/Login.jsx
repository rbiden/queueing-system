import { Contact, Lock, User2 } from "lucide-react";
import Background from "../assets/component/Background";
import InputLogin from "../assets/component/InputLogin";
import LogoInline from "../assets/images/icon/Logo-inline.png";
import { useEffect, useState } from "react";
import Logo from "../assets/images/ququeing_icon.png";
import { toast } from "sonner";

export default function Login() {
   const user = JSON.parse(localStorage.getItem("user"));

   useEffect(() => {
      if (user) {
         window.location.href = "/counter";
      }
   }, [user]);

   const [form, setForm] = useState({
      employeeId: "",
      password: "",
   });

   const onLogin = () => {
      console.log(form);
      if (!form.employeeId && !form.password) {
         toast.error("Employee ID and Password is required");
         return;
      }

      if (!form.employeeId) {
         toast.error("Employee ID is required");
         return;
      }

      if (!form.password) {
         toast.error("Password is required");
         return;
      }

      localStorage.setItem("user", JSON.stringify({ employeeId: form.employeeId, name: "John Doe" }));

      window.location.href = "/counter";
   };

   return (
      <main>
         <Background />

         <div className='grid grid-cols-2 items-center justify-center h-screen lg:w-[80%] mx-auto'>
            <section className='flex flex-col items-center justify-center h-[80vh] max-lg:ml-12'>
               <img className='w-60 mb-4' src={LogoInline} alt='logo_inline' />

               <div className='flex flex-col items-center justify-center shadow-md rounded-xl h-100 w-full lg:w-90 p-5 px-8 py-5 lg:px-12 space-y-2 backdrop-blur-md bg-[#D9D9D91A] border border-gray-300'>
                  <h1 className='font-mono text-primary font-bold text-2xl tracking-wider mb-12'>Login</h1>
                  <InputLogin
                     value={form?.employeeId || ""}
                     onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
                     placeholder='Employee ID'
                     icon={<Contact className='size-5' strokeWidth={1.5} />}
                  />
                  <InputLogin
                     type='password'
                     value={form?.password || ""}
                     onChange={(e) => setForm({ ...form, password: e.target.value })}
                     placeholder='Password'
                     icon={<Lock className='size-5' strokeWidth={1.5} />}
                  />

                  <button
                     onClick={onLogin}
                     className='mt-6 bg-linear-to-b from-[#0A3541] to-[#02536891] w-full rounded-full text-white py-2'
                  >
                     Login
                  </button>
               </div>
            </section>

            <section className='flex items-center justify-center'>
               <img className='w-70 lg:w-100' src={Logo} alt='Logo' />
            </section>
         </div>
      </main>
   );
}
