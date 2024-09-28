import React, { useState } from "react";
// import Card from "./Components/Card";

function App() {
    const [score, setScore] = useState(0);
    return (
        <div className="p-10">
            <h1 className="text-xl font-semibold">Score: {score}</h1>
            <button onClick={() => setScore(score+10)} className="px-2 py-1 bg-blue-500 text-white rounded mt-5">
                Add More
            </button>
        </div>
    );
}

export default App;