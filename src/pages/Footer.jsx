export default function Footer({ className }) {
   return (
      <footer className={`${className} fixed bottom-0 left-0 right-0 bg-secondary`}>
         <main className='grid grid-cols-7 divide-x-3 p-2'>
            <div className='text-center col-span-2 flex flex-col'>
               <p className='font-mono text-xs lg:text-lg font-semibold'>Last Ticket Printed</p>
               <h1 className='font-mono text-2xl lg:text-4xl font-semibold my-auto'>P-0057</h1>
            </div>
            <div className='text-center grid grid-cols-2 col-span-3 px-3 gap-3'>
               <div className='flex flex-col items-center'>
                  <p className='font-mono text-xs lg:text-lg font-semibold w-max'>Current Ticket Attended</p>
                  <h1 className='font-mono text-2xl lg:text-4xl font-semibold my-auto'>P-0058</h1>
               </div>
               <div className='flex flex-col'>
                  <p className='font-mono text-xs lg:text-lg font-semibold'>Service</p>
                  <h1 className='font-mono text-lg max-lg:leading-5 lg:text-2xl font-semibold my-auto'>
                     Current Ticket Attended asdasd asda da
                  </h1>
               </div>
            </div>
            <div className='text-center col-span-2 flex flex-col'>
               <p className='font-mono text-xs lg:text-lg font-semibold'>Date/Time</p>
               <h1 className='font-mono text-lg lg:text-2xl font-semibold my-auto px-6 max-lg:leading-5'>
                  WED 12, 2024-5:07 PM
               </h1>
            </div>
         </main>
      </footer>
   );
}
