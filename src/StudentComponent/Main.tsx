import React from 'react'
import Mainhead from './Maincomponent/Mainhead'
import Firstsect from './Maincomponent/Firstsect'
import Secondsect from './Maincomponent/Secondsect'
import Thirdsect from './Maincomponent/Thirdsect'

const Main = () => {
  return (
    <div className='px-4 py-2'>

      <div>
      <div className='text-3xl font-bold '>
        <Mainhead/>
      </div>

      <div>
      <div className='grid grid-cols-[1fr_300px_1fr] gap-4'>
        <Firstsect/>
        <Secondsect/>
        <Thirdsect/>
        


      </div>


      </div>







      </div>


      

      

        
      
    </div>
  )
}

export default Main
