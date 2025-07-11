import { Link } from "react-router-dom";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between border border-b-1 h-12 items-center px-10 py-7 font-manrope">
      <img src={logo} alt="" className="w-12" />
      <div className="flex gap-3 justify-center">
        <Link to="/">Product</Link>
        <Link to="/">Partners</Link>
        <Link to="/">Careers</Link>
      </div>
      <div className="flex gap-2 ">
        <button className="flex bg-white items-center justify-center rounded-sm px-2 py-1 hover:opacity-65 cursor-pointer">
          Log in
        </button>
        <button className="flex bg-white items-center justify-center rounded-sm px-2 py-1 hover:opacity-65 cursor-pointer">
          <img
            src="https://flagcdn.com/w80/gb.png"
            alt="UK"
            className="w-4 h-4 rounded-full object-cover mr-1"
          />
          English
        </button>
      </div>
    </div>
  );
};

export default Navbar;
