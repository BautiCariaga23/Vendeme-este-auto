import React from "react"
import Cars from "../../components/Cars"
import NavBar from "../../components/NavBar";

type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default function Page(props: Props) {
  return (
    <main className="text-black flex min-h-screen flex-col items-center p-24 px-16 bg-white">
    <div className = "relative z-90">
    <NavBar />
    </div>
    <div className="sm:ml-48 self-start">
    <h1 className="mb-6 text-4xl italic font-bold">DESTACADOS:</h1>
    <div className = "flex justify-center w-full">
    <Cars search ={props.searchParams.s} max = {props.searchParams.max} min = {props.searchParams.min} br ={props.searchParams.br}></Cars>
    </div>
    </div>
  </main>
  );
}
