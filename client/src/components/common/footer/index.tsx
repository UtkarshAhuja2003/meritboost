import React from 'react';
import { PiPhoneCallBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgalt   py-8 text-center" id='contact'>
      <div className="mb-2">
        <PiPhoneCallBold className="inline-block mr-2 text-2xl" />
        Contact Number: <a href="https://wa.me/918851738440" className="text-blue-500" target="_blank" rel="noopener noreferrer">8851738440 (WhatsApp Only)</a>
      </div>
      <div>
      <MdEmail className="inline-block mr-2 text-2xl" />
        Email Address: <a href="mailto:lakshitaahuja656@gmail.com" className="text-blue-500">lakshitaahuja656@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
