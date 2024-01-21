import { connectDB } from "@/utils/mongodb"
import Talento from "@/models/talento/Talento"
import TalentoCard from "@/components/Talento/TalentoCard"

async function loadTalento(){
  connectDB()
  const dataTalentos = await Talento.find()
  return dataTalentos
}

async function getTalentos(){
  const talentos = await loadTalento() 
  return(
    <div className="grid grid-cols-3 gap-2">
      {talentos.map(talento =>(
        <TalentoCard talento={talento} key ={talento._id}/>
      ))}
    </div>
  )
}

export default getTalentos