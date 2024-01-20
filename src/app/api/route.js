import {NextResponse} from 'next/server'
import {MongoDB, connectDB} from '@/utils/mongodb'

export function GET(){
    connectDB()
    return NextResponse.json({
        message: "Hello World"
    })
}
