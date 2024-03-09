import React from "react"
import NavBar from "../components/NavBar"
import Cars from "../components/Cars"
export default function Home() {
  

  return (
    <main className="text-black flex min-h-screen flex-col items-center p-24 px-16 bg-white">
      <div className = "relative z-90">
      <NavBar />
      </div>
      <div className="sm:ml-48 self-start">
      <h1 className="mb-6 text-4xl italic font-bold">DESTACADOS:</h1>
      <div className = "flex justify-center w-full">
      <Cars></Cars>
      </div>
      </div>
    </main>
  );
}
