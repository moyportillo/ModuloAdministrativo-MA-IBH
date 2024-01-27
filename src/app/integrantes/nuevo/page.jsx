"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

function FormIntegrante() {

    const [newIntegrante, setIntegrante] = useState({
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        fechaNacimiento: "",
        celular: "",
        correoElectronico: "",
        genero: "",
        direccion: "",
        estadoServicio: ""
    })

    const router = useRouter()
    const params = useParams()

    const getIntegrante = async () => {
        const res = await fetch(`/api/integrantes/${params.id}`)
        const data = await res.json()
        setIntegrante({
            primerNombre: data.primerNombre,
            segundoNombre: data.segundoNombre,
            primerApellido: data.primerApellido,
            segundoApellido: data.segundoApellido,
            fechaNacimiento: data.fechaNacimiento,
            celular: data.celular,
            correoElectronico: data.correoElectronico,
            genero: data.genero,
            direccion: data.direccion,
            estadoServicio: data.estadoServicio
        })
    }

    const createIntegrante = async () => {
        try {
            const response = await fetch('/api/integrantes', {
                method: "POST",
                body: JSON.stringify(newIntegrante),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            if (response.status == 200) {
                router.push('/integrantes')
                router.refresh()
            }

        } catch (error) {

        }
    }

    const updateIntegrantes = async () => {
        const res = await fetch(`/api/integrantes/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(newIntegrante),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()

        router.push('/integrantes')
        router.refresh()
    }

    const handlerDelete = async () => {
        if (window.confirm("Estas seguro que quieres eliminar este Integrante?")) {
            const res = await fetch(`/api/integrantes/${params.id}`, {
                method: "DELETE"
            })
            router.push('/integrantes')
            router.refresh()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!params.id) {
            await createIntegrante()
        } else {
            updateIntegrantes()
        }

    }

    const handleChange = (e) =>
        setIntegrante({ ...newIntegrante, [e.target.name]: e.target.value })

    useEffect(() => {
        if (params.id) {
            getIntegrante()
        }
    }, [])

    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <header className="flex justify-between">
                    <h1 className="font-bold text-3xl">{!params.id ? "Crear Integrante" : "Modificar Integrante"}</h1>
                    {
                        params.id ? <button type="button" className="bg-red-500 font-bold px-4 py-2 rounded-md"
                            onClick={handlerDelete}>Eliminar</button> : <p></p>
                    }
                </header>
                <input type="text"
                    name="primerNombre"
                    placeholder="Primer Nombre"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newIntegrante.primerNombre} />
                <input type="text"
                    name="segundoNombre"
                    placeholder="Segundo Nombre"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newIntegrante.segundoNombre} />
                <input type="text"
                    name="primerApellido"
                    placeholder="Primer Apellido"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newIntegrante.primerApellido} />
                <input type="text"
                    name="segundoApellido"
                    placeholder="Segundo Apellido"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newIntegrante.segundoApellido} />
                <select name="estadoServicio"
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                    onChange={handleChange}
                    value={newIntegrante.estadoServicio}>
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

export default FormIntegrante