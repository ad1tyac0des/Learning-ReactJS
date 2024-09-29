import React, { useState } from "react";

function App() {
    const [val, setVal] = useState({name: "harsh", age: 12})

    return (
        <div className="p-5">
            <h1 className="font-semibold text-lg">{val.gender}</h1>
            <button onClick={()=> setVal({...val, gender: "male"})} className="px-3 py-1 bg-sky-500 text-white rounded">Add Gender</button>
        </div>
    )
}

export default App;