import React from 'react'

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white w-80 md:ml-8 px-4 mb-4">
        <div className="bg-shortlyDarkViolet w-16 h-16 rounded-full md:ml-4 ml-24 -mt-6 pb-8 flex justify-center absolute">
          <img src={image} alt='' className="relative top-3" height="12" />
        </div>
        <h3 className="font-bold text-xl pt-12 pb-4 text-center md:text-left">{title}</h3>
        <p className='text-sm text-shortlyGray pb-4 text-center md:text-left'>{description}</p>
    </div>
  )
}

export default Card