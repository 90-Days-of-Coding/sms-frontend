import CGPACircle from '../CGPACircle'
import React from 'react'

export default function Grades() {
  return (
    <div className='bg-white/5 my-4 rounded-lg '>
        <div className='  py-4 mx-6 px-6 '>
            <div className='text-[1.5rem] font-extrabold'>Grades</div>


            <div className='flex justify-between py-4'>
              <div>
              <div className=''>
             <p className='text-[1.5rem] font-medium text-white/50'> GPA</p>
              </div>
              <div className=''>
                 <p className='text-[3rem] font-bold '>4.0</p>
              </div>

              </div>

           
              <div>
             
                 <CGPACircle value={4.0}/>

              </div>


     
        
            </div>
        </div>
      
    </div>
  )
}
