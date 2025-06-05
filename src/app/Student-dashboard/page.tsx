import Main from '@/StudentComponent/Main'
import Nav from '@/StudentComponent/Nav'
import SideMain from '@/StudentComponent/SideMain'
import React from 'react'


const StudentDashboard = () => {
  return (
    <div>

      <div className='border-b border-white/20 mx-3 '>
        <Nav/>
        
      </div>

      <div className='grid md:grid-cols-[280px_1fr] w-full     '>
        <div className=' hidden md:block'>
        <div className='h-full w-full flex justify-center'>
          <SideMain/>
        </div>

        </div>

        <div className=' bg-[#0A0B0F] md:h-[94vh]  md:overflow-hidden w-full'>
        <Main/>

        </div>
      </div>


        





      
    </div>
  )
}

export default StudentDashboard
