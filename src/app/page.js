import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-300 p-4 pb-4">

      <section className="p-6 bg-white rounded-3xl max-w-[400px]">
        
        <div className=" rounded-2xl overflow-hidden">
          <img src="/images/qrCode.png" alt="" />
        </div>

        <h1 className=" text-center pt-8 text-xl font-extrabold pb-6">
          Improve your front-end skills by building projects 
        </h1>

        <p className="text-[15px] text-center text-zinc-500 pb-2">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </section>

      <div class=" absolute bottom-0 text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">DedShot</a>.
      </div>
    </main>
  );
}
