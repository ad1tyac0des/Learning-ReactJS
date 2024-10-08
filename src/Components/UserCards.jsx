import React from 'react'
import UserCard from './UserCard'

function UserCards({users, removeUser}) {
    return (
        <div className='w-full h-[50vh] p-4 flex gap-10 flex-wrap items-center justify-center overflow-auto '>
            {users.map((user, index) => (
                <UserCard removeUser={removeUser} index={index} key={index} user={user} />
            ))}
        </div>
    )
}

export default UserCards