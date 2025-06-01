import React from 'react'
import LiveSec from './FirstSector/LiveSec'
import Ongoing from './FirstSector/Ongoing'
import Task from './FirstSector/Task'
import Comment from './FirstSector/Comment'

export default function Firstsect() {
  return (
    <div>

        <div className='py-5 '>
          <LiveSec/>
          <Ongoing/>
          <Task/>
          <Comment/>

            

        </div>
      
    </div>
  )
}
