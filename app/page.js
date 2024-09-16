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
    <main className="text-black flex h-screen flex-col items-center">
      <div className = "absolute z-90">
      <NavBar home = {true} />
      </div>
      <Image src = {BG} className="w-full absolute z-0 top-0 h-screen object-cover"/>
      <div className="grid relative z-60 m-auto ml-0 sm:left-12 scale-125 px-4">
      <Image src={CarsIMG} className="absolute mt-24 ml-80 scale-[2] drop-shadow-[0_0_20px_black]"></Image>
      <p className="mt-48 ml-16 tracking-tight sm:left-9 text-red-600 text-[80px] text-center font-black drop-shadow-[-3px_3px_2px_rgba(0,0,0,1)] titletext">LOGICARS <br></br><span className="titletext2 text-white relative bottom-14">.COM</span></p>
      </div>
      <div className="flex gap-8 justify-center absolute right-36 bottom-16">
      <Link href={"/search"}><div className="p-4 px-8 w-fit italic text-center shadow-[0_0_10px] shadow-white bg-transparent border-white border-2 font-black text-white rounded-full mt-6 hover:scale-105 duration-150 text-3xl">
      NUESTRO CATALOGO</div></Link>
      </div>
    </main>
    </Suspense>
  );
}
