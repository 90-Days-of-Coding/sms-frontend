import React from 'react'

type typedata ={
    id:number ,
    des:string,
    details? :string
}


export default function Coursematerial() {

    
    let datas:typedata[] = [
        {id:1, des:'Mathematic',details:'solve the eqn'},
        {id:2, des:'Mathematic',details:'solve the eqn'}
    ]







return (
    <div className='py-4 px-6'>

        <div>
           <p className='text-[1.5rem] font-extrabold py-2'> Course Materials</p> 
        </div>

        
        <div className=' bg-white/10 h-fit rounded-lg px-4 py-4 my-2'>
                

                
                <div className='flex gap-2 items-center justify-between  '>
                <div className='flex gap-2 items-center'>
                <p className='size-2 bg-blue-700 rounded-3xl'></p>
                <p className='font-bold'>Review lecture notes</p>

                </div>
                  <div>
                    <p>15</p>
                </div>
                </div>
                <p className='text-white/20'>Lecture Netespall</p>

                

              

        </div>

         
      <div className=' bg-white/10 h-fit rounded-lg px-4 py-4 my-2'>
                

                
                <div className='flex gap-2 items-center justify-between  '>
                <div className='flex gap-2 items-center'>
                <p className='size-2 bg-blue-700 rounded-3xl'></p>
                <p className='font-bold'>Review lecture notes</p>

                </div>
                  <div>
                    <p>15</p>
                </div>
                </div>
                <p className='text-white/20'>Lecture Netespall</p>

                

              

        </div>

      
    </div>
  )
}
