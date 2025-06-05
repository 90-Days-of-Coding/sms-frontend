import React from 'react'

export default function Messages() {
  return (
    <div className='bg-white/5 rounded-lg border-t border-white/10'>

        <div className='mx-6 py-4 '  >
            <div className='flex justify-between items-center'>
                <div>
                   <p className='text-[1.5rem] font-extrabold'>Messages</p> 
                </div>

                <div>
                    2
                </div>
            </div>




            <div className='py-2'>
                  <div className=' bg-white/10 h-fit rounded-lg px-4 py-4 my-2'>
                

                
                <div className='flex gap-2 items-center justify-between  '>
                <div className='flex gap-2 items-center'>
                <p className='size-2 bg-blue-700 rounded-3xl'></p>
                <p className='text-[1.2rem] font-bold'>Review lecture notes</p>

                </div>
                  <div>
                    <p>/</p>
                </div>
                </div>
                <p className='text-white/20'>Lecture Netespall</p>

                

              

        </div>

                    <div className='bg-white/10 h-17 py-2 my-2 rounded-lg  px-4'>
            <div className='flex gap-1 items-center '>
                <p className='size-2.5 flex justify-center items-center bg-blue-700 rounded-3xl'></p>
                <p className='text-[1.2rem] font-extrabold'>Lab Report</p>

            </div>
            <div className='flex gap-1 justify-between items-center px-0.5'>
                <div className='flex gap-2 items-center'>
                <p className='size-2 flex justify-center items-center bg-white/10 border rounded-3xl border-white/50'></p>
                <p  className='text-white/20  '>Due Apr 29</p>

                </div>

                <div>
                    /
                </div>



            </div>

            </div>

            </div>

          

        </div>
      
    </div>
  )
}
