import React from 'react'

export default function Quickaction() {
  return (
    <div className='bg-white/5 rounded-lg'>

        <div className='  py-4 mx-6'>
        
            <div className=''>
                <p className='text-[1.5rem] font-extrabold'>Quick Actions</p>
            </div>

            <div className='flex font-extrabold text-2xl gap-2.5 items-center h-13 bg-white/10 my-4 rounded-lg px-4 '>
                <p className='   size-5 scale-100 border flex justify-center items-center'>+</p>
                <p >Create New Assignment</p>
            </div>
             <div className='flex font-extrabold text-2xl gap-2.5 items-center h-13 bg-white/10 my-4 rounded-lg px-4'>
                <p className='  size-5 scale-100 border flex justify-center items-center'>+</p>
                <p>Create Study Group</p>
            </div>
              <div className='flex font-extrabold text-2xl gap-2.5 items-center h-13 bg-white/10 my-4 rounded-lg px-4'>
                <p className='  size-5 scale-100 border flex justify-center items-center'>+</p>
                <p>Create New Post</p>
            </div>

            
        </div>
      
    </div>
  )
}
