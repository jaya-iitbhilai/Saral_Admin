import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 text-white px-40 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="flex gap-6">
        <li>
          <Link to="/departments" className="hover:underline">
            Departments
          </Link>
        </li>
        <li>
          <Link to="/schemes" className="hover:underline">
            Schemes
          </Link>
        </li>
        <li>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
