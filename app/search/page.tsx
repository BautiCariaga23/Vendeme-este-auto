import React from "react"
import Cars from "../../components/Cars"
import NavBar from "../../components/NavBar";

type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default function Page(props: Props) {
  return (
    <main className="text-black flex min-h-screen flex-col items-center px-4 sm:p-24 sm:px-16 bg-white">
    <div className = "relative z-90">
    <NavBar />
    </div>
    <div className="mt-24 sm:mt-0 sm:ml-48">
    <h1 className="mb-6 text-4xl font-light">Ultimos Publicados:</h1>
    <Cars search ={props.searchParams.s} max = {props.searchParams.max} min = {props.searchParams.min} br ={props.searchParams.br}></Cars>
    </div>
  </main>
  );
}
