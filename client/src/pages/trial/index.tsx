import Navbar from "../../components/common/navbar"
import { LuGraduationCap } from "react-icons/lu";
import { BiCalendarAlt } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import Footer from "../../components/common/footer"
import Science from "../../assets/science.png"
import Math from "../../assets/math.png"
import { useState } from "react";
import Schema from "../../schema/trial"
import { useNavigate } from "react-router-dom";

const Trial = () => {
  const navigate=useNavigate()
  // Get the current and next two days details

  function getDayDetails(date: Date, days: string[], months: string[]) {
    const dayIndex = date.getDay();
    const monthIndex = date.getMonth();
    return {
      day: days[dayIndex],
      month: months[monthIndex],
      date: date.getDate()
    };
  }
  
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  
  const currentDate = new Date();
  const dateDetails = [];
  for (let i = 0; i < 3; i++) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + i);
    const newDayDetails = getDayDetails(newDate, days, months);
    dateDetails.push(newDayDetails);
  }
  

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("Science");
  const [grade,setGrade]=useState(6);
  const [date,setDate]=useState(JSON.stringify(dateDetails[0]));
  const [time,setTime]=useState("8:00 AM");


  const grades = [3, 4, 5, 6, 7, 8];
  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM"
  ];

  const checkInputs = async () => {
    try {
      await Schema.validate({ name, email }); // Validate using the schema
      if (name.trim() === '') {
        alert('Please enter your name');
        return false;
      } else if (email.trim() === '') {
        alert('Please enter your email');
        return false;
      } else {
        return true;
      }
    } catch (validationError: any) {
      // Handle Yup validation errors
     alert(validationError.errors);
      return false;
    }
  };
  
const postData = async () => {
    const inputsValid = await checkInputs();
  
    if (inputsValid) {
      try {
        const response = await fetch('http://localhost:5000/trial/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            grade,
            subject,
            time,
            date,
          }),
        });
  
        if (response.ok) {
          console.log('Record created successfully');
          alert('Successfully Booked  a Trial');
          navigate("/")
          // Perform any additional logic here
        } else {
          console.error('Failed to create record');
          alert('An error occurred while creating the record.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred while communicating with the server.');
      }
    }
  };
  
  
  
  return (
    <div>
      <Navbar />
      <div className="font-font my-12">
        <div className="md:w-[88%] mx-auto rounded-[15px]">
            <center className="font-bold text-[15px] md:text-[25px] tracking-wide md:mt-2">Book a Free Trial</center>
            <div className="md:w-[70%] mx-auto mt-4">
            <div className="w-[80%] flex mx-auto my-4 pb-4">
              <div className=" mt-2 md:mt-4 mr-4 md:text-[17px]">Email<span className="text-red-600">*</span></div>
              <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter your Email" className="md:h-[40px] w-[50%]   md:placeholder:text-[17px] h-[30px] bg-bg border-2 md:border-4 rounded-[15px] mt-2 p-2" name="email" required/>
            </div>
            <div className="w-[80%] flex mx-auto my-4 pb-4">
            <div className=" mt-2 md:mt-4 mr-4 md:text-[17px]">Name<span className="text-red-600">*</span></div>
              <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter your Name" className="md:h-[40px] w-[50%] md:placeholder:text-[17px] h-[30px] bg-bg border-2 md:border-4 rounded-[15px] mt-2 p-2" name="name" required/>
            </div>
            <div className="rounded-md w-[80%] md:w-[60%] mx-auto my-4 pb-4">
              <div className="flex">
              <LuGraduationCap className="md:w-[25px] w-[20px] h-[25px] mr-2"/>
              <div className="md:text-[17px]">Choose Your Subject</div>
              </div>
              <div className="flex justify-around mt-4">
              <img onClick={()=>{setSubject("Science")}} src={Science} alt="Science" className={`w-[45%] ${subject === "Science" ? "bg-white" : ""} rounded-md pb-2 border-4 cursor-pointer`}/>
              <img onClick={()=>{setSubject("Math")}}  src={Math} alt="Math" className={`w-[45%] ${subject === "Math" ? "bg-white" : ""} pb-2 rounded-md border-4 cursor-pointer`}/>
              </div>
            </div>
            <div className="w-[60%] mx-auto my-4 pb-4">
            <div className=" md:text-[17px]">Select Your Grade</div>
                <div className="grid grid-cols-3 border-2 rounded-md w-[70%] mx-auto mt-4">
                    {grades.map((Grade, index) => (
                        <span onClick={()=>{setGrade(Grade)}} className={`border-2 ${Grade === grade ? "bg-white" : ""} cursor-pointer text-center`}>{Grade}</span>
                      ))}
                </div>
            </div>
            <div className="w-[60%] mx-auto my-4 pb-4">
              <div className="flex">
            <BiCalendarAlt className="md:w-[25px] w-[20px] h-[25px] mr-2"/>
            <div className=" md:text-[17px]">Select a date</div>
              </div>
              <div className="flex justify-around mt-4 w-[90%] md:w-[70%] mx-auto md:text-[17px]">
                {dateDetails.map((details, index) => (
                  <div onClick={()=>{setDate(JSON.stringify(details))}} key={index} className={`flex flex-col cursor-pointer border-4 p-2 rounded-md ${JSON.stringify(details)=== date ? "bg-white" : ""}`}>
                    <span className="mx-auto">{details.day}</span>
                    <span className="mx-auto">{details.date}</span>
                    <span>{details.month}</span>
                  </div>
                ))}
              </div>

            </div>
            <div className="w-[90%] md:w-[80%] mx-auto my-4 pb-4">
            <div className="flex">
            <FiClock className="md:w-[25px] w-[20px] h-[25px] mr-2"/>
            <div className=" md:text-[17px]">Select a time</div>
            </div>
            <div className="grid grid-cols-4 w-[90%] md:w-[80%] mx-auto my-4 text-[12px] md:text-[17px]">
                {timeSlots.map((timeSlot, index) => (
                  <span onClick={()=>{setTime(timeSlot)}} key={index} className={`cursor-pointer ${timeSlot === time ? "bg-white" : ""} border-2 my-1 rounded-full text-center w-[80%]`}>
                    {timeSlot}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={postData}
                style={{
                  boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
                className="bg-primary md:text-[9px] font-light xl:text-[15px] font-font tracking-wider leading-5 text-[#F9F7F7] hover:text-text px-2 py-[10px] rounded-md hover:bg-[#F9F7F7] duration-500"
              >
                Confirm Slot
              </button>
            </div>
            </div>
        </div>
    </div>
      <Footer />
    </div>
  )
}

export default Trial