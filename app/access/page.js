"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const {push} = useRouter()
    const data = useSearchParams()
    if(data.get("usr") != null && data.get("p") == data.get("dp")){
      localStorage.setItem("user", JSON.stringify({name: data.get("nm"), verified: data.get("ver")}))
    }
    push("/")
}
