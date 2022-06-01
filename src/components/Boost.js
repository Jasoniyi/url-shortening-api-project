import React from 'react'
import Button from '../utils/Button'

const Boost = () => {
  return (
    <div className="bg-shortlyDarkViolet bg-hero-pattern bg-cover flex flex-col items-center py-5">
        <h2 className='text-white text-4xl pt-10 pb-5 text-center'>Boost your links today</h2>
        <Button
        theme='bg-shortlyCyan' 
        textColor='text-white'
        bannerBg='py-3 px-6'
        >
            Get Started
        </Button>
    </div>
  )
}

export default Boost