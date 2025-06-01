import Main from '@/StudentComponent/Main'
import Nav from '@/StudentComponent/Nav'
import SideMain from '@/StudentComponent/SideMain'
import React from 'react'


const StudentDashboard = () => {
  return (
    <div>

      <div className='border-b border-white/20  '>
        <Nav/>
        
      </div>

      <div className='grid grid-cols-[200px_1fr] w-full    '>
        <div className='h-full w-full'>
          <SideMain/>
        </div>

        <div className=' bg-[#0A0B0F] h-[94vh]  overflow-scroll w-full'>
        <Main/>

        </div>
      </div>


        





      
    </div>
  )
}

export default StudentDashboard
