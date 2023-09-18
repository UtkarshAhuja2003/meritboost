import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

const Demo = () => {
  return (
    <div className="bg-bgalt   py-16 my-24">
        <center className="font-bold text-[28px] md:text-[33px] tracking-wider">
            Book your <span  style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.35)' }}>Free Demo</span> session NOW!!
        </center>
        <div className="mt-6 md:ml-[36%] ml-[26%]">
        <Link href="/free-trial">
        <button type="button"
          style={{
            boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
          className="bg-primary md:text-[15px] font-light  xl:text-[25px]   tracking-wider leading-5 text-[#F9F7F7] hover:text-text px-2 py-[16px] rounded-md md:ml-8 hover:bg-[#F9F7F7]
  duration-500"
        >
          <div className="flex gap-[6px]">
            <FaCalendarAlt className="text-[20px] xl:text-[23px]" />
          Book a FREE Trial
            </div>
        </button></Link>
        </div>
    </div>
  )
}

export default Demo