import React, { useState } from 'react'
import Card2 from './Components/Card2'

function App() {
    const data = [
        {
            name: "Linus Torvalds",
            profession: "Linux Founder",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2a8LLjkXzYOMMMUVGQES3mrBHRxb5cyHW7DNzxnt7aVRkHItR",
            friends: false
        },
        {
            name: "Tim Berners-Lee",
            profession: "W3 Founder",
            image: "https://www.w3.org/2017/04/Timbl-medium.jpg",
            friends: false
        },
        {
            name: "John McCarthy",
            profession: "AI Founder",
            image: "https://news.stanford.edu/__data/assets/image/0025/81178/Mccarthy_portrait_news.jpeg",
            friends: false
        },
        {
            name: "Ryan Dahl",
            profession: "Node JS Founder",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmG_3KFw7lgKpn7Y-dnvYIXVhrMCW7NXXLey_0m3UtOYTqACLUitRcfdgtDmH81V9N--oNk-oqWub3R4EmeRnCjQI79nj90nbRChltAgFkcq1kzL4YrwxFc41J5eLyv9bbQGjAC_GKQvxmaW8flRr9FGLJkBAt33kkHPSRr0PfvA3XfhNqLFa0jT0cnA/s1024/5163818182_a163592497_b.jpeg",
            friends: false
        }
    ]

    const [realData, setRealData] = useState(data)

    const handleFriendsButton = (index) => {
        setRealData((prev) => prev.map((item, i) => i===index ? {...item, friends: !item.friends} : item))
    }

    return (
        <div className='w-full h-screen bg-zinc-300 flex items-center justify-center gap-5'>
            {realData.map((item, index) => (
                <Card2 key={index} values={item} handleClick = {handleFriendsButton} cardIndex = {index} />
            ))}
        </div>
    )
}

export default App