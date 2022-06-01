import React from 'react'
import Button from '../utils/Button'

const MobileMenu = () => {
  return (
    <div className="rounded-md mx-6 w-80 bg-shortlyDarkViolet relative text-2xl flex flex-col items-center px-4">
      <div className="flex flex-col text-white space-x-8 space-y-4 py-6">
        <ul className='flex flex-col space-y-6'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="border border-white w-60 my-4" />
      <ul>
        <li className='text-white'>Login</li>
      </ul>
      <div className="my-6">
       <Button 
        theme='bg-shortlyCyan py-1' 
        textColor='text-white'>
            Sign Up
        </Button> 
      </div>
      
    </div>
  )
}

export default MobileMenu