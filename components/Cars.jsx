import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import React from 'react'
import CardCar from './CardCar'

export default async function Cars(props) {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/VentaAutos?retryWrites=true&w=majority');
    let datab = []

    datab = await mongoClient.db().collection('Petitions').find({}).toArray()
    mongoose.connect("0.0.0.0/VentaAutos").
    then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("error")
    })

    let approvedC = datab.filter(function (c) {
        return c.approved === true;
    }).map(function (c) {
        return c;
    })

    let arrSort = approvedC.sort((a,b) => b.lvl - a.lvl)
    if(props.search != null){
        arrSort = arrSort.filter((a) => a.title.toUpperCase().includes(props.search.toUpperCase()))
    }
    if(props.min != "" && props.min != undefined){
        arrSort = arrSort.filter((a) => parseInt(a.price.replaceAll(".", "")) >= parseInt(props.min.replaceAll(".","")))
        console.log(parseInt(props.min.replaceAll(".","")))
    }
    if(props.max != "" && props.min != undefined){
        arrSort = arrSort.filter((a) => a.price.replaceAll(".", "") <= parseInt(props.max.replaceAll(".","")))
    }
    if(props.br != "Todas" && props.br != undefined){
        arrSort = arrSort.filter((a) => a.title == props.br)
    }
  return (
    <div className='w-full flex gap-4 m-0 flex-wrap sm:justify-start'>
        {arrSort.map((e)=>{
            return <CardCar title = {e.title} desc = {e.desc} model = {e.model} ver = {e.ver} price = {e.price} img = {e.img} user = {e.user} lvl = {e.lvl} city = {e.city} year = {e.year} km = {e.km}/>
        })}

    </div>
  )
}
