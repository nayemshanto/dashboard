import React from 'react'

const ComponentHeader = ({title, des}) => {
  return (
    <div className='mb-2'>
        {title && <h1 className='text-[17px] md:text-[22px] md:font-bold text-white/80 text-semi-bold'>{title}</h1>}
        {des && <p className='text-[13px] md:text-[15px] text-semi-bold mt-1 text-grayText'>{des}</p>}
    </div>
  )
}

export default ComponentHeader