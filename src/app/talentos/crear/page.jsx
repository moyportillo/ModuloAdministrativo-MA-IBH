"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

function FormTalento() {

    const [newTalento, setTalento] = useState({
        nombreTalento: "",
        codigoTalento: "",
        descripcion: "",
        estadoTalento: ""
    })

    const router = useRouter()
    const params = useParams()

    const getTalento = async () => {
        const res = await fetch(`/api/talentos/${params.id}`)
        const data = await res.json()
        setTalento({
            nombreTalento: data.nombreTalento,
            codigoTalento: data.codigoTalento,
            descripcion: data.descripcion,
            estadoTalento: data.estadoTalento
        })
    }

    const createTalento = async () => {
        try {
            const response = await fetch('/api/talentos', {
                method: "POST",
                body: JSON.stringify(newTalento),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            if (response.status == 200) {
                router.push('/talentos')
                router.refresh()
            }

        } catch (error) {

        }
    }

    const updateTalento = async () => {
        const res = await fetch(`/api/talentos/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(newTalento),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()

        router.push('/talentos')
        router.refresh()
    }

    const handlerDelete = async () => {
        if (window.confirm("Estas seguro que quieres eliminar este tipo de talento?")) {
            const res = await fetch(`/api/talentos/${params.id}`, {
                method: "DELETE"
            })
            router.push('/talentos')
            router.refresh()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!params.id) {
            await createTalento()
        } else {
            updateTalento()
        }

    }

    const handleChange = (e) =>
        setTalento({ ...newTalento, [e.target.name]: e.target.value })

    useEffect(() => {
        if (params.id) {
            getTalento()
        }
    }, [])

    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <header className="flex justify-between">
                    <h1 className="font-bold text-3xl">{!params.id ? "Crear Tipo Talento" : "Modificar Tipo Talento"}</h1>
                    <button type="button" className="bg-red-500 font-bold px-4 py-2 rounded-md"
                        onClick={handlerDelete}>Eliminar</button>
                </header>
                <input type="text"
                    name="nombreTalento"
                    placeholder="Nombre del Talento"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newTalento.nombreTalento} />
                <input type="text"
                    name="codigoTalento"
                    placeholder="Codigo del Talento"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newTalento.codigoTalento} />
                <textarea name="descripcion"
                    placeholder="Descripcion del talento"
                    rows={3}
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newTalento.descripcion}></textarea>
                <select name="estadoTalento"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newTalento.estadoTalento}>
                    <option value="ACT">Activo</option>
                    <option value="INA">Inactivo</option>
                </select>
                {
                    !params.id ?
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg">Guardar</button> :
                        <button type="update" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg ">Modificar</button>
                }
            </form>
        </div >
    )
}

export default FormTalento