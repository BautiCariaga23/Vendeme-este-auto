import React, { Suspense } from "react"
import NavBar from "../components/NavBar"
import Cars from "../components/Cars"
import Link from "next/link";
export default function Home() {
  

  return (
    <Suspense>
    <main className="text-black flex h-screen flex-col items-center bg-white">
      <div className = "relative z-90">
      <NavBar home = {true} />
      </div>
      <img src = "https://pixelz.cc/wp-content/uploads/2018/12/peugeot-508-uhd-4k-wallpaper.jpg"
       className="w-full absolute z-0 h-screen object-cover mt-16"/>
      <div className="grid relative z-60 m-auto ml-0 sm:left-12">
      <p className="top-36 sm:left-9 text-white text-5xl text-center font-black drop-shadow-[-3px_3px_2px_rgba(0,0,0,1)]">ENCONTRA TU AUTO <br></br> AL MEJOR PRECIO</p>
      <div className="flex gap-8 justify-center">
      <Link href={"/search"}><div className="p-2 px-8 w-36 text-center bg-slate-900 text-white rounded-lg mt-6 hover:scale-105 duration-150">BUSCÁ</div></Link>
      <Link href={"/first-step"}><div className="p-2 px-8 w-36 text-center bg-slate-900 text-white rounded-lg mt-6 hover:scale-105 duration-150">VENDÉ</div></Link>
      </div>
      </div>
    </main>
    </Suspense>
  );
}
