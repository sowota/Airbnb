import Header from './../components/Header';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'

import axios from 'axios'
import Searchbar from './../components/Searchbar';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hotelState, isLoadingState, searchInputState } from './../atoms/searchAtom';
import Hotel from '../components/Hotel';
import Pagination from '../components/Pagination';
import { format } from 'date-fns';
import data from '../data'
import Map from '../components/Map';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default function search() {

    const router = useRouter()
    const {location, startDate, endDate, numOfGuests, theLocation} = router.query

    const[hotels] = useRecoilState(hotelState)
    const[isLoading] = useRecoilState(isLoadingState)
    //const[hotels,setHotels] = useState(data)
    //console.log([hotels])

    const[searchInput, setSearchInput] = useRecoilState(searchInputState)
    //console.log(searchInput)

    const formattedStartDate = ()=>{
        if(startDate){
            return format(new Date(startDate), 'yyyy-MM-dd')
        }
    } 
    const formattedEndDate = () =>{
        if(endDate){
            return format(new Date(endDate), 'yyyy-MM-dd')
        }
    } 


  return (
     <> 
     <Head>
        <title>AIRBNB</title>
        
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
    <div className="scrollbar-hide w-screen overflow-hidden">
        <Header placeholder={`${location} | ${numOfGuests} | ${formattedStartDate()} | ${formattedEndDate()}`}/>
        
        <main className='flex mx-auto h-screen'>
            {isLoading ? (
                <Loader />
            )
            :
            (    <>
                     <section className='p-8 pt-24 h-full overflow-y-scroll flex-1 scrollbar-hide'>
                
                <p className='text-xs'>Stays for  - {numOfGuests > 1 ? `${numOfGuests} people`: `${numOfGuests} person`}</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden md:inline-flex flex-wrap mb-5 text-gray-800 gap-2 whitespace-nowrap'>
                    <p className='button'>Price</p>
                    <p className='button'>Free cancellation</p>
                    <p className='button'>Wifi</p>
                    <p className='button'>Iron</p>
                    <p className='button'>Washer</p>
                    <p className='button'>Gym</p>
                    <p className='button'>Dedicated workspace</p>
                </div>

                <div className='grid gap-4'>
                    {hotels?.searchResults.results.map(hotel=>(
                        <Hotel
                            thumb={hotel?.optimizedThumbUrls?.srpDesktop}
                            address={hotel?.address}
                            name={hotel?.name}
                            landmarks={hotel?.landmarks}
                            starRating={hotel?.starRating}
                            price={hotel?.ratePlan?.price.current}
                            id={hotel?.id}
                            deals={hotel?.deals?.specialDeal?.dealText}

                        />
                    ))}
                </div>
                <Pagination />
            </section>
            <section className="hidden xl:inline-flex w-[46vw] h-full">
                <Map hotels={hotels} />
            </section>
            
                 </>
                
            )
        
        
        
        
        }
             
           
        </main>
        <Footer/>
       
    </div>
    </>
  
  )
}

// export async function getServerSidePros(){


//     // const hotelRes = axios.get('api/hotels/',{
//     //     params:{location, startDate, endDate, numOfGuests}
//     // })

//     return{
//         props:{
//             locationRes
//         }
//     }



// }

