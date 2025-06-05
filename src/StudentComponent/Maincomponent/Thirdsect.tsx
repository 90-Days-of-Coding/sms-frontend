import React from 'react'
import Messages from './Thirdsector/Messages'
import Grades from './Thirdsector/Grades'
import Marketplace from './Thirdsector/Marketplace'


export default function Thirdsect() {
  return (
    <div className='py-5'>

        <div>
            <Messages/>
            <Grades/>
            <Marketplace/>
            
        </div>
      
    </div>
  )
}
