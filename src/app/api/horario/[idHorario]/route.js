import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongodb'
import Horario from '@/models/horario/Horario'

export async function GET(request, { params }) {
    try {
        connectDB()
        const horarioFound = await Horario.findById(params.idHorario)

        if (!horarioFound) return NextResponse.json({
            message: "Horario no encontrado",
        }, {
            status: 404
        })

        return NextResponse.json(horarioFound)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}

export async function PUT(request, { params }) {
    try {
        const requestHorario = await request.json()
        const horarioUpdate = await Horario.findByIdAndUpdate(params.idHorario, requestHorario, {
            new: true
        })
        return NextResponse.json({
            message: `actualizando Horario ${horarioUpdate}`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}

export async function DELETE(request, {params }) {
    try {
        const horarioDeleted = await Horario.findByIdAndDelete(params.idHorario)

        if (!horarioDeleted) return NextResponse.json({
            message: "Horario no encontrado"
        }, {
            status: 404
        })
        return NextResponse.json({
            message: `Eliminando horario ${horarioDeleted}`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}