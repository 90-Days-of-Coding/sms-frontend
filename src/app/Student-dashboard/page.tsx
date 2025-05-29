import Main from '@/StudentComponent/Main'
import Nav from '@/StudentComponent/Nav'
import SideMain from '@/StudentComponent/SideMain'
import React from 'react'


const StudentDashboard = () => {
  return (
    <div>

      <div className='border-b border-white/20'>
        <Nav/>
        
      </div>

      <div>
        <div>
          <SideMain/>
        </div>

        <div>
        <Main/>

        </div>
      </div>


        





      
    </div>
  )
}

export default StudentDashboard
