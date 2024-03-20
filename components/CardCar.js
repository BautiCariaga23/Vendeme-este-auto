import Link from 'next/link'
import React from 'react'

export default function CardCar(props) {
  return (
    <Link className='w-min' href={`/product-detail?userimg=${props.userimg}&user=${props.user}&phone=${props.phone}&ver=${props.ver}&title=${props.title}&desc=${props.desc}&model=${props.model}&price=${props.price}&year=${props.year}&km=${props.km}&city=${props.city}&img=${props.img}`}><div className='w-72 scale-100 overflow-hidden bg-transparent border-2 border-gray-200 rounded-sm p-4 pb-0 hover:cursor-pointer hover:scale-105 hover:shadow-xl duration-300'>
        <svg className={`absolute ${props.lvl == 1 ? 'block' : 'hidden'} text-amber-700 stroke-amber-800 drop-shadow-lg -mt-8`} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.486 3.143L12 5.833l-4.486-2.69A1 1 0 0 0 6 4v13a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17V4a1 1 0 0 0-1.514-.857"/></svg>
        <svg className={`absolute ${props.lvl == 2 ? 'block' : 'hidden'} text-gray-400 stroke-gray-600 drop-shadow-lg -mt-8`} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.486 3.143L12 5.833l-4.486-2.69A1 1 0 0 0 6 4v13a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17V4a1 1 0 0 0-1.514-.857"/></svg>
        <svg className={`absolute ${props.lvl == 3 ? 'block' : 'hidden'} text-yellow-400 stroke-yellow-600 drop-shadow-lg -mt-8`} xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.486 3.143L12 5.833l-4.486-2.69A1 1 0 0 0 6 4v13a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17V4a1 1 0 0 0-1.514-.857"/></svg>
        <img src={props.img} className='bg-gray-400 h-48 rounded-sm flex self-center w-full object-cover'/>
        <h1 className='text-2xl font-bold mt-2 scale-y-110 text-gray-600'>$ {props.price}</h1>
        <p className='text-lg font-light'>{props.title} • {props.model}</p>
        <p className='flex text-sm'>{props.year} • {props.km} km</p>
        <div className='border-t border-gray-200 flex items-center py-2 mt-4'>
          <p className='flex items-center justify-between w-full'><div className='flex gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4Q9.475 4 7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/></svg>
          {props.city}</div></p>
          <p className='text-sm font-light flex gap-1 items-center'>De: <p>{props.user.split(" ")[0]}</p> <svg className={`${props.ver == true ? 'block' : 'hidden'} text-blue-300`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"/></svg></p>
        </div>
    </div></Link>
  )
}
