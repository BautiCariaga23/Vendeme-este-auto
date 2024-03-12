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
    <div className='grid place-items-center min-h-screen h-full bg-white'>
      <NavBar></NavBar>
        <div className='grid gap-y-3'>
          <h1 className='text-center text-7xl mb-12'>INGRESÁ</h1>
        <input onChange={(e)=>{setemail(e.target.value)}} placeholder='E-Mail' type='email' className='border border-black rounded-lg p-2'></input>
        <input onChange={(e)=>{setName(e.target.value)}} placeholder='Nombre Completo' type='text' className='border border-black rounded-lg p-2'></input>
        <input onChange={(e)=>{setPhone(e.target.value)}} placeholder='Telefono' type='text' className='border border-black rounded-lg p-2'></input>
        <div className='flex items-center'><input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type='password' className='border border-black rounded-lg p-2'></input><p className={`absolute ml-64 ${pass.length>6 ? 'hidden' :'block'}`}>La contraseña debe tener al menos 6 caracteres</p></div>
        <p className={`text-red-600 ${data.get("err") == 1 ? 'block' : 'hidden'}`}>{data.get("err") == 1 ? 'Este e-mail ya se encuentra en uso' : ''}</p>
        <button onClick={()=>{valid ? push(`/api/register?user=${email}&pass=${pass}&name=${name}&phone=${phone}`) : alert("Revisa las credenciales!")}} className='bg-black text-white p-2 rounded-lg'>Register</button>
        <p>Ya tienes una cuenta? <Link href={"/login"} className='text-blue-300'>Ingresa!</Link></p>
       
        </div>
    </div>
  )
}