import img from "../../../assets/about.svg"

const About = () => {
  return (
    <div className="font-font my-24" id="about">
        <center className="font-bold text-[18px] md:text-[25px] tracking-wide md:mt-2">ABOUT ME</center>
        <div className="w-[90%] mx-auto md:flex justify-around mt-4">
            <div>
                <img src={img} alt="Lakshita Ahuja" />
            </div>
            <div className="text-justify font-normal tracking-wide leading-[30px] md:tracking-wider md:text-[19px] md:leading-[40px] md:w-[40%] my-auto">
                Passionate and dedicated teacher pursuing a master's in radiology with 5+ years of experience. Specializes in science and math for primary and middle school students, fostering a love for learning and excellence. Join our classroom for an exceptional educational journey!
            </div>
        </div>
    </div>
  )
}

export default About