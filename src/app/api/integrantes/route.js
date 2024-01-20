import {NextResponse} from "next/server";

export function GET(){
    return NextResponse.json({
        message: "obteniendo integrantes"
    })
}

export function POST(){
    return NextResponse.json({
        message: "Creando integrantes"
    })
}