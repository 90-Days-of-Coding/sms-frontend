import React from 'react'

type typedata ={
    id:number ,
    des:string,
    live? :string
}

export default function Ongoing() {

    let datas:typedata[] = [
        {id:1, des:'Mathematic',live:'live'}
    ]




  return (
    <div className='bg-white/10 my-4 py-4 px-6 rounded-lg'>

        <div>
            <p className='text-[1.5rem] font-extrabold'>Ongoing  Class</p>
        </div>

        <div>

            {datas.map(data =>

            <div key={data.id} className='flex justify-between items-center rounded-lg bg-white/10 px-4 py-3 my-2'>
                <div>

                
                <p className='font-bold'>{data.des}</p>

                {data.live &&

                <div className='flex items-center gap-1 text-red-700'>
                    <p className='size-1.5 bg-red-700 rounded-4xl'></p>
                     <p >{data.live}</p>

                </div>

                
                }
                </div>

                {data.live && 
                 <div >

                     <p className='bg-red-700 rounded-3xl py-0.5 px-2 font-bold '>Join Now</p>

                </div>
                
                }
               

            </div>



            )}

        </div>
      
    </div>
  )
}
