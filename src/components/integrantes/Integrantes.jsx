import Link from "next/link";

function IntegranteCard({ integrante }) {
    return (
        <Link href={`/integrantes/${integrante._id}`}>
            <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700">
                <h3 className="text-2xl font-bold">{integrante.primerNombre} {integrante.primerApellido}</h3>
                <p className="text-slate-300">Nacimiento: {integrante.fechaNacimiento}</p>
                <p className="text-slate-400 my-2">Celular: {integrante.celular}</p>
                <p className="text-slate-400 my-2">Email: {integrante.correoElectronico}</p>
                <p className="mr-1">Estado: {integrante.estadoServicio}</p>
            </div>
        </Link>
    )
}

export default IntegranteCard;