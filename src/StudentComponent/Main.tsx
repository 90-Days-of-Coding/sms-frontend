import React from 'react'
import Mainhead from './Maincomponent/Mainhead'
import Firstsect from './Maincomponent/Firstsect'
import Secondsect from './Maincomponent/Secondsect'
import Thirdsect from './Maincomponent/Thirdsect'

const Main = () => {
  return (
    <div className='px-4 py-2'>

      <div>
      <div className='md:text-3xl text-2xl font-extrabold border py-2 rounded-lg border-white/10 mx-9 '>
        <Mainhead/>
      </div>

      <div>
        
        {/* this one is to hide the scroll bar  */}
      {/* <div className='grid grid-cols-[1fr_300px_1fr] gap-4 h-[94vh]  overflow-scroll hide-scrollbar '> */} 

      {/* this one is to unhide it so remove anyone you want  */}
      <div className='grid md:grid-cols-[1fr_300px_1fr]  gap-4 md:h-[94vh]  md:overflow-scroll '>
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
