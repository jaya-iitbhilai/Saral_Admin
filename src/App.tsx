// import React from "react";
// import Navbar from "./components/Navbar";
// import DepartmentForm from "./components/DepartmentForm";
// import Footer from "./components/Footer";
// import SchemeForm from "./components/SchemeForm";
// import CareerForm from "./components/CareerForm";

// const App: React.FC = () => {
//   return (
//     <div>
//       <Navbar />
//       <DepartmentForm />
//       <SchemeForm />
//       <CareerForm />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DepartmentForm from "./components/DepartmentForm";
import SchemeForm from "./components/SchemeForm";
import CareerForm from "./components/CareerForm";
import SakshamForm from "./components/SakshamForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <h1 className=" flex items-center justify-center text-2xl mt-4 h-[80vh]">
              Welcome to the{" "}
              <span className="text-blue-800 ml-2 font-bold">OAOC</span>
            </h1>
          }
        />
        <Route path="/departments" element={<DepartmentForm />} />
        <Route path="/schemes" element={<SchemeForm />} />
        <Route path="/careers" element={<CareerForm />} />
        <Route path="/saksham" element={<SakshamForm />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
