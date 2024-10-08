import { MongoClient } from 'mongodb';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'

type Props = {
  params:{},
  searchParams: {[key:string]: string | string[] | undefined},
}

export default async function Upload(props: Props) {

    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/VentaAutos?retryWrites=true&w=majority');
    let userb = []
    userb = await mongoClient.db().collection('Users').find({}).toArray()
    
    const ver = userb.find(x=> x.user == props.searchParams.mail) != undefined ? userb.find(x=> x.user == props.searchParams.mail).verified : ''
    
    mongoClient.db().collection("Petitions").insertOne({title:  props.searchParams.title,mail: props.searchParams.mail,userimg:props.searchParams.userimg, desc:props.searchParams.desc, price: props.searchParams.price,model: props.searchParams.model, img:  props.searchParams.img,user:props.searchParams.usr, approved: true, lvl:props.searchParams.lvl, year:props.searchParams.year, km:props.searchParams.km, city:props.searchParams.city, ver:ver, phone:props.searchParams.phone});
    
    
    redirect(`/correctupload`)
}
