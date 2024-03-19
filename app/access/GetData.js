"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function GetData() {
   
    const {push} = useRouter()
    push("/")
}

