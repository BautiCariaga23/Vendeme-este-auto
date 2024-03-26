"use client"
import React, { Suspense, useEffect, useState } from 'react'
import easyNumberSeparator from '../easy-number-separator'
import { useRouter } from 'next/navigation'
import NavBar from "../../components/NavBar"
import { UploadButton } from '../../utils/uploadthing'
export default function FirstStep() {
    const [title, setTitle] = useState("Alfa Romeo")
    const [model, setModel] = useState("")
    const [desc, setDesc] = useState("")
    const [pr, setPr] = useState("")
    const [year, setYear] = useState(0)
    const [km, setKm] = useState(0)
    const [city, setCity] = useState("C.A.B.A")
    const [imgs, setImgs] = useState([])
    const [currImg, setCurrImg] = useState(0)
    const {push} = useRouter()

    useEffect(()=>{
      if(localStorage.getItem("user") != undefined && localStorage.getItem("user") != []){
        return;
      }else{
        push("/login")
      }
    })
  return (
    <div>
      <NavBar></NavBar>
    <div className='pb-4 grid mt-8 sm:ml-36 place-items-center min-h-screen h-full bg-white'>
      <h1 className="text-3xl text-center font-extralight mb-12 mt-10">1. Crea la publicación!</h1>
    <div className="grid sm:flex items-start justify-center gap-24 sm:w-full sm:px-24">
      <div className="grid place-items-center">
        <section className='flex justify-between'>
        <div className='flex justify-start absolute'>
            <div className='absolute text-white ml-16 mt-2 bg-black opacity-80 w-[70px] h-[30px] text-center rounded-xl p-4'>
                <p className='-mt-2.5'>{imgs.length > 0 ?currImg+1 : 0} / {imgs.length}</p>
            </div>
            </div>
          <button onClick={()=>{setCurrImg(currImg > 0 ? currImg-1 : 0)}} className='ml-4 p-4'>{"<"}</button>
          <img src={imgs[currImg]} className="w-56 h-56 sm:w-96 sm:h-96 object-cover mb-2"/>
          <button onClick={()=>{setCurrImg(currImg < imgs.length-1 ? currImg+1 : imgs.length-1)}} className='p-4'>{">"}</button>
        </section>
      <UploadButton
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      // Do something with the response
      setImgs(im => [...im,res[0].url])
    }}
    onUploadError={(err) => {
      // Do something with the error.
      alert(`ERROR! ${err.message}`);
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
      push(`/second-step?userimg=${JSON.parse(localStorage.getItem("user")).img}&title=${title}&model=${model}&price=${pr}&img=${imgs}&desc=${desc}&usr=${JSON.parse(localStorage.getItem("user")).name}&phone=${JSON.parse(localStorage.getItem("user")).phone}&year=${year}&km=${km}&city=${city}&ver=${JSON.parse(localStorage.getItem("user")).verified}&mail=${JSON.parse(localStorage.getItem("user")).user}`)
    }}>ENVIAR</button>
    </div>
    </div></div>
    </div>
  )
}
