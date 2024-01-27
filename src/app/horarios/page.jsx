import { connectDB } from "@/utils/mongodb";
import Horario from "@/models/horario/Horario";
import HorarioCard from "@/components/horario/HorarioCard";

async function cargarHorario(){
    connectDB()
    const dataHorarios = await Horario.find()
    return dataHorarios
}

async function getHorarios(){
    const horarios = await cargarHorario()
    return(
        <div className="grid grid-cols-3 gap-2">
            {horarios.map(horario =>(
                <HorarioCard horario={horario} key={horario._id}/>
            ))}
        </div>
    )
}

export default getHorarios