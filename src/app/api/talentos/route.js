import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";
import Talento from "@/models/talento/Talento";

export async function GET(){
    connectDB()

    const talentos = await Talento.find()
    return(NextResponse.json({talentos}))
}

export async function POST(request) {

    try {
        const requestTalento = await request.json()
        const newTalento = new Talento(requestTalento)
        const talentoSaved = await newTalento.save()
        return NextResponse.json({
            message: `Talento ${talentoSaved} creado correctamente`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}