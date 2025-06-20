import React from 'react'
import Notification from './Secondsector/Notification'
import Coursematerial from './Secondsector/Coursematerial'
import Quickaction from './Secondsector/Quickaction'

export default function Secondsect() {
  return (
    <div className='py-5'>

        <div className=' '>

            <Notification/>
            <Coursematerial/>
            <Quickaction/>

        </div>
      
    </div>
  )
}
