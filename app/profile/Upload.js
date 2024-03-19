"use client"
import React, { useEffect, useState } from 'react'
import { UploadButton } from '../../utils/uploadthing';
import { useRouter } from 'next/navigation';


export default function Upload(props) {
    const [img, setImg] = useState(props.img)
    const [up, setUp] = useState(false)
    const {push} = useRouter()
    useEffect(()=>{
        if(up) push(`/api/updateinfo?user=${JSON.parse(localStorage.getItem("user")).user}&img=${img}`)
    },[img])
  return (
    <div>
        <div className='grid place-items-center gap-3'>
                <img src={img} className='object-cover rounded-full h-24 w-24'></img>
                <UploadButton
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      // Do something with the respon
       setImg(res[0].url)
       setUp(true)
    }}
    onUploadError={(err) => {
      // Do something with the error.
      alert(`ERROR! ${err.message}`);
    }}
  />
        </div>
   
  </div>
  )
}
