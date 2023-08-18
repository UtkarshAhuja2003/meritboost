import Card from './card'
import {faq} from "../../../config/faq"

const FAQ = () => {
  return (
    <div className="font-font my-24" id='faq'>
        <div className="w-[88%] mx-auto rounded-[15px]" style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="w-full bg-[#D9D9D9] h-[1rem] rounded-tr-[15px] rounded-tl-[15px]"></div>
            <center className="font-bold text-[15px] md:text-[25px] tracking-wide md:mt-2">Frequently Asked Questions</center>
            <div className='w-[90%] mx-auto py-[3%] md:grid grid-cols-2 gap-8'>
                {
                    faq.map((item, index) =>
                        <Card key={index} 
                        question={item.question} 
                        answer={item.answer} />
                    )
                }
                
            </div>
        </div>
    </div>
  )
}

export default FAQ