import React from 'react'

type form = {
    id:number,
    time:string,
    des:string,
    live? :string
}

export default function LiveSec() {

    let datas:form[]= [

        {id:1,time:"3:00" ,des:'Maths',live:'LIVE'},
        {id:2,time:"3:45" ,des:'Eng'}
    ]




  return (
    <div className='bg-[#0A0B0D] relative border border-white/10  rounded-lg'>

         <div className='relative flex justify-start pl-5 text-[1.5rem] left-2 top-2 font-extrabold h-0 z-20'>Live class schedule</div>

       

        {datas.map((data,index) =>
<div key={data.id} className='    grid grid-cols-[80px_1fr] w-full z-0 '>


            



            
           

            <div className={`flex justify-center  items-center   bg-white/10 relative z-0 ${ index==0 ? 'pt-7 rounded-t-lg':''} ${ index == datas.length-1 ? 'rounded-b-lg':''}`} >
            
                <div className='text-sm text-white/50 ' >
                    {data.time} 
                </div>
            

            </div>

            <div className={` ${ index==0 ? 'pt-8':''}`}>
                <div className=' text-xl rounded-lg   bg-white/10 mx-3 my-4 px-2 py-2'>
                    <p>{data.des}</p>
                    {data.live &&    <p className='bg-red-700 px-3 py-0.5 text-xs h-fit w-fit my-1 rounded-lg'>{data.live}</p>}
              
                 
                </div>
            </div>


        </div>








)}


      


















      

      
    </div>
  )
}
