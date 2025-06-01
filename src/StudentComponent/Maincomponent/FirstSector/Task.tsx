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
                    
                   
                   
                    <div key={data.id} className='font-bold '>
                       




                       
                        <div className='flex justify-between items-center'>
                        <div className='flex items-center  gap-2 '>

                

                        <div className='size-2 bg-blue-600 rounded-4xl flex items-start'>
                            
                        </div>

                        <div className='text-2xl py-2'>
                        {data.des}
                         <div className='text-xs'>{data.details}</div>

                        </div>
                        </div>

                        <div>
                            <input type="radio" name="" id="" />
                        </div>


                        </div>
                     



                       

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
 