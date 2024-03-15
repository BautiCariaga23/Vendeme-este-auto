"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function GetData() {
   
    const {push} = useRouter()
    const data = useSearchParams()
    if(data.get("usr") != null && data.get("p") == data.get("dp")){
      localStorage.setItem("user", JSON.stringify({name: data.get("nm"), verified: data.get("ver"), phone: data.get("phone"), user: data.get("usr"), img: data.get("img")}))
    }
    push("/")
}

