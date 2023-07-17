'use client'
import Form from "@/components/Form";
import Success from "@/components/Success";
import { useState } from "react";

export default function Home() {
  const [isEmailSent, setIsEmailSent] = useState(false)
  return (
    <main className="min-h-screen  bg-white xs:flex xs:justify-center xs:items-center xs:bg-[#1a1c30] xs:p-4 ">

      <article className={` min-h-screen xs:min-h-0 xs:grid xs:grid-flow-col xs:grid-cols-[4fr,_3fr] bg-white xs:p-4 rounded-3xl max-w-3xl ${isEmailSent&&'hidden xs:hidden'}`}>
        <div className=" xs:order-1 bg-cover bg-no-repeat  aspect-[375_/_284] xs:aspect-auto bg-[url('/images/sign-up-mobile.svg')] xs:bg-[url('/images/sign-up-desktop.svg')] inline-block w-full xs:rounded-2xl " />
        
        
        <section className="p-6 xs:p-6 xs:pr-8 flex flex-col xs:justify-center h-full xs:my-auto ">
          {/* <!-- Sign-up form start --> */}
          <h1 className="text-4xl font-bold pt-2 text-[#232742]">Stay updated!</h1>
          <p className="py-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className=" flex flex-col gap-2 text-[17px]">
            <li className="flex gap-2 items-center">
              <img src="/images/icon-list.svg" alt="" />
              Product discovery and building what matters
            </li>
            <li className="flex gap-2 items-center">
              <img src="/images/icon-list.svg" alt="" />
              Measuring to ensure updates are a success
            </li>
            <li className="flex gap-2 items-center">
              <img src="/images/icon-list.svg" alt="" />
              And much more!
            </li>
          </ul>
          <Form setIsEmailSent={setIsEmailSent}/>
        </section>
      </article>
      {
        isEmailSent&&(
          <Success setEmail={setIsEmailSent} email={isEmailSent}/>
        )
      }
    </main>
  );
}
