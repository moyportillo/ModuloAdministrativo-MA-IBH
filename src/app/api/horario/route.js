import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongodb";
import Horario from "@/models/horario/Horario";

export async function GET(){
    connectDB()
    const horario = await Horario.find()
    return NextResponse.json({horario})
}

export async function POST(request) {

    try {
        const requestHorario = await request.json()
        const newHorario = new Horario(requestHorario)
        const horarioSaved = await newHorario.save()
        return NextResponse.json({
            message: `Horario ${horarioSaved} creado correctamente`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}