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
    const datapass = datab.find(x=> x.user == props.searchParams.user) != undefined ? datab.find(x=> x.user == props.searchParams.user).pass : ''
    const isright = props.searchParams.pass == datapass
    const dataname = datab.find(x=> x.user == props.searchParams.user) != undefined ? datab.find(x=> x.user == props.searchParams.user).name : ''
    isright ? redirect(`/access?usr=${props.searchParams.user}&p=${props.searchParams.pass}&dp=${datapass}&nm=${dataname}&ver=${datab.find(x=> x.user == props.searchParams.user).verified}`) : redirect("/login?err=2")
  return (
    <main className='grid h-screen place-items-center text-white text-center'>
    </main>
  )
}