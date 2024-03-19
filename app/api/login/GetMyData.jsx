"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function GetMyData(props) {
   
    const {push} = useRouter()
    
    useEffect(()=>{
      if(props.isRight){
        localStorage.setItem("user", JSON.stringify({name: props.name,pass:props.pass, verified: props.ver, phone: props.phone, user: props.user, img: props.img}))
      }
      push("/")
    },[])
   
}

