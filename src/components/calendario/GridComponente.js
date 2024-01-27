"use client"

import React, {useState} from "react";

const GridComponent = () => {
    const [items, setItems] = useState([])

    const agregarItem = () => {
        const nuevoItem = {id: items.length, contenido: `Item ${items.length}`}
        setItems([...items, nuevoItem])
    }

    return(
        <div className="container mx-auto px-5 mt-4">
            <button type="submit" className="bg-blue-300 hover:bg-blue-500 text-white font-bold px-4 py-2 m-5 rounded-lg" onClick={agregarItem}>Agregar</button>
            <div className="grid grid-cols-4 gap-3 mt-1 mb-6">
                {items.map((item) => (
                    <div key={item.id} className="bg-blue-600 text-white rounded-md hover:cursor-pointer hover:bg-blue-700 p-10">
                        {item.contenido}
                    </div>
                ))}
            </div>
        </div> 
    )
}

export default GridComponent