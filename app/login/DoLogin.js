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
    <div className='grid place-items-center min-h-screen h-full bg-pink-900 overflow-hidden'>
      <NavBar home = {true}></NavBar>
        <div className='grid place-content-center gap-y-3 bg-red-950 shadow-[0_0_30px_black] w-80 sm:w-auto p-12 py-24 text-white rounded-lg mt-16'>
          <h1 className='text-center text-5xl sm:text-7xl mb-12'>INGRESÁ</h1>
        <input onChange={(e)=>{setemail(e.target.value)}} placeholder='E-Mail' type='email' className='bg-pink-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] focus:outline-none rounded-full p-3 sm:w-96 text-white'></input>
        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Contraseña' type='password' className='bg-pink-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] focus:outline-none rounded-full p-3 text-white'></input>
        <p className={`text-red-600 ${data.get("err") == 2 ? 'block' : 'hidden'}`}>{data.get("err") == 2 ? 'Usuario o contraseña incorrectos' : ''}</p>
        <button onClick={()=>{
            push(`/api/login?user=${email}&pass=${pass}`)
        }} className='bg-red-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white p-2 rounded-lg'>Ingresar</button>
        <p>No tienes una cuenta? <Link href={"/register"} className='text-red-500'>Registrate!</Link></p>
        </div>
    </div>
  )
}