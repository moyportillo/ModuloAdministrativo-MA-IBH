import { connectDB } from "@/utils/mongodb"
import Integrantes from "@/models/integrantes/Integrantes"
import IntegranteCard from "@/components/integrantes/Integrantes"

async function loadIntegrante(){
  connectDB()
  const dataIntegrantes = await Integrantes.find()
  return dataIntegrantes
}

async function getIntegrantes(){
  const integrantes = await loadIntegrante() 
  return(
    <div className="grid grid-cols-3 gap-2">
      {integrantes.map(integrante =>(
        <IntegranteCard integrante={integrante} key ={integrante._id}/>
      ))}
    </div>
  )
}

export default getIntegrantes