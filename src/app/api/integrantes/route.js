import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Integrantes from "@/models/integrantes/Integrantes";

export async function GET(){
    connectDB()

    const integrantes = await Integrantes.find()
    return(NextResponse.json({integrantes}))
}

export async function POST(request){
    try {
        const requestIntegrante = await request.json()
        const newIntegrante = new Integrantes(requestIntegrante)
        const integranteSaved = await newIntegrante.save()
        return NextResponse.json({
            message: `Integrante ${integranteSaved} creado correctamente`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}
