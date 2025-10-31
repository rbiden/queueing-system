import { Volume2 } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Speaker } from "lucide-react";
import { Pause } from "lucide-react";

export default function Counter() {
   return (
      <main className='grid grid-cols-2 w-full h-full gap-3'>
         <section className='w-full flex flex-col h-full'>
            <div className='bg-light-orange flex flex-col items-center justify-center w-full rounded-lg py-3 mb-3'>
               <h1 className='font-bold font-mono text-2xl'>CURRENT</h1>
               <h1 className='font-bold text-orange font-mono text-8xl'>1053</h1>
            </div>

            <div className='grid grid-cols-3 gap-3'>
               <button className='bg-destructive text-white font-bold py-2 px-4 flex items-center justify-center h-20 rounded-xl'>
                  <Pause className='text-white size-12' />
               </button>
               <button className='bg-gold text-white font-bold py-2 px-4 flex items-center justify-center h-20 rounded-xl'>
                  <Volume2 className='text-white size-13' />
               </button>
               <button className='bg-success text-white font-bold py-2 px-4 flex items-center justify-center h-20 rounded-xl'>
                  <ArrowRight className='text-white size-14' />
               </button>
            </div>

            <div className='flex items-stretch w-full gap-2 mt-auto'>
               <section className='w-1/2 rounded-lg overflow-hidden bg-light-orange'>
                  <div className='bg-gray text-white flex flex-col items-center text-lg p-2 leading-tight'>
                     Waiting Number <span className='text-7xl font-mono'>4</span>
                  </div>
                  <div className='space-y-1 p-3'>
                     <div className='flex items-center gap-1 font-mono text-lg'>
                        <ReceiptText className='size-5' strokeWidth={1.5} /> 1054 PAYMENT
                     </div>
                     <div className='flex items-center gap-1 font-mono text-lg'>
                        <ReceiptText className='size-5' strokeWidth={1.5} /> 1055 PAYMENT
                     </div>
                     <div className='flex items-center gap-1 font-mono text-lg'>
                        <ReceiptText className='size-5' strokeWidth={1.5} /> 1056 INQUIRY
                     </div>
                     <div className='flex items-center gap-1 font-mono text-lg'>
                        <ReceiptText className='size-5' strokeWidth={1.5} /> 1057 PAYMENT
                     </div>
                  </div>
               </section>
               <section className='w-1/2 rounded-lg overflow-hidden bg-light-orange'>
                  <div className='bg-gray text-white flex flex-col items-center text-lg p-2 leading-tight'>
                     Last Called <span className='text-7xl font-mono'>0058</span>
                  </div>
                  <div className='space-y-1 p-3'>
                     <div className='flex items-center gap-1 font-mono text-lg'>
                        <ReceiptText className='size-5' strokeWidth={1.5} /> 1054 PAYMENT
                     </div>
                     <div className='flex items-center gap-1 font-mono text-lg'>
                        <ReceiptText className='size-5' strokeWidth={1.5} /> 1055 PAYMENT
                     </div>
                  </div>
               </section>
            </div>
         </section>
         <section className='flex items-center w-full h-full'>
            <div className='bg-dark-primary p-8 rounded-xl my-auto w-full h-80 flex flex-col items-center justify-center'>
               <div className='mb-3 w-full'>
                  <h1 className='text-white'>Transaction:</h1>
                  <p className='font-mono ml-3 mt-1 text-lg bg-input font-semibold p-2 rounded px-6'>Inquiry</p>
               </div>
               <div className='w-full'>
                  <h1 className='text-white'>Student No:</h1>
                  <p className='font-mono ml-3 mt-1 text-lg bg-input font-semibold p-2 rounded px-6'>2823-#######</p>
               </div>
            </div>
         </section>
      </main>
   );
}
