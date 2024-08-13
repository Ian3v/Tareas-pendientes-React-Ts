
import {useEffect, useState } from 'react';
export function TodoApp ( ){

    const [nuevaTare, setNuevaTarea] = useState('')

    useEffect(()=>{
        console.log(nuevaTare);
    }, [nuevaTare])
    return(
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                
                <input
                    type="text"
                    value={nuevaTare}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />

            </div>
        </div>
    )
}