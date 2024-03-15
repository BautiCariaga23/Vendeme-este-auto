import React, { Suspense } from "react"
import NavBar from "../components/NavBar"
import Cars from "../components/Cars"
import Link from "next/link";
export default function Home() {
  

  return (
    <Suspense>
    <main className="text-black flex min-h-screen flex-col items-center bg-white">
      <div className = "relative z-90">
      <NavBar home = {true} />
      </div>
      <p className="absolute top-36 sm:left-9 text-white text-5xl text-center font-black drop-shadow-[-3px_3px_2px_rgba(0,0,0,1)]">ENCONTRA TU AUTO <br></br> AL MEJOR PRECIO</p>
      <img src = "https://t3.ftcdn.net/jpg/04/60/44/42/360_F_460444211_E7j3njYE705Rk1guKz9LKh58gFgiTybV.jpg"
       className="w-full h-96 object-cover mt-16"/>
       <Link href={"/search"}><div className="p-4 px-6 bg-black text-white rounded-lg mt-6 hover:scale-105 duration-150">BUSCÁ YA TU AUTO</div></Link>
    </main>
    </Suspense>
  );
}
