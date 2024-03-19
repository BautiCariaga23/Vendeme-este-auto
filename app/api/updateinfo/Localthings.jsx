"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Localthings(props) {
    const {push} = useRouter()
    const user = JSON.parse(localStorage.getItem("user"))
    localStorage.setItem("user",JSON.stringify({name: user.name, verified: user.verified, phone: user.phone, user: user.user, img: props.img}))
    useEffect(()=>{
        push("/")
    },[])
}
