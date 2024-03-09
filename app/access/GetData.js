"use client"
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function GetData() {
   
    const {push} = useRouter()
    const data = useSearchParams()
    if(data.get("usr") != null && data.get("p") == data.get("dp")){
      localStorage.setItem("user", JSON.stringify({name: data.get("nm"), verified: data.get("ver")}))
    }
    push("/")
}

