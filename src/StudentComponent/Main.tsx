import React from 'react'
import Mainhead from './Maincomponent/Mainhead'
import Firstsect from './Maincomponent/Firstsect'

const Main = () => {
  return (
    <div className='px-4 py-2'>

      <div>
      <div className='text-3xl font-bold '>
        <Mainhead/>
      </div>

      <div>
      <div className='grid grid-cols-3 gap-4'>
        <Firstsect/>
        <Firstsect/>
        <Firstsect/>

      </div>


      </div>







      </div>


      

      

        
      
    </div>
  )
}

export default Main
