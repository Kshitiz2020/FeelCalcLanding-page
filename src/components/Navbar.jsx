import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { IoLogoFoursquare } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import ResponsiveMenu from "./ResponsiveMenu";

import { useState } from "react";

const navLinks = [
  { name: "Home" },
  { name: "Products" },
  { name: "Careers" },
  { name: "About" },
  { name: "Contacts" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* logo section */}
          <div className="flex items-center gap-2 py-8 text-2xl font-bold uppercase">
            <IoLogoFoursquare className="w-8 h-8" />
            <p className=" text-secondary">FeelCalc</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600 ">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.name}
                    className="inline-block px-3 py-1 font-semibold hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-2xl duration-200 hover:bg-primary hover:text-white rounded-ful">
              <CiSearch className="text-2xl" />
            </button>
            <button className="hidden px-6 py-2 font-semibold duration-200 border-2 rounded-md hover:bg-primary text-primary hover:text-white border-primary md:block ">
              Login
            </button>
            <button className="hidden px-6 py-2 font-semibold duration-200 border-2 rounded-md hover:bg-primary text-primary hover:text-white border-primary md:block ">
              Sign Up
            </button>
          </div>
          {/* Mobile hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <RxCross2 className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </div>
        </div>
      </nav>
      {/* Mobile sidebar section */}
      <div>
        <ResponsiveMenu open={open} />
      </div>
    </>
  );
}
export default Navbar;
