import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import MusicCard from "./Components/MusicCard";

function App() {
    const data = [
        {
            image:
                "https://images.unsplash.com/photo-1727200449974-5221973023d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Sunset Landscape",
            artist: "John Smith",
            favourite: false,
        },
        {
            image:
                "https://images.unsplash.com/photo-1727718271959-26ac20c4e389?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Cityscape at Night",
            artist: "Jane Doe",
            favourite: false,
        },
        {
            image:
                "https://images.unsplash.com/photo-1727279523741-0b483e90e842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Abstract Art",
            artist: "Alice Johnson",
            favourite: false,
        },
        {
            image:
                "https://images.unsplash.com/photo-1727774477390-2c1d534a28e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Portrait of a Woman",
            artist: "Bob Williams",
            favourite: false,
        },
    ];

    const [songData, setSongData] = useState(data);

    const handleClick = (index) => setSongData((prev) => prev.map((item, i) => i === index ? {...item, favourite: !item.favourite} : item))

    return (
        <div className="w-full h-screen bg-zinc-300">
            <Navbar data={songData} />
            <div className="w-full px-20 flex gap-10 justify-between flex-wrap">
                {songData.map((item, index)=> (
                    <MusicCard key={index} values={item} handleClick={handleClick} index = {index}/>
                ))}
            </div>
        </div>
    );
}

export default App;
