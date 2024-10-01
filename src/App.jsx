import React, { useState } from "react";

function App() {
    const [val, setVal] = useState([
        { name: "Aditya", age: 19 },
        { name: "Harsh", age: 34 },
        { name: "Rohan", age: 30 },
    ]);
    return (
        <div className="p-10">
            <button
                onClick={() =>
                    setVal(
                        val.map((elem) =>
                            elem.name == "Harsh" ? { name: "Harsh", age: 25 } : elem
                        )
                    )
                }
                className="px-3 py-1 bg-blue-500 rounded mb-5 text-white font-semibold"
            >
                Add
            </button>

            {val.map((elem, index) => (
                <div key={index}>
                    <h1>{elem.name}</h1>
                    <h1>{elem.age}</h1>
                </div>
            ))}
        </div>
    );
}

export default App;
