import React from 'react'
import NavBar from "../../components/NavBar"
export default function page() {
  return (
    <main>
        <NavBar></NavBar>
        <div className='grid place-items-center ml-36 min-h-screen bg-gray-100'>
        <div className='grid place-items-center gap-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 36 36"><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14" className="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42" className="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
            <p>Tu vehiculo fue enviado a revisión correctamente!</p>
        </div>
        </div>
    </main>
  )
}
