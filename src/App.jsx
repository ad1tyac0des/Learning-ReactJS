import React, { useState } from 'react'
import UserCards from './Components/UserCards'
import CreateCard from './Components/CreateCard'

function App() {
    const [users, setUsers] = useState([]);

    const handleFormSubmitData = (data) => {
        setUsers([...users, data])
    }

    const removeUser = (id) => {
        setUsers(users.filter((user, index) => id != index))
    }

    return (
        <div className='w-full h-screen bg-zinc-300 flex items-center justify-center'>
            <div className="container mx-auto">
                <UserCards removeUser={removeUser}  users={users} />
                <CreateCard handleFormSubmitData={handleFormSubmitData} />
            </div>
        </div>
    )
}

export default App