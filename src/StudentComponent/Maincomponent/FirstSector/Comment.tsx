import React from 'react'

type typedata ={
    id:number ,
    des:string,
    details? :string
}


export default function Comment() {
     let datas:typedata[] = [
        {id:1, des:'Mathematic',details:'solve the eqn'},
        {id:2, des:'Mathematic',details:'solve the eqn'}
    ]



  return (
    <div>

        <div className='bg-white/10 my-4 rounded-lg'>

            <div className='text-[1.5rem] font-extrabold pl-6'>
                Class Comments
            </div>


            <div>
                {datas.map(data=>

                <div key={data.id} className='px-6 '>

                    <div className='flex gap-3 py-2'>
                    <div>
                        <img src="/images/githubProfile.jpg" alt="images" className='size-7 rounded-3xl object-cover'/>
                        
                    </div>

                    <div>
                    <div className='bg-white/5 flex px-2 py-2  h-12 rounded-lg'>
                        <p>i want help with my chemistry assignment ?</p>
                    </div>

                    <p className='text-xs text-white/5 '>3 min ago</p>

                    </div>


                    </div>


                    <div className='mx-3 '>
                    <div className='bg-white/5 px-2 py-2  h-12  rounded-lg'>
                        <p>replied: sure , i will love to help </p>
                    </div>

                        <p className='text-white/5 text-xs '>1 min ago</p>
                    </div>



                </div>


                )}
            </div>



        </div>
      
    </div>
  )
}
