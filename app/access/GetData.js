"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function GetData() {
   
    const {push} = useRouter()
    useEffect(()=>{

      push("/")
    },[])
}

