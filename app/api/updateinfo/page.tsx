import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
import Localthings from "./Localthings"

type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default async function UpdateInfo(props: Props) {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/VentaAutos?retryWrites=true&w=majority');
    mongoClient.db().collection("Users").updateOne({"user": props.searchParams.user},{$set: {"img": props.searchParams.img}})
    mongoClient.db().collection("Petitions").updateMany({"mail": props.searchParams.user},{$set: {"userimg": props.searchParams.img}})
    return <Localthings user = {props.searchParams.user} img = {props.searchParams.img}/>
}