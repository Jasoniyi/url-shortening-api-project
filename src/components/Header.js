import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import Button from '../utils/Button'
import Menu from '../images/menu-outline.svg'
import MobileMenu from './MobileMenu'

const Header = () => {
    const [ menu, setMenu ] = useState(false)

    const openMenu = () => {
        setMenu(!menu)
    }

  return (
      <>
    <div className="flex md:flex-row justify-between md:px-32 py-4 px-4 w-full">
        <div className="flex justify-between items-center w-10/12">
            <div className="flex space-x-6">
              <div className="">
                <img src={Logo} alt='Logo' />
            </div>
            
            <div className="hidden md:block">
                <ul className="flex space-x-4 text-sm text-shortlyGrayishViolet">
                    <li className='hover:font-bold cursor-pointer hover:text-shortlyVeryDarkViolet'>Features</li>
                    <li className='hover:font-bold cursor-pointer hover:text-shortlyVeryDarkViolet'>Pricing</li>
                    <li className='hover:font-bold cursor-pointer hover:text-shortlyVeryDarkViolet'>Resources</li>
                </ul>
            </div>  
            </div>
            
            <div className='md:hidden cursor-pointer -mr-8' onClick={openMenu}>
                <img src={Menu} alt='Menu' width={42}/>
            </div>

        </div>
        <div className="md:flex hidden ">
            <Button 
            theme='hover:bg-shortlyCyan' 
            textColor='hover:text-white'>
                Login
            </Button>
            <Button 
            theme='hover:bg-shortlyCyan' 
            textColor='hover:text-white'>
                Sign Up
            </Button>
        </div>
        
    </div>
    {
            menu ? 
            <div className='absolute'>
                <MobileMenu />
            </div> 
            
             :
             null
        }
    </>
  )
}

export default Header