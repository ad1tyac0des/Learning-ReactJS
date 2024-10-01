import React, { useState } from "react";

function App() {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
    return (
        <div className="p-10">
            <button onClick={()=> setVal(val.filter(elem => elem%2 !== 0))} className="px-3 py-1 bg-blue-500 rounded mb-5 text-white font-semibold">
                Remove
            </button>
            {val.map((elem, index) => (
                <h1 key={index}>{elem}</h1>
            ))}
        </div>
    );
}

export default App;
