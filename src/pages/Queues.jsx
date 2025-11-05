import { useSearchParams } from "react-router-dom";

const SAMPLE_DATA = {
   cashier: {
      queues: [
         { counterNumber: 1, ticketNumber: 1053, serviceType: "Inquiry", status: "serving" },
         { counterNumber: 2, ticketNumber: 1054, serviceType: "Payment", status: "serving" },
         { counterNumber: 3, ticketNumber: null, serviceType: null, status: "idle" },
      ],
      waiting: [
         { number: 1056, type: "Inquiry" },
         { number: 1057, type: "Payment" },
         { number: 1058, type: "Payment" },
         { number: 1059, type: "Inquiry" },
         { number: 1060, type: "Payment" },
         { number: 1061, type: "Inquiry" },
         { number: 1062, type: "Payment" },
      ],
   },
   frontline: {
      queues: [
         { counterNumber: 1, ticketNumber: 2001, serviceType: "Documents", status: "serving" },
         { counterNumber: 2, ticketNumber: null, serviceType: null, status: "idle" },
      ],
      waiting: [
         { number: 2002, type: "Documents" },
         { number: 2003, type: "Verification" },
      ],
   },
   registrar: {
      queues: [
         { counterNumber: 1, ticketNumber: 3045, serviceType: "Enrollment", status: "serving" },
         { counterNumber: 2, ticketNumber: 3046, serviceType: "Records", status: "serving" },
         { counterNumber: 3, ticketNumber: null, serviceType: null, status: "idle" },
      ],
      waiting: [
         { number: 3047, type: "Enrollment" },
         { number: 3048, type: "Records" },
         { number: 3049, type: "Transcript" },
      ],
   },
   osa: {
      queues: [{ counterNumber: 1, ticketNumber: 4012, serviceType: "Scholarship", status: "serving" }],
      waiting: [{ number: 4013, type: "Scholarship" }],
   },
};

export default function Queues() {
   const [params] = useSearchParams();
   const service = params.get("service");

   let activeQueues = [];
   let activeWaitingLine = [];

   switch (service?.toLowerCase()) {
      case "cashier":
         activeQueues = SAMPLE_DATA.cashier.queues;
         activeWaitingLine = SAMPLE_DATA.cashier.waiting;
         break;
      case "frontline":
         activeQueues = SAMPLE_DATA.frontline.queues;
         activeWaitingLine = SAMPLE_DATA.frontline.waiting;
         break;
      case "registrar":
         activeQueues = SAMPLE_DATA.registrar.queues;
         activeWaitingLine = SAMPLE_DATA.registrar.waiting;
         break;
      case "osa":
         activeQueues = SAMPLE_DATA.osa.queues;
         activeWaitingLine = SAMPLE_DATA.osa.waiting;
         break;
      default:
         activeQueues = [
            ...SAMPLE_DATA.cashier.queues,
            ...SAMPLE_DATA.frontline.queues,
            ...SAMPLE_DATA.registrar.queues,
            ...SAMPLE_DATA.osa.queues,
         ];
         activeWaitingLine = [
            ...SAMPLE_DATA.cashier.waiting,
            ...SAMPLE_DATA.frontline.waiting,
            ...SAMPLE_DATA.registrar.waiting,
            ...SAMPLE_DATA.osa.waiting,
         ];
   }

   return (
      <main>
         <header className='bg-secondary p-2 w-full flex items-center justify-center px-8'>
            <h1 className='font-bold text-7xl text-center text-white w-max'>NOW SERVING</h1>
         </header>
         <section>
            <div className='flex justify-center p-5'>
               {activeQueues.map((queue) => (
                  <Counter key={`${service}-${queue.counterNumber}`} {...queue} service={service} />
               ))}
            </div>
         </section>

         <section className='w-130 mx-auto rounded overflow-hidden bg-light-orange'>
            <div className='bg-gray text-white flex flex-col items-center text-2xl p-2 leading-tight'>
               In Queue <span className='text-7xl font-mono'>{activeWaitingLine.length}</span>
            </div>
            <div className='p-2 px-8 h-70 overflow-y-auto flex flex-col items-center'>
               {activeWaitingLine.map((item) => (
                  <p key={item.number} className='flex items-center gap-1 text-3xl font-bold uppercase'>
                     {item.type[0]}-{item.number}
                  </p>
               ))}
            </div>
         </section>
      </main>
   );
}

function Counter({ ticketNumber, counterNumber, serviceType, status }) {
   return (
      <div className='flex flex-col items-center justify-center border w-1/3 h-60'>
         {status === "serving" && ticketNumber ? (
            <>
               <h1 className='text-8xl font-bold'>
                  {serviceType[0]}-{ticketNumber}
               </h1>
               <h1 className='text-queue-title text-4xl font-bold'>COUNTER {counterNumber}</h1>
               <h1 className='text-4xl text-queue-subtitle font-bold uppercase'>{serviceType}</h1>
            </>
         ) : (
            <>
               <h1 className='text-6xl font-bold text-gray-400'>COUNTER {counterNumber}</h1>
               <h1 className='text-3xl text-gray-400 font-bold'>IDLE</h1>
            </>
         )}
      </div>
   );
}
