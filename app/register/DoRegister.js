"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Link from 'next/link'

export default function DoRegister() {
    const [email, setemail] = useState("")
    const [pass, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [valid, setValid] = useState(false)
    const {push} = useRouter()
    const data = useSearchParams()

    useEffect(()=>{
      if((email != "" && (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gm).test(email)) && pass.length > 6 && name.length > 3){
        setValid(true)
      }else{
        setValid(false)
      }
    },[email, pass, name])
  return (
    <div className='grid place-items-center min-h-screen h-full bg-pink-900'>
      <NavBar home = {true}></NavBar>
        <div className='grid gap-y-3 bg-red-950 p-12 py-14 text-white rounded-lg mt-16 shadow-[0_0_30px_black]'>
          <h1 className='text-center text-4xl sm:text-7xl mb-12'>REGISTRATE</h1>
        <input onChange={(e)=>{setemail(e.target.value)}} placeholder='E-Mail' type='email' className='bg-pink-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] focus:outline-none rounded-full p-3 w-96'></input>
        <input onChange={(e)=>{setName(e.target.value)}} placeholder='Nombre Completo' type='text' className='bg-pink-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] focus:outline-none rounded-full p-3'></input>
        <input onChange={(e)=>{setPhone(e.target.value)}} placeholder='Telefono' type='text' className='bg-pink-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] focus:outline-none rounded-full p-3'></input>
        <div className='flex items-center group'><input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type='password' className='bg-pink-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] focus:outline-none rounded-full p-3 peer/pass'></input>
        <p className={`absolute opacity-0 peer-focus/pass:opacity-90 ml-24 mb-36 w-36 bg-black p-3 text-sm text-center text-white rounded-t-lg rounded-br-lg ${pass.length>6 ? 'hidden' :'block'}`}>La contraseña debe tener al menos 6 caracteres</p></div>
        <p className={`text-red-600 ${data.get("err") == 1 ? 'block' : 'hidden'}`}>{data.get("err") == 1 ? 'Este e-mail ya se encuentra en uso' : ''}</p>
        <button onClick={()=>{valid ? push(`/api/register?user=${email}&pass=${pass}&name=${name}&phone=${phone}`) : alert("Revisa las credenciales!")}} className='bg-red-800 text-white p-2 rounded-lg'>Register</button>
        <p>Ya tienes una cuenta? <Link href={"/login"} className='text-red-500'>Ingresa!</Link></p>
       
        </div>
    </div>
  )
}