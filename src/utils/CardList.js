import React, { useState } from 'react'




const CardList = ({ originalLink, shortenedLink }) => {
  const [click, setClick ] = useState(false)

  const handleBtnClick = (e) => {
    navigator.clipboard.writeText(shortenedLink, e);
    setClick(!click)
  }

  return (
    <div className="flex md:flex-row flex-col justify-between p-2 items-center text-xl md:text-base space-y-3 md:space-y-0">
        <div>{originalLink}</div>
        <div className="md:hidden border-2 border-shortlyGray w-full" />
        <div className="flex md:flex-row flex-col justify-between space-x-4 text-shortlyCyan space-y-4 md:space-y-0">
            <div>{shortenedLink}</div>
            {
              !click ? 
              <button 
                onClick={handleBtnClick}
                className="bg-shortlyCyan py-1 px-4 rounded-md hover:bg-shortlyVeryDarkBlue text-white">
                  Copy
              </button>
              :
              <button
              className='bg-shortlyVeryDarkBlue text-white py-1 px-4 rounded-md'
              >
                Copied!!
              </button>
            } 
        </div>
    </div>
  )
}

export default CardList