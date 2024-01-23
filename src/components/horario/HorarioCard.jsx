import Link from "next/link";

function HorarioCard({ horario }) {
    return (
        <Link href={`/horarios/${horario._id}`}>
            <div className="br-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-800">
                <h3 className="text-2xl font-bold">{horario.dia}</h3>
                <p className="text-slate-300">{horario.codigoDia}</p>
                <p className="mr-1">{horario.estado}</p>
            </div>
        </Link>
    )
}

export default HorarioCard