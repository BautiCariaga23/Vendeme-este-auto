"use client"
import React, { useEffect, useState } from 'react'
import easyNumberSeparator from '../easy-number-separator'
import { useRouter } from 'next/navigation'
import { UploadButton } from '../../utils/uploadthing'
import NavBar from "../../components/NavBar"
export default function Page() {
    const [title, setTitle] = useState("Alfa Romeo")
    const [model, setModel] = useState("")
    const [desc, setDesc] = useState("")
    const [pr, setPr] = useState("")
    const [year, setYear] = useState(0)
    const [km, setKm] = useState(0)
    const [city, setCity] = useState("C.A.B.A")
    const [img, setImg] = useState()
    const {push} = useRouter()

  
  return (
    <div>
      <NavBar></NavBar>
    <div className='pb-4 grid mt-8 sm:ml-36 place-items-center min-h-screen h-full bg-white'>
      <h1 className="text-3xl text-center font-extralight mb-12 mt-10">1. Crea la publicación!</h1>
    <div className="grid sm:flex items-start justify-center gap-24 sm:w-full sm:px-24">
      <div className="grid place-items-center">
      <img src={img} className="w-56 h-56 sm:w-96 sm:h-96 object-cover mb-2"/>
      <UploadButton
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      // Do something with the response
      setImg(res[0].url)
    }}
    onUploadError={(err) => {
      // Do something with the error.
      alert(`ERROR! ${error.message}`);
    }}
  />
  </div>
      <div className="grid mt-[-3rem] sm:mt-0">
      <label>MARCA: </label>
      <select onChange={(e)=>{setTitle(e.target.value)}} className='p-3 rounded-lg mb-6 mt-6 ml-2'>
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
      </select>
      <label>MODELO:</label>
      <input className="mt-6 mb-6 w-56 sm:w-96 bg-transparent border-b border-black focus:outline-none " type="text" placeholder = "Auto Usado..." onChange={(e)=>{
      setModel(e.target.value)
      }}></input>
      <label>DESCRIPCION: </label>
   <textarea className="resize-none mt-6 p-2 rounded-lg mb-6 w-56 sm:w-96 bg-transparent border border-black focus:outline-none " rows="2" placeholder = "150.000km..." onChange={(e)=>{
      setDesc(e.target.value)
      }}></textarea>
    
    <div className='grid'>
      <label>AÑO:</label>
      <input className="ml-2 mt-6 mb-6 w-36 border-b border-black focus:outline-none text-3xl" placeholder = "2018" onKeyUp={(e)=>{
            setYear(e.target.value)
    }}></input>

    <label>KILOMETROS:</label>
      <input id = "km" className="ml-2 mt-6 mb-6 w-36 border-b border-black focus:outline-none text-3xl" placeholder = "10.000" onKeyUp={(e)=>{
            setKm(e.target.value)
    }} onChange={(e)=>{
      easyNumberSeparator({selector: '#km',separator: '.'})
    }}></input>

    <label>CIUDAD:</label>
      <select onChange={(e)=>{setCity(e.target.value)}} className='p-3 rounded-lg mb-6 mt-6 ml-2'>
        <option>C.A.B.A</option>
        <option>Vicente Lopez</option>
        <option>San Isidro</option>
        <option>San Fernando</option>
        <option>Tigre</option>
        <option>Escobar</option>
        <option>Pilar</option>
        <option>Jose C. Paz</option>
        <option>Malvinas Argentinas</option>
        <option>San Miguel</option>
        <option>General San Martin</option>
      </select>
    </div>
    
    <label>PRECIO: </label>
    <div className="flex items-start">
      <p className="text-3xl mt-6">$</p>
    <input id="price" className="ml-2 mt-6 mb-6 w-56 sm:w-96 border-b border-black focus:outline-none text-3xl" placeholder = "250.000" onKeyUp={(e)=>{
            setPr(e.target.value)
    }} onChange={(e)=>{
      easyNumberSeparator({selector: '#price',separator: '.'})
    }}></input>
    </div>
    <button className="bg-black rounded-lg w-24 sm:w-36 p-3 text-white" onClick={()=>{
      push(`/second-step?title=${title}&model=${model}&price=${pr}&img=${img}&desc=${desc}&usr=${JSON.parse(localStorage.getItem("user")).name}&year=${year}&km=${km}&city=${city}&ver=${JSON.parse(localStorage.getItem("user")).verified}`)
    }}>ENVIAR</button>
    </div>
    </div></div>
    </div>
  )
}
