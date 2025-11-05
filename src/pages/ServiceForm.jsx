import { useLocation, useNavigate } from "react-router-dom";
import Background from "../assets/component/Background";
import LogoWithText from "../assets/images/icon/Logo.png";
import Footer from "./Footer";
import Checkbox from "../assets/component/Radio";
import Input from "../assets/component/Input";
import Select from "../assets/component/Select";
import Radio from "../assets/component/Radio";
import { useState } from "react";
import ServiceTitle from "../assets/component/ServiceTitle";

const REASONS = {
   Cashier: {
      Payment: ["Insufficient Funds", "Card Declined", "Payment Timeout"],
      Inquiry: ["Balance Check", "Transaction History", "Account Details"],
   },
   Registrar: {
      "Document Request": ["Transcript of Records", "Diploma", "Enrollment Certificate"],
      Inquiry: ["Add Course", "Drop Course", "Change Section"],
   },
   Frontline: {
      Inquiry: ["Service Hours", "Location of Offices", "Required Documents"],
   },
   OSA: {
      Appointment: ["Counseling", "Career Guidance", "Personal Matters"],
      Inquiry: ["Scholarship Opportunities", "Event Information", "General Questions"],
   },
};

export default function ServiceForm() {
   const navigate = useNavigate();
   const { service, type } = useLocation()?.state || {};

   const defaultForm = {
      type: "student",
      studentNo: "",
      reason: "",
   };

   const [form, setForm] = useState(defaultForm);

   const onClear = () => {
      setForm(defaultForm);
   };

   const onRadioChange = (e) => {
      console.log(e.target.value);
      setForm({
         ...form,
         type: e.target.value,
      });
   };

   console.log(service, type);

   console.log(form);

   return (
      <main className='relative flex items-center justify-center h-screen w-full gap-24'>
         <Background />
         <button
            className='button-secondary text-lg absolute top-6 left-6 mx-auto font-mono px-6!'
            onClick={() => navigate(`/services/${service.toLowerCase()}`)}
         >
            BACK
         </button>

         <section className='flex flex-col items-center justify-center mb-8 lg:mb-24 w-full px-6 lg:px-0'>
            <ServiceTitle title={`${service} - ${type}`} />

            <div className='bg-dark-primary py-6 px-8 lg:px-24 rounded-3xl w-4/5 lg:w-180 flex flex-col mt-8'>
               <div className='flex items-center justify-center gap-12 mb-8 mt-4'>
                  <Radio
                     id='visitor'
                     value='visitor'
                     name='visitor'
                     label='Visitor'
                     checked={form.type === "visitor"}
                     onChange={onRadioChange}
                  />
                  <Radio
                     id='student'
                     value='student'
                     name='student'
                     label='Student'
                     checked={form.type === "student"}
                     onChange={onRadioChange}
                  />
               </div>

               <div className='space-y-4 mt-4'>
                  <Input
                     label='Student no:'
                     className='gap-8'
                     value={form.studentNo}
                     onChange={(e) => setForm({ ...form, studentNo: e.target.value })}
                  />
                  <Select
                     className='gap-5.5'
                     options={REASONS[service][type] || []}
                     label='Payment for:'
                     name='cashier'
                  />
               </div>

               <button className='bg-secondary text-white px-6 py-1.5 rounded-lg self-end mt-6' onClick={onClear}>
                  Clear
               </button>
            </div>

            <button className='bg-secondary text-white px-8 py-2 rounded-full text-xl mt-6'>Generate Ticket</button>
         </section>

         <Footer className />
      </main>
   );
}
