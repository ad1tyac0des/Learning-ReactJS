import React from 'react'

function Card() {
    const data = [
        {
            image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Amazon Basics",
            description: "Affordable, reliable everyday products covering electronics, home essentials, and accessories.",
            inStock: false
        },

        {
            image: "https://images.unsplash.com/photo-1724341039339-036842055cae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Google Pixel",
            description: "Exceptional camera, clean software, and seamless integration with Google services.",
            inStock: true
        },

        {
            image: "https://images.unsplash.com/photo-1609921205586-7e8a57516512?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Apple iPhone",
            description: "Premium design, powerful performance, and unmatched ecosystem.",
            inStock: true
        }
    ]

    const handleClick = () => alert("Added To Cart!")

    return (
        <div className="w-full min-h-screen bg-zinc-300 flex items-center justify-center flex-wrap gap-5 py-10">
            {data.map((elem, index) => (
                <div key={index} className="w-80 h-86 bg-zinc-100 rounded-md overflow-hidden">
                    <div className="w-full h-1/2">
                        <img className='w-full h-full object-cover' src={elem.image} />
                    </div>
                    <div className="w-full h-1/2 px-4 py-5">
                        <h2 className='text-xl font-semibold leading-tight'>{elem.title}</h2>
                        <p className='text-lg text-gray-600 font-normal leading-none mt-5'>{elem.description}</p>
                        <button onClick={elem.inStock ? handleClick : null} className={`px-4 py-1 ${elem.inStock ? "bg-green-500" : "bg-red-500"} text-zinc-200 text-sm mt-5 rounded`}>
                            {elem.inStock ? "In Stock" : "Out of Stock"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card