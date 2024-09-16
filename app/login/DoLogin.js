"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import Link from 'next/link'

export default function DoLogin() {
    const [email, setemail] = useState("")
    const [pass, setPassword] = useState("")
    const {push} = useRouter()
    const data = useSearchParams()
  return (
    <div className='grid place-items-center min-h-screen h-full bg-white'>
      <NavBar home = {true}></NavBar>
        <div className='grid gap-y-3 bg-black p-12 py-24 text-white rounded-lg mt-16'>
          <h1 className='text-center text-7xl mb-12'>INGRESÁ</h1>
        <input onChange={(e)=>{setemail(e.target.value)}} placeholder='E-Mail' type='email' className='bg-white focus:outline-none rounded-full p-3 w-96 text-black'></input>
        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type='password' className='bg-white focus:outline-none rounded-full p-3 text-black'></input>
        <p className={`text-red-600 ${data.get("err") == 2 ? 'block' : 'hidden'}`}>{data.get("err") == 2 ? 'Usuario o contraseña incorrectos' : ''}</p>
        <button onClick={()=>{
            push(`/api/login?user=${email}&pass=${pass}`)
        }} className='bg-red-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white p-2 rounded-lg'>Ingresar</button>
        <p>No tienes una cuenta? <Link href={"/register"} className='text-red-500'>Registrate!</Link></p>
        </div>
    </div>
  )
}