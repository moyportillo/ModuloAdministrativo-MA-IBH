import { NextResponse } from 'next/server'

export function GET(request, { params }) {
    return NextResponse.json({
        message: `obteniendo integrante ${params.id}`
    });
}

export function DELETE(request, {params}) {
    return NextResponse.json({
        message: `Eliminando integrante ${params.id}`
    })
}

export function PUT(request, { params }) {
    return NextResponse.json({
        message: `actualizando integrante ${params.id}` 
    })
}