import React, { useState } from "react";

function App() {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
    return (
        <div className="p-10">
            <button
                onClick={() =>
                    setVal(val.filter((item, index) => index !== val.length - 1))
                }
                className="px-3 py-1 bg-blue-500 rounded mb-5 text-white font-semibold"
            >
                Remove Last Element
            </button>
            {val.map((elem, index) => (
                <h1 className="font-semibold" key={index}>
                    {elem}
                </h1>
            ))}
        </div>
    );
}

export default App;
