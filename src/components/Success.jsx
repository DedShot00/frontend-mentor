import React from 'react'

const Success = ({email,setEmail}) => {
  return (
    <section className='min-h-screen flex flex-col justify-between p-8 pt-20 xs:min-h-0 xs:bg-white xs:p-10 xs:rounded-3xl xs:pt-8 max-w-md'>
      <section>
        <div>
          <img src="/images/icon-success.svg" alt="success" />
        </div>
        <h2 className='text-4xl font-bold py-6'>Thanks for subscribing!</h2>
        <p className='leading-snug'>A confirmation email has been sent to <span className='font-semibold'>{email}</span>. Please open it and click the button inside to confirm your subscription</p>
      </section>
      <button onClick={() => { setEmail(false) }} className=" xs:mt-12 py-3 px-4 bg-[#232742] rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-md hover:shadow-rose-300">Dismiss message</button>
    </section>
  )
}

export default Success