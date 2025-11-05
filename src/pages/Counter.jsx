import { useState } from "react";
import { Play, Volume2 } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Pause } from "lucide-react";

const SAMPLE_DATA = {
   waiting: [
      { number: 1056, type: "Inquiry" },
      { number: 1057, type: "Payment" },
      { number: 1058, type: "Payment" },
      { number: 1059, type: "Inquiry" },
      { number: 1060, type: "Payment" },
      { number: 1061, type: "Inquiry" },
      { number: 1062, type: "Payment" },
   ],
   lastCalled: [
      { number: 1052, type: "Inquiry" },
      { number: 1051, type: "Payment" },
      { number: 1050, type: "Inquiry" },
      { number: 1049, type: "Payment" },
      { number: 1048, type: "Inquiry" },
   ],
};

export default function Counter() {
   const [isPaused, setIsPaused] = useState(false);
   const [current, setCurrent] = useState(1053);
   const [waitingLine, setWaitingLine] = useState(SAMPLE_DATA.waiting);
   const [lastCalledList, setLastCalledList] = useState(SAMPLE_DATA.lastCalled);

   const handleNext = () => {
      if (waitingLine.length === 0 || isPaused) {
         return;
      }

      // Move current to last called
      setLastCalledList((prev) => [{ number: current, type: "Inquiry" }, ...prev]);

      // Set next person as current
      const nextPerson = waitingLine[0];
      setCurrent(nextPerson.number);

      // Remove from waiting line
      setWaitingLine((prev) => prev.slice(1));
   };

   return (
      <main className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-[86vh] gap-5'>
         <section className='w-full flex flex-col h-full'>
            <div className='bg-light-orange flex flex-col items-center justify-center w-full rounded-lg py-3 mb-3 h-50'>
               <h1 className='font-bold font-mono text-3xl'>CURRENT</h1>
               <h1 className='font-bold text-orange font-mono text-8xl'>{current}</h1>
            </div>

            <div className='grid grid-cols-3 gap-3'>
               <button
                  onClick={() => setIsPaused(!isPaused)}
                  className={`${
                     !isPaused ? "bg-destructive" : "bg-secondary"
                  } text-white font-bold py-2 px-4 flex items-center justify-center h-23 rounded-xl`}
               >
                  {!isPaused ? <Play className='text-white size-12' /> : <Pause className='text-white size-12' />}
               </button>
               <button className='bg-gold text-white font-bold py-2 px-4 flex items-center justify-center h-23 rounded-xl'>
                  <Volume2 className='text-white size-13' />
               </button>
               <button
                  onClick={handleNext}
                  disabled={waitingLine.length === 0 || isPaused}
                  className='bg-success text-white font-bold py-2 px-4 flex items-center justify-center h-23 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed'
               >
                  <ArrowRight className='text-white size-14' />
               </button>
            </div>

            <div className='flex items-stretch w-full gap-2 mt-4 lg:mt-auto'>
               <section className='w-1/2 rounded-lg overflow-hidden bg-light-orange'>
                  <div className='bg-gray text-white flex flex-col items-center text-lg p-2 leading-tight'>
                     Waiting Number <span className='text-7xl font-mono'>{waitingLine.length}</span>
                  </div>
                  <div className='space-y-1 p-3 h-45 overflow-y-auto'>
                     {waitingLine.map((item, index) => (
                        <div
                           key={`wait-${item.number}${index}`}
                           className='flex items-center gap-1 font-mono text-lg uppercase'
                        >
                           <ReceiptText className='size-5' strokeWidth={1.5} /> {item.number} {item.type}
                        </div>
                     ))}
                  </div>
               </section>
               <section className='w-1/2 rounded-lg overflow-hidden bg-light-orange'>
                  <div className='bg-gray text-white flex flex-col items-center text-lg p-2 leading-tight'>
                     Last Called <span className='text-7xl font-mono'>{lastCalledList[0]?.number || "---"}</span>
                  </div>
                  <div className='space-y-1 p-3 h-45 overflow-y-auto'>
                     {lastCalledList.slice(1, 10).map((item, index) => (
                        <div
                           key={`last-${item.number}${index}`}
                           className='flex items-center gap-1 font-mono text-lg uppercase'
                        >
                           <ReceiptText className='size-5' strokeWidth={1.5} /> {item.number} {item.type}
                        </div>
                     ))}
                  </div>
               </section>
            </div>
         </section>
         <section className='flex items-center w-full h-full'>
            <div className='bg-dark-primary p-8 rounded-xl my-auto w-full h-90 flex flex-col items-center justify-center gap-4'>
               <div className='mb-3 w-full'>
                  <h1 className='text-white text-2xl'>Transaction:</h1>
                  <p className='font-mono ml-5 mt-1 text-2xl bg-input font-semibold p-2 rounded px-6'>Inquiry</p>
               </div>
               <div className='w-full'>
                  <h1 className='text-white text-2xl'>Student No:</h1>
                  <p className='font-mono ml-5 mt-1 text-2xl bg-input font-semibold p-2 rounded px-6'>2823-#######</p>
               </div>
            </div>
         </section>
      </main>
   );
}
