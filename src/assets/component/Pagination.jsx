import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ activePage, totalPages, onPageChange, totalItems, itemsPerPage }) {
   const startItem = (activePage - 1) * itemsPerPage + 1;
   const endItem = Math.min(activePage * itemsPerPage, totalItems);

   const renderPageNumbers = () => {
      const pageNumbers = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
         for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
               <button
                  key={i}
                  className={`px-3 py-1 font-semibold rounded ${
                     activePage === i ? "bg-white border border-gray-300" : ""
                  }`}
                  onClick={() => onPageChange(i)}
               >
                  {i}
               </button>
            );
         }
      } else {
         pageNumbers.push(
            <button
               key={1}
               className={`px-3 py-1 font-semibold rounded ${
                  activePage === 1 ? "bg-white border border-gray-300" : ""
               }`}
               onClick={() => onPageChange(1)}
            >
               1
            </button>
         );

         if (activePage > 3) {
            pageNumbers.push(
               <span key='dots-start' className='px-2'>
                  ...
               </span>
            );
         }

         const startPage = Math.max(2, activePage - 1);
         const endPage = Math.min(totalPages - 1, activePage + 1);

         for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
               <button
                  key={i}
                  className={`px-3 py-1 font-semibold rounded ${
                     activePage === i ? "bg-white border border-gray-300" : ""
                  }`}
                  onClick={() => onPageChange(i)}
               >
                  {i}
               </button>
            );
         }

         if (activePage < totalPages - 2) {
            pageNumbers.push(
               <span key='dots-end' className='px-2'>
                  ...
               </span>
            );
         }

         pageNumbers.push(
            <button
               key={totalPages}
               className={`px-3 py-1 font-semibold rounded ${
                  activePage === totalPages ? "bg-white border border-gray-300" : ""
               }`}
               onClick={() => onPageChange(totalPages)}
            >
               {totalPages}
            </button>
         );
      }

      return pageNumbers;
   };

   return (
      <div className='p-3 bg-gray-50 border border-gray-300 mt-3 rounded-lg flex items-center justify-between'>
         <h1 className='text-sm'>
            Showing {startItem} - {endItem} of {totalItems}
         </h1>
         <section className='flex items-center gap-2'>
            <button onClick={() => onPageChange(activePage - 1)} disabled={activePage === 1}>
               <ChevronLeft className='text-gray-500' />
            </button>
            {renderPageNumbers()}
            <button onClick={() => onPageChange(activePage + 1)} disabled={activePage === totalPages}>
               <ChevronRight className='text-gray-500' />
            </button>
         </section>
      </div>
   );
}
