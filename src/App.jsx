import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceSelection from "./pages/ServiceSelection";
import CashierSelection from "./pages/CashierSelection";
import FrontlineSelection from "./pages/FrontlineSelection";
import RegistrarSelection from "./pages/RegistrarSelection";
import OsaSelection from "./pages/OsaSelection";
import ServiceForm from "./pages/ServiceForm";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import Transactions from "./pages/Transactions";
import Layout from "./pages/Layout";
import Queues from "./pages/Queues";

function App() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/services' element={<ServiceSelection />} />
         <Route path='/services/cashier' element={<CashierSelection />} />
         <Route path='/services/registrar' element={<RegistrarSelection />} />
         <Route path='/services/frontline' element={<FrontlineSelection />} />
         <Route path='/services/osa' element={<OsaSelection />} />
         <Route path='/services/form' element={<ServiceForm />} />
         <Route path='/queues' element={<Queues />} />

         <Route
            path='/counter'
            element={
               <ProtectedRoute>
                  <Layout>
                     <Counter />
                  </Layout>
               </ProtectedRoute>
            }
         />
         <Route
            path='/transactions'
            element={
               <ProtectedRoute>
                  <Layout>
                     <Transactions />
                  </Layout>
               </ProtectedRoute>
            }
         />

         <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
   );
}

function ProtectedRoute({ children }) {
   const user = JSON.parse(localStorage.getItem("user"));

   if (!user) return <Login />;

   return children;
}

export default App;
