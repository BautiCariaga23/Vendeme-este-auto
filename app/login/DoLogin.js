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
        <div className='grid gap-y-3'>
          <h1 className='text-center text-7xl mb-12'>INGRESÁ</h1>
        <input onChange={(e)=>{setemail(e.target.value)}} placeholder='E-Mail' type='email' className='border border-black rounded-lg p-2'></input>
        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' type='password' className='border border-black rounded-lg p-2'></input>
        <p className={`text-red-600 ${data.get("err") == 2 ? 'block' : 'hidden'}`}>{data.get("err") == 2 ? 'Usuario o contraseña incorrectos' : ''}</p>
        <button onClick={()=>{
            push(`/api/login?user=${email}&pass=${pass}`)
        }} className='bg-black text-white p-2 rounded-lg'>Log-In</button>
        <p>No tienes una cuenta? <Link href={"/register"} className='text-blue-300'>Registrate!</Link></p>
        </div>
    </div>
  )
}