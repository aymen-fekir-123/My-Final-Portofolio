import React from 'react'

function CardProject({imgurl, star, rating, name, href}) {
  return (
    <a href={href} className='h-full w-full hover:scale-110 hover:text-coral-red transition-all cursor-pointer' target='_blank'>
      <div className='flex flex-col items-start'>
        <div className='rounded-xl flex justify-center items-center w-full h-[150px]'>
            <img src={imgurl} alt='photo' className='w-full h-full rounded-xl'/>
        </div>
        <div className='flex  mt-5 justify-center w-full gap-5'>
            <img src={star} alt='star' width={25} height={25}/>
            <span className='text-lg text-slate-gray font-montserrat'>({rating})</span>
        </div>
        <h3 className='font-planquin text-xl font-semibold mt-5 w-full text-center'>{name}</h3>
       
    </div>
  
    </a>
  )
    
}

export default CardProject