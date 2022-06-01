import React, { useState, useEffect } from 'react'
import Card from '../utils/Card'
import brand from '../images/icon-brand-recognition.svg'
import records from '../images/icon-detailed-records.svg'
import customize from '../images/icon-fully-customizable.svg'
import axios from 'axios'
import CardList from '../utils/CardList'

const About = () => {
    const [getValue, setGetValue ] = useState('')
    const [urlsHistory, setUrlsHistory] = useState([])
    const [datas, setData ] = useState('')

    const getInput = (e) => {
        const values = e.target.value
        setGetValue(values)
}

   

    // get data from api
        const getShortCode = async () => {
          try {
            const data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${getValue}`)
            const result = data.data.result
            console.log('were', result)
            setData(result)
            console.log('data', datas)
          } catch (err) {
            return err.message
          }
        }
       
    

    //   set local storage
    useEffect(() => {
      let recentLinks = JSON.stringify(urlsHistory)
      localStorage.setItem('urlHistory', recentLinks)
    }, [urlsHistory])


    

    const handleSubmit = (e) => {
            e.preventDefault()
            getShortCode()
            setGetValue('')
        }

    useEffect(() => {
        if (datas) {
            let { original_link, full_short_link } = datas
            let shortenedLink = {
                original_link,
                full_short_link
                };
                setUrlsHistory([ shortenedLink, ...urlsHistory ])
        }
    }, [datas])
    


  return (
    <div className='bg-shortlyGray py-12'>
        <div className='w-9/12 md:h-24 h-36 bg-shortlyDarkViolet mx-auto rounded-md bg-hero-pattern flex justify-center md:first-letter md:-mt-20'>
            <form className='m-auto flex flex-col md:flex-row items-center' onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='Shorten a link here...'
                className='md:w-128 w-64 h-11 rounded-md px-2 md:my-0 my-3'
                value={getValue}
                onChange={getInput}
                />
                <button className='bg-shortlyCyan md:ml-6 md:px-4 text-white rounded-md h-11 md:w-44 w-64'>Shorten it!</button>
            </form>
        </div>

        {
            urlsHistory.length > 0 && 
                urlsHistory.map((url, i) => (
                    <div className='w-9/12 my-4 bg-white mx-auto rounded-md'>
                       <CardList key={i} 
                         originalLink={url.original_link}
                         shortenedLink = {url.full_short_link} /> 
                    </div>
                ))
           
        }
                
        <div className='flex flex-col items-center '>
            <div className='flex flex-col justify-center pt-8 items-center my-8'>
                <h2 className='md:text-4xl text-3xl font-bold text-shortlyVeryDarkViolet py-4'>Advanced Statistics</h2>
                <p className='md:w-3/5 text-shortlyVeryDarkBlue text-center py-4 px-8 md:px-0'>Track how your links are performing across the web with our advanced
                    statistics dashboard.
                </p>
            </div>

            <div className='md:px-32 flex flex-col md:flex-row flex-wrap'>

            <div className=''>
            <Card 
            image={brand}
            title='Brand Recognition'
            description='Boost your brand recognition with each click.
            Generic links do not mean a thing. Branded links help instil
            confidence in your content.'
            />
            </div>

            <div className='pt-8'>
            <Card
            image={records}
            title='Detailed Records'
            description='Gain insights into who is clicking your links.
            Knowing when and where people engage with your content helps
            inform better decisions'
            />
            </div>

            <div className='md:pt-16 pt-8'>
            <Card 
            image={customize}
            title='Fully Customizable'
            description='Improve brand awareness and content
            discoverability through  customizable links, supercharging
            audience engagement.'
            />
            </div>

            </div>
        </div>
    </div>
  )
} 

export default About