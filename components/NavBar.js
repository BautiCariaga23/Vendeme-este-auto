"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import logo from "./logo.png"
import Image from "next/image"
import NavBG from "../components/Component 1.png"

export default function NavBar(props) {
  const data = useSearchParams()
  const [logged, setLogged] = useState(null)
  const [menu, setMenu] = useState(false)
  const [search,setSearch] = useState("")
  const [br,setBr] = useState('Todas')
  const [minPrice,setMin] = useState("")
  const [maxPrice,setMax] = useState("")
  const {push} = useRouter()
  useEffect(()=>{
    setLogged(localStorage.getItem("user") != undefined && localStorage.getItem("user") != [] ? true : false)
    setBr(data.get("br") != undefined ? data.get("br") : 'Todas')
  },[])
  return (
    <div className="bg-transparent text-white fixed w-full left-0 top-0 z-90" style={{zIndex :99999}}>
    <div className="absolute bg-black object-cover z-[-1] h-full w-full shadow-[0px_5px_5px_black]"></div>
    <div className='w-full top-0 relative flex justify-between items-center px-2 shadow-lg z-10'>
      <div className='flex items-center gap-4'>
        <div className="sm:hidden">
        <div onClick={()=>{setMenu(menu ? false : true)}} className={`${props.home ? 'hidden' : 'flex'} hover:cursor-pointer duration-300 w-12 rounded-lg text-white h-12 hover:bg-green-800 text-center items-center justify-center`}>
        <svg className='hover:rotate-[-12deg] duration-300' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
        </div>
        </div>
        <Link className="flex items-center gap-3" href={"/"}>
          <Image src={logo} className="w-14 h-16 -mr-2"></Image>
          <h1 className="font-bold modakfont drop-shadow-[0_0_2px_black] text-3xl text-red-500">LogiCars<span className="text-white modakfontr">.com</span></h1>
       </Link>
      </div>
      <Link href={`/profile?name=${logged ? JSON.parse(localStorage.getItem("user")).name : ''}&user=${logged ? JSON.parse(localStorage.getItem("user")).user : ''}`}>
        <img src = {logged ? JSON.parse(localStorage.getItem("user")).img: ''} className={`object-cover hover:cursor-pointer rounded-full h-12 w-12 justify-center ${logged ? 'flex' : 'hidden'}`}/>
        </Link>
      <div className={`${logged ? 'hidden' : 'flex'}`}>
        <Link href={"/login"}><div className="bg-[rgba(0,0,0,0.3)] border border-white shadow-[0_0_5px_white] rounded-lg p-2 text-white font-bold px-4 hover:cursor-pointer hover:scale-105 duration-150 italic">LOGUEARSE</div></Link>
      </div>
    </div>
    <div className={`${props.home ? 'hidden' : 'block'} z-90 absolute bg-transparent shadow-lg h-screen w-56 duration-150 sm:left-0 ${menu ? 'left-0' : 'left-[-300px]'}`}>
    <div className="absolute bg-black object-cover z-[-1] h-screen w-full shadow-[0px_5px_5px_black]"></div>
      <div className="pt-10">
      <Link href={`${logged ? '/first-step' : '/login'}`}><div className="flex items-center gap-3 mb-4 hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)] w-full p-2 px-3 rounded-lg duration-150">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21q-.425 0-.712-.288T2 20v-8l2.1-6q.15-.45.538-.725T5.5 5H9v1.375q0 .15.013.313T9.05 7h-3.2L4.8 10h6.375l3.35 3.35q-.25.2-.387.5T14 14.5q0 .625.438 1.063T15.5 16q.5 0 .9-.3t.525-.775q.275.05.537.075t.538-.025q.55-.05 1.063-.275t.937-.625V20q0 .425-.288.713T19 21h-1q-.425 0-.712-.288T17 20v-1H5v1q0 .425-.288.713T4 21zm3.5-5q.625 0 1.063-.437T8 14.5q0-.625-.437-1.062T6.5 13q-.625 0-1.062.438T5 14.5q0 .625.438 1.063T6.5 16m10.05-3.45l-5.1-5.1q-.2-.2-.325-.488T11 6.376V2.5q0-.625.438-1.062T12.5 1h3.875q.3 0 .588.125t.487.325l5.1 5.1q.425.425.425 1.063t-.425 1.062l-3.875 3.875q-.425.425-1.062.425t-1.063-.425M15 6q.425 0 .713-.288T16 5q0-.425-.288-.712T15 4q-.425 0-.712.288T14 5q0 .425.288.713T15 6"/></svg>
      <p>Vende tu auto</p>
      </div></Link>

      <Link href={"/search"}><div className="flex items-center gap-3 mb-4 hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)] w-full p-2 px-3 rounded-lg duration-150">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m5 13l1.5-4.5h11L19 13m-1.5 5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m-11 0c-.8 0-1.5-.7-1.5-1.5S5.7 15 6.5 15s1.5.7 1.5 1.5S7.3 18 6.5 18M18.9 8c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 14v8c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h12v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8M8 1l4 4.5L16 1Z"/></svg>
      <p>Busca un auto</p>
      </div></Link>

      <p className="mt-2 ml-2">Marca:</p>
      <select onChange={(e)=>{setBr(e.target.value);push(`/search?s=${search}&min=${minPrice}&max=${maxPrice}&br=${e.target.value}`)}} className='p-2 bg-white border-2 text-black text-sm rounded-full w-[90%] mb-6 mt-2 ml-2'>
        <option>Todas</option>
        <option>Alfa Romeo</option>
        <option>Audi</option>
        <option>BMW</option>
        <option>Citroen</option>
        <option>Fiat</option>
        <option>Honda</option>
        <option>Mercedes Benz</option>
        <option>Renault</option>
        <option>Seat</option>
        <option>Toyota</option>
        <option>Volkswagen</option>
        <option>Suzuki</option>
        <option>Hyundai</option>
        <option>Porsche</option>
        <option>Jeep</option>
        <option>Ferrari</option>
        <option>Peugeot</option>
        <option>Ford</option>
        <option>Nissan</option>
        <option>Lexus</option>
        <option>Kia</option>
        <option>Chevrolet</option>
        <option>Lamborghini</option>
        <option>Tesla</option>
        <option>Paggani</option>
        <option>Maclaren</option>
        <option>Megane Vicius</option>
        <option>Abell Road Ranger</option>
        <option>Sky Truck Vox</option>
        <option>Mixa Truck Lifa</option>
        <option>Sophie Ranger</option>
        <option>Light Quint Eros</option>
        <option>Carril Dump</option>
        <option>Lanal Roads</option>
        <option>Subaru</option>
        <option>Mitsubishi</option>            
      </select>

      <p className="mb-2 ml-2">Modelo:</p>
      <input onChange={(e)=>{
          setSearch(e.target.value)
      }} className='text-black bg-gray-100 ml-2 rounded-full p-2 px-3 w-48 focus:outline-none
       text-sm' placeholder='Fiesta' onKeyDown={(e)=>{
        e.key == "Enter" ? push(`/search?s=${search}&min=${minPrice}&max=${maxPrice}&br=${br}`) : ''
       }}></input><svg onClick={()=>{push(`/search?s=${search}&min=${minPrice}&max=${maxPrice}&br=${br}`)}} className='hover:cursor-pointer text-black hidden sm:block relative left-[10.5rem] bottom-[1.9rem]' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
      <p className="mb-2 ml-2 mt-6 sm:mt-0">Limite de Precio</p>
      <div className="flex items-center gap-3">
      <input onChange={(e)=>{
          setMin(e.target.value)
      }} className='text-black bg-gray-100 ml-2 rounded-full p-2 px-3 w-[5rem] focus:outline-none
       text-sm' placeholder='Min' onKeyDown={(e)=>{
        e.key == "Enter" ? push(`/search?s=${search}&min=${minPrice}&max=${maxPrice}&br=${br}`) : ''
       }}></input>

        <input onChange={(e)=>{
          setMax(e.target.value)
      }} className='text-black bg-gray-100 ml-2 rounded-full p-2 px-3 w-[5rem] focus:outline-none
       text-sm' placeholder='Max' onKeyDown={(e)=>{
        e.key == "Enter" ? push(`/search?s=${search}&min=${minPrice}&max=${maxPrice}&br=${br}`) : ''
       }}></input>
       
      </div>

      

      <div onClick={()=>{
        localStorage.setItem("user", [])
        push("/access")
      }} className="flex absolute bottom-16 items-center gap-3 mb-4 hover:cursor-pointer hover:bg-gray-800 w-[95%] p-2 px-3 rounded-lg duration-150">
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-4h2v4h14V5H5v4H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5z"/></svg>
      <p>Cerrar Sesion</p>
      </div>
      </div>
    </div>
    </div>
  )
}
