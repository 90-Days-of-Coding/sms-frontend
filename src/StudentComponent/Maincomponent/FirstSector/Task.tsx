import React from 'react'

type typedata ={
    id:number ,
    des:string,
    details? :string
}


export default function Task() {

   let datas:typedata[] = [
        {id:1, des:'Mathematic',details:'solve the eqn'},
        {id:2, des:'Mathematic',details:'solve the eqn'}
    ]



  return (
    <div className='bg-white/10 px-6 py-2 rounded-lg '>

        <div>
            <div className='text-[1.5rem] font-extrabold py-2 '>
                Tasks ({datas.length})
            </div>

            <div>
                 {datas.length !== 0 ?
                 <div>
                    {datas.map(data=>

                           
      <div key={data.id} className=' bg-white/10 h-fit rounded-lg px-4 py-4 my-2'>
                

                
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

                    
                  
                  
                  
                  
                  
                  
                )}

                 </div>

                
                  :
                        <div>
                            <p>no tasks available</p>

                        </div>
            }




            </div>

        </div>
      
    </div>
  )
}
 