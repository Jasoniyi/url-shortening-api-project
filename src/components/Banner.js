import React from 'react'
import banner from '../images/illustration-working.svg'
import Button from '../utils/Button'

const Banner = () => {
  return (
    <div className='md:px-32 px-8 py-16 flex flex-col-reverse md:flex-row md:justify-between'>
        <div className='md:w-6/12 mt-8 flex flex-col md:items-start'>
            <h1 className='md:text-6xl text-4xl font-bold tracking-normal leading-tight text-center md:text-left'>More than just Shorter Links</h1>
            <p className='md:w-9/12 text-shortlyGrayishViolet py-3'>Build your brand's recognition and get detailed insights
                on how your your links are preforming.
            </p>
            <Button bannerBg='bg-shortlyCyan py-2 text-white my-4 md:px-6'>Get Started</Button>
        </div>
        <div className=''>
            <img src={banner} alt='' className='md:h-80' />
        </div>
    </div>
  )
}

export default Banner