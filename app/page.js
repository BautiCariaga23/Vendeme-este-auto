import React, { Suspense } from "react"
import NavBar from "../components/NavBar"
import Cars from "../components/Cars"
import Link from "next/link";
import "./globals.css"
import CarsIMG from "../components/bannercars.png"
import BG from "../components/BgCar.png"
import Image from "next/image";
export default function Home() {
  

  return (
    <Suspense>
    <main className="text-black flex h-screen flex-col items-center w-full p-0 m-0 overflow-hidden">
      <div className = "absolute z-90">
      <NavBar home = {true} />
      </div>
      <Image src = {BG} className="w-full absolute z-0 top-0 h-full object-cover"/>
      <div className="grid relative sm:place-content-center w-full sm:w-auto z-60 m-auto ml-0 sm:left-12 scale-125 px-4">
      <Image src={CarsIMG} className="hidden sm:block absolute mt-24 ml-80 scale-[2] drop-shadow-[0_0_20px_black]"></Image>
      <p className="sm:mt-48 sm:ml-16 tracking-tight sm:left-9 text-red-600 text-[50px] sm:text-[80px] text-center font-black drop-shadow-[-3px_3px_2px_rgba(0,0,0,1)] titletext">LOGICARS <br></br><span className="titletext2 text-white relative bottom-10 sm:bottom-14">.COM</span></p>
      </div>
      <div className="absolute p-18 bottom-16 sm:bottom-8 sm:right-24">
      <Link href={"/search"}><div className="p-4 px-8 italic text-center shadow-[0_0_10px] shadow-white bg-transparent border-white border-2 font-black text-white rounded-full mt-6 hover:scale-105 duration-150 text-xl">
      NUESTRO CATALOGO</div></Link>
      </div>
    </main>
    </Suspense>
  );
}
