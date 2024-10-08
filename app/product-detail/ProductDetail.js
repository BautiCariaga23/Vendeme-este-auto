"use client"
import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import { useSearchParams } from 'next/navigation'

export default function ProductDetail() {

    const data = useSearchParams()
    const [currImg, setCurrImg] = useState(0)
  return (
    <main>
    <NavBar></NavBar>
    <div className='grid mt-12 sm:mt-0 place-items-center sm:flex bg-white sm:ml-48 p-12 pb-0 sm:p-24 gap-9'>
    <section className='flex justify-center'>
        <div className='w-full flex justify-start'>
            <div className='absolute text-white ml-16 -mt-6 bg-black opacity-80 w-[70px] h-[30px] text-center rounded-xl p-4'>
                <p className='-mt-2.5'>{currImg+1} / {data.get("img").split(",").length}</p>
            </div>
            </div>
          <button onClick={()=>{setCurrImg(currImg > 0 ? currImg-1 : 0)}} className='ml-4 p-4 z-90 relative'>{"<"}</button>
          <img src={data.get("img").split(",")[currImg]} className='h-96 w-[700px] -mt-8 object-cover'></img>
          <button onClick={()=>{setCurrImg(currImg < (data.get("img").split(",")).length-1 ? currImg+1 : (data.get("img").split(",")).length-1)}} className='p-4 z-90 relative'>{">"}</button>
        </section>
        <div className='w-full'>
        <div className='flex-col justify-start sm:ml-12 h-min py-4 mt-8 border border-gray-200 pr-16 pl-4 rounded-t-lg'>
            <h1 className='text-2xl font-bold'>{data.get("title")} · {data.get("model")}</h1>
            <p className='text-gray-500 text-sm font-bold'>{data.get("km")} km · {data.get("city")}</p>
        </div>

        <div className='flex-col justify-start sm:ml-12 h-min py-4 border border-gray-200 pr-16 pl-4'>
            <p className='text-gray-500 text-sm font-bold'>Precio:</p>
            <h1 className='text-2xl font-bold text-gray-700'>${data.get("price")}</h1>
        </div>

        <div className='flex-col justify-start sm:ml-12 h-min py-4 border border-gray-200 pr-16 pl-4'>
            <p className='text-gray-500 text-sm font-bold'>Año:</p>
            <h1 className='text-2xl font-bold'>{data.get("year")}</h1>
            <hr className='w-[120%] my-4'></hr>

            <p className='text-gray-500 text-sm font-bold'>Descripcion:</p>
            <h1 className='text-sm font-light'>{data.get("desc")}</h1>
        </div>

        <div className='flex-col justify-start sm:ml-12 h-min py-4 border border-gray-200 rounded-b-lg pr-16 pl-4'>
        <p className='text-gray-500 text-sm font-bold'>Contacto:</p>
            <div className='flex gap-2 items-center mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 256 258"><defs><linearGradient id="IconifyId18e2033ab3a96141b2" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#1FAF38"/><stop offset="100%" stopColor="#60D669"/></linearGradient><linearGradient id="IconifyId18e2033ab3a96141b3" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#F9F9F9"/><stop offset="100%" stopColor="#FFF"/></linearGradient></defs><path fill="url(#IconifyId18e2033ab3a96141b2)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#IconifyId18e2033ab3a96141b3)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
            <p>{data.get("phone") != "undefined" ? data.get("phone") : '11 1234 5678'}</p>
            </div>
        </div>
        <p className='hover:cursor-pointer sm:ml-12 p-4 mb-3 font-light border-gray-300 border-2 mt-4 rounded-lg flex gap-1 items-center'><img className='w-12 h-12 object-cover rounded-full mr-3' src={data.get("userimg")}/>{data.get("user")} {data.get("ver") == "true" ?  <svg className={`text-blue-300`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"/></svg> : ''}</p>
        </div>
    </div>
    </main>
  )
}
