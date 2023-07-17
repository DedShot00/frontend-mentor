'use client'
import { Abril_Fatface } from "next/font/google";
import React, { useState } from "react";

const Form = ({setIsEmailSent}) => {

  const [invalidMailShow, setInvalidMailShow] = useState(false)

  function validarCorreo(correo) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(correo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const mail = event.target.mail.value
    // Realizar la validación personalizada del formulario y enviar los datos
    const isValidMail = validarCorreo(mail)
    if (!isValidMail) {
      setInvalidMailShow(true)
    }else{
      setIsEmailSent(mail)
    }
  };

  const handleFormChange = () => { 
    setInvalidMailShow(false)  
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleFormChange}  className="flex relative flex-col py-6 gap-3" >
      <label className="text-sm font-bold" htmlFor="email">
        Email address{" "}
      </label>
      <div className="absolute right-0 text-sm font-bold text-red-500">{invalidMailShow&&'Enter a valid mail'}</div>
      <input
        id="mail"
        required
        className={` ${invalidMailShow&&'border-red-400 border-2 bg-red-50 text-red-500'} outline-none  border  border-zinc-500 py-2 pl-2 rounded-lg`}
        type="text"
        placeholder="email@company.com"
      />
      <button className=" py-3 px-4 bg-[#232742] rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-md hover:shadow-rose-300">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
