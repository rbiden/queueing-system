import { useState, useMemo, useCallback } from "react";
import Pagination from "../assets/component/Pagination";

const ITEMS_PER_PAGE = 10;

const COLUMNS = [
   { header: "Queuing No.", accessor: "queuingNo" },
   { header: "Date", accessor: "date" },
   { header: "Student No.", accessor: "studNo" },
   { header: "Service", accessor: "service" },
   { header: "Staff Assigned", accessor: "staffAssigned" },
   { header: "Office", accessor: "office" },
];

const TRANSACTION_LIST = [
   {
      queuingNo: 1053,
      date: "11-05-2025",
      studNo: "2823-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1052,
      date: "11-05-2025",
      studNo: "7655-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1051,
      date: "11-05-2025",
      studNo: "3124-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1050,
      date: "11-05-2025",
      studNo: "4567-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1049,
      date: "11-05-2025",
      studNo: "8901-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1048,
      date: "11-05-2025",
      studNo: "2345-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1047,
      date: "11-05-2025",
      studNo: "6789-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1046,
      date: "11-05-2025",
      studNo: "1234-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1045,
      date: "11-05-2025",
      studNo: "5678-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1044,
      date: "11-05-2025",
      studNo: "9012-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1043,
      date: "11-05-2025",
      studNo: "3456-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1042,
      date: "11-05-2025",
      studNo: "7890-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1041,
      date: "11-05-2025",
      studNo: "2468-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1040,
      date: "11-05-2025",
      studNo: "1357-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1039,
      date: "11-05-2025",
      studNo: "9876-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1038,
      date: "11-05-2025",
      studNo: "5432-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1037,
      date: "11-05-2025",
      studNo: "1098-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1036,
      date: "11-05-2025",
      studNo: "6789-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1035,
      date: "11-04-2025",
      studNo: "4321-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1034,
      date: "11-04-2025",
      studNo: "8765-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1033,
      date: "11-04-2025",
      studNo: "2109-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1032,
      date: "11-04-2025",
      studNo: "6543-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1031,
      date: "11-04-2025",
      studNo: "9870-#######",
      service: "Payment",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
   {
      queuingNo: 1030,
      date: "11-04-2025",
      studNo: "3214-#######",
      service: "Inquiry",
      staffAssigned: "Eleanor Ratay",
      office: "Cashier",
   },
];

export default function Transactions() {
   const [activePage, setActivePage] = useState(1);
   const transactions = TRANSACTION_LIST;

   const totalPages = useMemo(() => Math.ceil(transactions.length / ITEMS_PER_PAGE), [transactions.length]);

   const paginatedData = useMemo(
      () => transactions.slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE),
      [activePage, transactions]
   );

   const handlePageChange = useCallback((page) => {
      setActivePage(page);
   }, []);

   return (
      <main>
         <div className='overflow-x-auto shadow rounded-lg bg-white'>
            <table className='min-w-full font-mono'>
               <thead>
                  <tr>
                     {COLUMNS.map((column) => (
                        <th key={column.accessor} className='p-2 text-xl text-center font-bold bg-white'>
                           {column.header}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {paginatedData.map((item, index) => {
                     const isEvenRow = index % 2 === 0;
                     const rowClass = isEvenRow ? "bg-cell" : "bg-white";
                     return (
                        <tr key={item.queuingNo} className={rowClass}>
                           {COLUMNS.map((column) => (
                              <td key={column.accessor} className='p-2 text-lg text-center min-w-35'>
                                 {item[column.accessor]}
                              </td>
                           ))}
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>

         <Pagination
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={transactions.length}
            itemsPerPage={ITEMS_PER_PAGE}
         />
      </main>
   );
}
