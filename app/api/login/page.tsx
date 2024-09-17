import { MongoClient } from "mongodb";
import GetMyData from "./GetMyData.jsx"
import { redirect } from "next/navigation.js";

type Props = {
    params:{},
    searchParams: {[key:string]: string | string[] | undefined},
}

export default async function Results(props: Props) {
    const mongoClient = new MongoClient('mongodb+srv://buati2323:12872563b@cluster0.joggabu.mongodb.net/VentaAutos?retryWrites=true&w=majority');
    let datab = []

    datab = await mongoClient.db().collection('Users').find({}).toArray()
    const datapass = datab.find(x=> x.user == props.searchParams.user) != undefined ? datab.find(x=> x.user == props.searchParams.user).pass : ''
    let isright = props.searchParams.pass == datapass
    if(props.searchParams.pass == ""){
        isright = false;
    }
    const dataname = datab.find(x=> x.user == props.searchParams.user) != undefined ? datab.find(x=> x.user == props.searchParams.user).name : ''
    return (
        <div>
            {isright ? <GetMyData name = {dataname} user ={props.searchParams.user} p = {props.searchParams.pass} ver = {datab.find(x=> x.user == props.searchParams.user).verified} img = {datab.find(x=> x.user == props.searchParams.user).img} phone = {datab.find(x=> x.user == props.searchParams.user).phone} isRight = {isright}/> : redirect("/login?err=2")}
    
    </div>
    )
    /* isright ? redirect(`/access?usr=${props.searchParams.user}&p=${props.searchParams.pass}&dp=${datapass}&nm=${dataname}&ver=${datab.find(x=> x.user == props.searchParams.user).verified}&img=${datab.find(x=> x.user == props.searchParams.user).img}&phone=${datab.find(x=> x.user == props.searchParams.user).phone}`) : redirect("/login?err=2") */
}