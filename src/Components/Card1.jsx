import React from "react";

function Card1() {
    const models = [
        {
            img: "src/assets/img1.jpg",
            name: "Sophia Blake",
            desc: "An emerging fashion model known for her elegant runway presence.",
            isOnline: true,
        },
        {
            img: "src/assets/img2.jpg",
            name: "Luna Valdez",
            desc: "A dynamic model with a unique sense of style and versatility.",
            isOnline: true,
        },
        {
            img: "src/assets/img3.jpg",
            name: "Maya Thompson",
            desc: "A popular face in editorial shoots with striking beauty and poise.",
            isOnline: false,
        },
    ];

    return (
        <div className="w-full h-screen bg-zinc-400 flex items-center justify-center gap-10 flex-wrap">
            {models.map((model, index) => (
                <div
                    key={index}
                    className="card w-72 h-96 bg-zinc-200 rounded overflow-hidden border-2 border-zinc-200"
                >
                    <div className="w-full h-3/5">
                        <img
                            className="w-full h-full object-cover object-top"
                            src={model.img}
                        />
                    </div>
                    <div className="w-full h-2/5 px-4 py-2">
                        <h1 className="font-bold text-xl">{model.name}</h1>
                        <p className="text-lg leading-tight mt-1">{model.desc}</p>
                        <button
                            onClick={model.isOnline ? () => alert("Online") : () => alert("Offline")}
                            className={`px-3 py-1 ${model.isOnline ? "bg-green-500" : "bg-red-500"
                                } rounded-full text-sm text-zinc-100 font-semibold mt-2 flex items-center gap-1`}
                        >
                            <span className="inline-block w-2 h-2 bg-white rounded-full"></span>{model.isOnline ? "Online" : "Offline"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card1;
