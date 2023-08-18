import React from 'react';

interface CardProps {
  question: string;
  answer: string;
}

const Card: React.FC<CardProps> = ({ question, answer }) => {
  return (
    <div className='bg-[#D9D9D9] font-font md:p-4 md:my-0 my-4 p-2'>
      <div className='font-semibold text-[10px] md:text-[20px]'>{question}</div>
      <div className='text-[10px] md:text-[17px]'>{answer}</div>
    </div>
  );
};

export default Card;
