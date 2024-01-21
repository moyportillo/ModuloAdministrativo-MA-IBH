import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongodb'
import Talento from '@/models/talento/Talento'

export async function GET(request, { params }) {
    try {
        connectDB()
        const talentoFound = await Talento.findById(params.idTalento)

        if (!talentoFound) return NextResponse.json({
            message: "Talento no encontrado",
        }, {
            status: 404
        })

        return NextResponse.json(talentoFound)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}

export async function PUT(request, { params }) {
    try {
        const requestTalento = await request.json()
        const talentoUpdate = await Talento.findByIdAndUpdate(params.idTalento, requestTalento, {
            new: true
        })
        return NextResponse.json({
            message: `actualizando Talento ${talentoUpdate}`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}

export async function DELETE(request, {params }) {
    try {
        const talentoDeleted = await Talento.findByIdAndDelete(params.idTalento)

        if (!talentoDeleted) return NextResponse.json({
            message: "Talento no encontrado"
        }, {
            status: 404
        })
        return NextResponse.json({
            message: `Eliminando talento ${talentoDeleted}`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}