import { FaCalendarAlt } from "react-icons/fa"
import Card from "./Card"
import { advantage } from "../../../config/advantage"
import {Link} from "react-router-dom"


const Advantage = () => {
  return (
    <div className="bg-bgalt my-28 font-font py-8" id="whyus">
        <center className="font-bold text-[18px] md:text-[25px] tracking-wide md:mt-2">Advantages</center>
        <div className="md:flex w-[80%] mx-auto justify-around mt-4">
          {
              advantage.map((item, index) =>
              <Card key={index} 
              image={item.image} 
              title={item.title}
              desc={item.desc} />
          )
          }
        </div>
        <center className="mt-8 mx-auto ">
        <Link to="/free-trial">
        <button type="button"
          style={{
            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
          className="bg-primary md:text-[15px] font-light  xl:text-[25px] font-font tracking-wider leading-5 text-[#F9F7F7] hover:text-text px-2 py-[16px] rounded-md md:ml-8 hover:bg-[#F9F7F7]
  duration-500"
        >
          <div className="flex gap-[6px]">
            <FaCalendarAlt className="text-[20px] xl:text-[23px]" />
          Book a FREE Trial
            </div>
        </button>
        </Link>
        </center>
    </div>
  )
}

export default Advantage