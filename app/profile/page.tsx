import React from 'react'
import NavBar from "../../components/NavBar"
import CardCar from '../../components/CardCar'
import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'

type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default async function Profile(props: Props) {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/VentaAutos?retryWrites=true&w=majority');
    let datab = []
    
    datab = await mongoClient.db().collection('Petitions').find({}).toArray()
    mongoose.connect("0.0.0.0/VentaAutos").
    then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("error")
    })
    const name = props.searchParams.name
    let approvedC = datab.filter(function (c) {
        return c.approved === true;
    }).map(function (c) {
        return c;
    })

    let arrSort = approvedC.filter((a) => a.user == name ? name : '')
  return (
    <>
        <NavBar></NavBar>
        <main className='ml-36 p-24 flex flex-col bg-white min-h-screen gap-9'>
            <div className='flex gap-3 items-center h-fit mt-8'>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='rounded-full h-24 w-24'></img>
                <p className='text-2xl'>{ name ? name : ''}</p>
                <svg className={`text-blue-300 ${props.searchParams.ver == "true" ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"/></svg>
                </div>
                {arrSort.map((e,i)=>{
             return <CardCar key = {i} phone = {e.phone} title = {e.title} desc = {e.desc} model = {e.model} ver = {e.ver} price = {e.price} img = {e.img} user = {e.user} lvl = {e.lvl} city = {e.city} year = {e.year} km = {e.km}/>
              })}
        </main>
    </>
  )
}
