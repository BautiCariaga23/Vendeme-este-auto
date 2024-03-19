"use client"
import React from 'react'
import NavBar from '../../components/NavBar'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SecondStep() {
  const data = useSearchParams()
  return (
    <div className='min-h-screen bg-gray-100 w-full overflow-hidden'>
    <NavBar></NavBar>
    <main className='w-full py-4 sm:ml-36'>
        <div className='mt-24 flex flex-wrap justify-center items-center gap-4'>
        
        <Link href ={`/api/upload?mail=${data.get("mail")}&userimg=${data.get("userimg")}&title=${data.get("title")}&model=${data.get("model")}&price=${data.get("price")}&img=${data.get("img")}&desc=${data.get("desc")}&usr=${data.get("usr")}&ver=${data.get("ver")}&lvl=1&year=${data.get("year")}&km=${data.get("km")}&city=${data.get("city")}&phone=${data.get("phone")}`}><div className='grid hover:cursor-pointer hover:scale-105 duration-150 text-amber-700 bg-white rounded-lg p-8 w-80 h-96 place-items-center gap-y-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24z"/></svg>
        <h1 className='text-xl font-bold text-center'>PUBLICACIÓN NIVEL BRONCE</h1>
        <p className='w-48 text-center text-sm'>Publicación posicionada luego de membresias mayores</p>
        <p className='text-white bg-black p-3 rounded-lg px-6'>$1.500</p>
        </div></Link>

        <Link href ={`/api/upload?mail=${data.get("mail")}&userimg=${data.get("userimg")}&title=${data.get("title")}&model=${data.get("model")}&price=${data.get("price")}&img=${data.get("img")}&desc=${data.get("desc")}&usr=${data.get("usr")}&ver=${data.get("ver")}&lvl=2&year=${data.get("year")}&km=${data.get("km")}&city=${data.get("city")}&phone=${data.get("phone")}`}><div className='grid hover:cursor-pointer hover:scale-105 duration-150 text-gray-500 bg-white rounded-lg p-8 w-80 h-96 place-items-center gap-y-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24z"/></svg>
        <h1 className='text-xl font-bold text-center'>PUBLICACIÓN NIVEL PLATA</h1>
        <p className='w-48 text-center text-sm'>Publicación posicionada antes de membresias menores y luego de mayores</p>
        <p className='text-white bg-black p-3 rounded-lg px-6'>$3.000</p>
        </div></Link>

        <Link href ={`/api/upload?mail=${data.get("mail")}&userimg=${data.get("userimg")}&title=${data.get("title")}&model=${data.get("model")}&price=${data.get("price")}&img=${data.get("img")}&desc=${data.get("desc")}&usr=${data.get("usr")}&ver=${data.get("ver")}&lvl=3&year=${data.get("year")}&km=${data.get("km")}&city=${data.get("city")}&phone=${data.get("phone")}`}> <div className='grid hover:cursor-pointer hover:scale-105 duration-150 text-yellow-500 bg-white rounded-lg p-8 w-80 h-96 place-items-center gap-y-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24z"/></svg>
        <h1 className='text-xl font-bold text-center'>PUBLICACIÓN NIVEL ORO</h1>
        <p className='w-48 text-center text-sm'>Publicación posicionada antes de membresias menores</p>
        <p className='text-white bg-black p-3 rounded-lg px-6'>$5.000</p>
        </div></Link>
        </div>
    </main>
   </div>
  )
}