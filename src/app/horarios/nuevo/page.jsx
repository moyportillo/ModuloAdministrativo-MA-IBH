"use client"

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

function FormHorario() {
    const [newHorario, setHorario] = useState({
        dia: "",
        codigoDia: "",
        estado: ""
    })

    const router = useRouter()
    const params = useParams()

    const getHorario = async () => {
        const res = await fetch(`/api/horario/${params.id}`)
        const data = await res.json()
        setHorario({
            dia: data.dia,
            codigoDia: data.codigoDia,
            estado: data.estado
        })
    }

    const createHorario = async () => {
        try {
            const response = await fetch('/api/horario', {
                method: "POST",
                body: JSON.stringify(newHorario),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            if (response.status == 200) {
                router.push('/horarios')
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateHorario = async () => {
        const res = await fetch(`/api/horario/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(newHorario),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()

        router.push('/horarios')
        router.refresh()
    }

    const handlerDelete = async () => {
        if (window.confirm("Estas seguro que quieres eliminar este horario?")) {
            const res = await fetch(`/api/horario/${params.id}`, {
                method: "DELETE"
            })
            router.push('/horarios')
            router.refresh()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!params.id) {
            await createHorario()
        } else {
            updateHorario()
        }
    }

    const handleChange = (e) =>
        setHorario({ ...newHorario, [e.target.name]: e.target.value })

    useEffect(() => {
        if (params.id) {
            getHorario()
        }
    }, [])

    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <header className="flex justify-between">
                    <h1 className="font-bold text-3xl">{!params.id ? "Crear Nuevo Horario" : "Modificar Horario"}</h1>
                    {
                        params.id ? <button type="button" className="bg-red-500 font-bold px-4 py-2 rounded-md"
                            onClick={handlerDelete}>Eliminar</button> : <p></p>
                    }
                </header>
                <input type="text"
                    name="dia"
                    placeholder="Nombre del dia"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newHorario.dia} />
                <input type="text"
                    name="codigoDia"
                    placeholder="Codigo del Dia"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newHorario.codigoDia} />
                <select name="estado"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newHorario.estado}>
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

export default FormHorario
