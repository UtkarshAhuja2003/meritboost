import head from "@/assets/head.svg"

const Head = () => {
  return (
    <div className="mt-12  ">
        <div className="flex md:flex-row flex-col-reverse justify-between w-[85%] mx-auto">
            <div className="md:w-[50%] mt-16">
                <div className="font-bold text-[26px] md:text-[42px]">Excel in Science and Maths with us From Primary to middle school</div>
                <div className="md:leading-6 tracking-wider">We prioritize a positive, inclusive learning environment where students freely express themselves, ask questions, and embrace mistakes as growth opportunities. Our celebration of achievements and constructive feedback empower continuous improvement, fostering student success and potential.</div>
            </div>
            <div className="md:w-[40%]">
                <img src={head.src} alt="head"/>
            </div>
        </div>
    </div>
  )
}

export default Head