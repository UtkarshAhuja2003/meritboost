import { useState } from "react";
import { FaBars, FaCalendarAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../../../assets/logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Why Us", link: "#whyus" },
    { name: "About", link: "#about" },
    { name: "Contact Us", link: "#contact" },
    { name: "FAQ", link: "#faq" },
  ];

  let [open, setOpen] = useState(false);
  
  return (
    <section id="navbar" className="font-font z-50 shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-theme py-4 xl:px-16 px-6 md:px-14">
        <div className="cursor-pointer">
          <Link to ="/">
          <div
            className="w-[210px] md:w-[230px] xl:w-[300px] h-auto font-bold text-[26px] md:text-[42px]"
          >Lakshita Ahuja</div>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-text absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <IoMdClose /> // Display close icon when open
          ) : (
            <FaBars name={open ? "close" : "menu"} /> // Display bars (hamburger) icon when closed
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 font-defaultFont absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14 bg-primary z-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 md:ml-4 sm:tracking-tighter md:text-[10px] lg:text-[11px]  xl:text-lg font-font xl:tracking-wider leading-5 md:my-0 my-7"
            >
              <a
                href={link.link}
                className="hover:underline hover:delay-1000 transition-transform ease-in-out scale-x-0 font-semibold hover:scale-x-1 underline-offset-8 decoration-gray-800 text-text hover:text-gray-800 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          <div >
            
          <button type="button"
          style={{
            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
          className="bg-primary md:text-[9px] font-light  xl:text-[15px] font-font tracking-wider leading-5 text-[#F9F7F7] hover:text-text px-2 py-[16px] rounded-md md:ml-8 hover:bg-[#F9F7F7]
  duration-500"
        >
          <div className="flex gap-[6px]">
            <FaCalendarAlt className="text-[15px] xl:text-[20px]" />
          Book a FREE Trial
            </div>
        </button>
            </div>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
