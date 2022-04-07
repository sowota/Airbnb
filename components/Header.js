import Image from 'next/image'
import {GlobeAltIcon, MenuAlt2Icon, SearchIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'

import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import Searchbar from './Searchbar';
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react'
import { BrandWindows } from 'tabler-icons-react'


export default function Header({placeholder, numOfGuests}) {

  const router = useRouter()
  
  const [headerColor, setHeaderColor] = useState(false)
  
  useEffect(() =>{
    const changeColor = () =>{
      if(window.scrollY >= 150){
        setHeaderColor(true)
      }else{
        setHeaderColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)

  })

 
  return (
      <header className={`fixed top-0 z-50 w-screen sm:grid grid-cols-3  p-3 ${headerColor? 'bg-white': 'bg-black'} sm:px-10`}>
          <div 
            className='hidden sm:relative sm:flex items-center h-10 w-28 my-auto cursor-pointer'
            onClick={()=>router.push('/')}
          >
              <Image src='https://links.papareact.com/qd3'  objectFit='contain' layout='fill' objectPosition='left'/>
          </div>

          <Searchbar placeholder={placeholder} numOfGuests={numOfGuests} />

          <div className='hidden sm:inline-flex items-center justify-end space-x-2 '>
              <div className={`flex items-center space-x-4 ${headerColor? 'text-black': 'text-white'} text-white hover:bg-gray-700 hover:text-white rounded-full p-3 cursor-pointer`}>
                  <p>Become a Host</p>
              </div>

              <div className={`hover:bg-gray-700  rounded-full p-3 cursor-pointer ${headerColor? 'text-black': 'text-white'}`}>
                <GlobeAltIcon className={`h-6 hover:text-white ${headerColor? 'text-black': 'text-white' } hover:text-white`} />
              </div>

                <div className={`hidden ${headerColor? 'text-black': 'text-white'} lg:inline-flex items-center border-2 rounded-full space-x-2 p-2 cursor-pointer hover:shadow-md`}>
                    <MenuAlt2Icon className='h-6' />
                    <UserCircleIcon className='h-6'/>
                </div>
          </div>
      </header>
  )
    
}
