import React from 'react'

const SkillCard = ({iconurl, label, description}) => {
  return (
    <div className='flex justify-start flex-col px-10 py-10 w-[350px] shadow-3xl rounded-xl hover:scale-50 cursor-pointer transition-all'>
        <div className='w-10 h-10 object-contain '>
            <img src={iconurl} alt='icon'/>
        </div>
        <h4 className='text-2xl font-semibold font-palanquin mt-7 leading-normal'>{label}</h4>
        <p className='text-lg font-montserrat text-slate-gray mt-10 leading-normal'>{description}</p>
        
    </div>
  )
}

export default SkillCard