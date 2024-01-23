import Link from "next/link";

function TalentoCard({ talento }) {
    return (
        <Link href={`/talentos/${talento._id}`}>
            <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
                <h3 className="text-2xl font-bold">{talento.nombreTalento}</h3>
                <p className="text-slate-300">Codigo: {talento.codigoTalento}</p>
                <p className="text-slate-400 my-2">Descripcion: {talento.descripcion}</p>
                <p className="mr-1">Estado: {talento.estadoTalento}</p>
            </div>
        </Link>
    )
}

export default TalentoCard;