import img from "@/assets/about.jpg"
import Image from "next/image";

const About = () => {
  return (
    <div className=" my-24" id="about">
        <center className="font-bold text-[18px] md:text-[25px] tracking-wide md:mt-2">ABOUT ME</center>
        <div className="w-[90%] mx-auto flex justify-around mt-4">
            <div className="w-[70%] md:w-[25%] ">
                <Image width={img.width} height={img.height} src={img.src}  alt="Lakshita Ahuja" />
            </div>
            <div className="text-justify font-normal md:tracking-wider md:text-[19px] md:leading-[40px] ml-3 md:ml-0 text-[10px] w-[90%] md:w-[40%] my-auto">
                Passionate and dedicated teacher pursuing a master&apos;s in radiology with 5+ years of experience in teaching. Specialized in science and math for primary and middle school students, fostering a love for learning and excellence. Join our classroom for an exceptional educational journey!
            </div>
        </div>
    </div>
  )
}

export default About