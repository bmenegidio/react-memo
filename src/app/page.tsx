'use client';

import { ChangeEvent, useState } from "react";
import List, { technologiesProps } from "@/app/List";

function App() {
    const [technologies, setTechnologies] = useState<technologiesProps[]>([]);
    const [techName, setTechName] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTechName(event.target.value);
    }

    function addTech() {
        setTechnologies(currentTechs => [
            ...currentTechs,
            { name: techName }
        ])
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="h-11">
                <div className="mb-5">
                    <div className="flex items-center justify-between gap-2">
                        <input type="text"
                               placeholder="Adicione uma tecnologia"
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               onChange={handleChange}
                               value={techName}
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={addTech}
                        >
                            Adicionar
                        </button>
                    </div>
                </div>

                <List technologies={technologies} />
            </div>
        </div>
    )
}

export default App;
