import React from 'react';
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ image,title,desc })=> {
  return (
    <div className='  md:w-[24%]'>
        <div className='md:w-[230px] w-[150px] mx-auto'>
            <Image width={200} height={200} src={image} alt="Personalized Approach"/>
        </div>
        <div className='text-[#00798A] text-center font-black tracking-wide text-[21px]'>{title}</div>
        <div className='text-justify tracking-wider mt-2 md:w-full w-[70%] mx-auto text-[14px] md:text-[16px]'>{desc}</div>
    </div>
  )
}

export default Card