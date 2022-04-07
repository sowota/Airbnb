import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react'
import {GlobeAltIcon, MenuAlt2Icon, SearchIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import axios from 'axios';
import { format } from 'date-fns';
import { searchInputState, startDateState, endDateState, numOfGuestsState, hotelState, currentPageState, loationIdState, isLoadingState } from './../atoms/searchAtom';
import { useRecoilState } from 'recoil';
import data from '../data.js'


export default function Searchbar({placeholder}) {

    const router = useRouter()
    //console.log(router.pathname)

    
    const [hotels, setHotels] = useRecoilState(hotelState) //hotel list
    
    const[searchInput, setSearchInput] = useRecoilState(searchInputState)
    const[locationId, setLocationId] = useRecoilState(loationIdState)  //id 
    const[startDate, setStartDate] = useRecoilState(startDateState)
    const[endDate, setEndDate] = useRecoilState(endDateState)
    const [numOfGuests, setNumOfGuests] = useRecoilState(numOfGuestsState)
    const [pageNumber, setPageNumber] = useRecoilState(currentPageState)
    const [isLoading, setIsLoading] = useRecoilState(isLoadingState)

    // console.log('search input: ' + searchInput)
    // console.log('location id;' + locationId)
    // console.log('start:' + startDate)
    // console.log('end:' + endDate)
    // console.log('Page Number:' + pageNumber)

    
   
  
    const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd')
    const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd')

    const range = `${formattedStartDate} - ${formattedEndDate}`
    
    //console.log(formattedStartDate)
    
   
  
    const handleInput = e =>{
      setSearchInput(e.target.value)
    }
  
    const handleGuests = e =>{
      setNumOfGuests(e.target.value)
    }
  
    const selectionRange = {
      startDate:startDate,
      endDate: endDate,
      key:'selection'
    }
  
    const handleSelect = (ranges) =>{
      setStartDate(ranges?.selection?.startDate)
      setEndDate(ranges?.selection?.endDate)
    }
  
    const resetInput = () =>{
      setSearchInput('')
    }
    
    const searchHotels = () =>{
      router.push({
        pathname: '/search',
        query:{
          location:searchInput,
          startDate:startDate.toISOString(),
          endDate:endDate.toISOString(),
          numOfGuests,
          locationId,
          pageNumber
        }
        
      })

      setSearchInput('')
        
      
    }

    const getHotels = async()=>{
      
      try{
        const resp = await axios.get('api/hotelLists/', {
          params: {locationId, formattedStartDate, formattedEndDate, numOfGuests, pageNumber}
        })
        const hotels = await resp.data
        setHotels(hotels.data.body)
        searchHotels()
        setSearchInput('')
     
      }catch(error){
        console.log(error.message)
      }
      
    }
    
       
    const getLocation = async () =>{
      //const dummyData = true  
      setIsLoading(true)
      // if(searchInput){
        try{
            const res =
            await axios.get('api/location/',{
                params: {searchInput}
            })
            const data = await res.data
            setLocationId(data.suggestions[0].entities[0].destinationId)
            if(locationId !== null){
              getHotels(locationId)
              setLocationId(null)
            }  
          
            } catch(error){
                console.log(error.response?.data)
            } 

      // }

      setIsLoading(false)
          
    }      
    

    useEffect(() => {
      const identifier = setTimeout(() => {
        getLocation()
      }, 1000)

      return () => {
        clearTimeout(identifier)
      }
     
    },[searchInput])


    // useEffect(() => {
    
    //   if(locationId !== null){
    //     getHotels(locationId)
    //     setLocationId(null)
    //   }   
    // }, [locationId])

    // const getHotels = async () =>{

    //     try{
    //         const res = await axios.get('api/hotelLists/', {
    //             params: {location, startDate, endDate, numOfGuests}
    //         })
    
    //         const {data} = res
    //         setHotels(data.data.body)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }


    

  return (
    <div className='relative'>
     <div className=' flex items-center border-2 rounded-full p-1 pl-5 bg-white focus:outline-red-400'>
            <input
               value={searchInput} 
               onChange={handleInput}

                type='text' 
                placeholder={placeholder ||'Start your search'} className='flex-grow w-full outline-none bg-white pr-3 '
            />
            <SearchIcon className='h-8 bg-red-400 rounded-full p-2 text-white cursor-pointer hover:bg-red-500'
            
            />
    </div>
     {searchInput && (
        <div className='absolute col-span-3 mx-auto top-20 left-5 flex flex-col '>
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={handleSelect}
            />
            <div className='bg-white flex items-center justify-end border-b pb-4'>
                <h2 className='pr-5'>
                    Number of guests
                </h2>
                <UsersIcon className='h-6'/>
                <input
                    type='number'
                    value={numOfGuests}
                    onChange={e=>handleGuests(e)}
                    min={1}
                    className='w-12 pl-2 text-red-400 placeholder:text-red-300 outline-none'
                    autoComplete='on'
                />
            </div>
            <div className='bg-white flex justify-evenly w-full '>
                <button 
                    className='text-gray-500 hover:bg-slate-50 w-full p-2'
                    onClick={resetInput}
                >
                    Cancel
                </button>
                <button 
                    type='submit'
                    onClick={getLocation}
                    className='text-red-400 w-full p-2 hover:bg-red-50'
                >
                    Search
                </button>
            </div>
        </div>
          
     )}

    </div>
    
  )
}


