import React from 'react'
type typedata ={
    id:number ,
    des:string,
    details? :string
}


export default function Notification() {

    let datas:typedata[] = [
        {id:1, des:'Mathematic',details:'solve the eqn'},
        {id:2, des:'Mathematic',details:'solve the eqn'}
    ]










  return (
    <div>

        <div className='bg-white/5 px-6 py-2.5 rounded-lg '>
            <div >
                <p  className='text-[1.5rem] font-extrabold '>Notifications</p>
            </div>

            <div className='text-xl font-bold'>
                New version
            </div>



            


            <div className='bg-white/10 h-17 py-2 my-2 rounded-lg  px-4'>
            <div className='flex gap-1 items-center '>
                <p className='size-2.5 flex justify-center items-center bg-blue-700 rounded-3xl'></p>
                <p className='text-[1.2rem] font-extrabold'>Read Chapter 4</p>

            </div>
            <div className='flex gap-1 justify-between items-center px-0.5'>
                <div className='flex gap-2 items-center'>
                <p className='size-2 flex justify-center items-center bg-white/10 border rounded-3xl border-white/50'></p>
                <p  className='text-white/20  '>Save equaiens</p>

                </div>

                <div>
                    /
                </div>



            </div>

            </div>

            <div className='flex gap-1 items-center bg-white/10 h-13 rounded-lg px-4 '>
                <p className='size-2 bg-blue-700 rounded-3xl '></p>
                <p>Review lecture notes</p>

            </div>


        </div>
      
    </div>
  )
}
