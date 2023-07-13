import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  bg-white xs:flex xs:justify-center xs:items-center xs:bg-[#1a1c30] xs:p-4 ">

      <article className="min-h-screen xs:min-h-0 xs:grid xs:grid-flow-col xs:grid-cols-[2fr,_3fr] bg-white xs:p-4 rounded-2xl max-w-3xl">
        <div className=" bg-cover bg-no-repeat  aspect-[375_/_284] xs:aspect-auto bg-[url('/images/sign-up-mobile.svg')] xs:bg-[url('/images/sign-up-desktop.svg')] inline-block w-full xs:rounded-2xl " />
        
        
        <section className="p-6 xs:p-0 xs:pl-4 flex flex-col xs:justify-center h-full xs:my-auto ">
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
          <form className="flex flex-col py-6 gap-3">
            <label className="text-sm font-bold" htmlFor="email">Email address </label>
            <input className=" outline-none focus:border-2 focus:border-black border border-zinc-500 py-2 pl-2 rounded-lg" type="email" placeholder="email@company.com" />
            <button className=" py-3 px-4 bg-[#232742] rounded-lg text-white font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-md hover:shadow-rose-300">Subscribe to monthly newsletter</button>
          </form>
          {/* <!-- Sign-up form end --> */}


          {/* Thanks for subscribing! A confirmation email has been sent to
          ash@loremcompany.com. Please open it and click the button inside to
          confirm your subscription. Dismiss message */}
        </section>
      </article>
    </main>
  );
}
