import Link from "next/link";

function TalentoCard({ talento }) {
    return (
        <Link href={`/talentos/${talento._id}`}>
            <div className="bg-gray-800 p-10 text-white rounded-md hover:bg-gray-700">
                <h3>{talento.nombreTalento} - Codigo: {talento.codigoTalento}</h3>
                <p>Descripcion: {talento.descripcion}</p>
                <h4>Estado: {talento.estadoTalento}</h4>
            </div>
        </Link>
    )
}

export default TalentoCard;