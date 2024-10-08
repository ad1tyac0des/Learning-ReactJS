import React from 'react'
import { useForm } from 'react-hook-form'

function CreateCard({handleFormSubmitData}) {
    const {register, handleSubmit, reset} = useForm()

    const handleFormSubmit = data => {
        handleFormSubmitData(data);
        reset();
    }

    return (
        <div className='w-full mt-10'>
            <form className='flex justify-center gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register('name')} className='outline-none px-2 py-1 rounded text-base' type="text" placeholder='Name'/>
                <input {...register('email')} className='outline-none px-2 py-1 rounded text-base' type="email" placeholder='Email'/>
                <input {...register('image')} className='outline-none px-2 py-1 rounded text-base' type="text" placeholder='Image URL'/>
                <input className=' px-5 py-1 rounded bg-blue-500 text-sm font-semibold text-white cursor-pointer' type="submit" value="Add Card" />
            </form> 
        </div>
    )
}

export default CreateCard