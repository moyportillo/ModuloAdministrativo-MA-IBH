import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongodb'
import Integrantes from '@/models/integrantes/Integrantes'


export async function GET(request, { params }) {
    try {
        connectDB()
        const integrantesFound = await Integrantes.findById(params.idIntegrante)

        if (!integrantesFound) return NextResponse.json({
            message: "Integrante no encontrado",
        }, {
            status: 404
        })

        return NextResponse.json(integrantesFound)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}

export async function PUT(request, { params }) {
    try {
        const requestIntegrante = await request.json()
        const IntegranteUpdate = await Integrantes.findByIdAndUpdate(params.idIntegrante, requestIntegrante, {
            new: true
        })
        return NextResponse.json({
            message: `actualizando Integrante ${IntegranteUpdate}`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}

export async function DELETE(request, {params }) {
    try {
        const IntegranteDeleted = await Integrantes.findByIdAndDelete(params.idIntegrante)

        if (!IntegranteDeleted) return NextResponse.json({
            message: "Integrante no encontrado"
        }, {
            status: 404
        })
        return NextResponse.json({
            message: `Eliminando Integrante ${IntegranteDeleted}`
        })
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

}