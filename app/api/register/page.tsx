import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
import { redirect } from "next/navigation";


type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default async function Results(props: Props) {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/VentaAutos?retryWrites=true&w=majority');
    let datab = []
    datab = await mongoClient.db().collection('Users').find({}).toArray()
    mongoose.connect("0.0.0.0/VentaAutos").
    then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("error")
    })
    datab.find(x=> x.user == props.searchParams.user) != undefined ? redirect("/register?err=1") :  await mongoClient.db().collection('Users').insertOne({user:`${props.searchParams.user}`,pass:`${props.searchParams.pass}`, id: `${Math.floor(Math.random()*999999)}`, name: `${props.searchParams.name}`, verified: false})
    redirect(`/login`)
  return (
    <main className='grid h-screen place-items-center text-white text-center'>
    </main>
  )
}