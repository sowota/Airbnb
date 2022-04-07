import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate';
import {useState, useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { currentPageState,hotelState} from '../atoms/searchAtom';
import { format } from 'date-fns';
import axios from 'axios'


export default function Pagination() {

  const [pageNumber, setPageNumber] = useRecoilState(currentPageState)
  const [hotels, setHotels] = useRecoilState(hotelState)

    const router = useRouter()
    const {location, locationId, numOfGuests, startDate, endDate} = router.query
    const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd')
    const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd')

    //console.log(router.pathname) //search
    //console.log('first:' + pageNumber)   

    useEffect(() => {
      const getHotels = async()=>{
        try{
          const resp = await axios.get('api/hotelLists/', {
            params: {locationId, formattedStartDate, formattedEndDate, numOfGuests, pageNumber}
          })
          const hotels = await resp.data
          setHotels(hotels.data.body)
          if(router.isReady){
            router.push({
              pathname: '/search',
              query:{
                location,
                startDate:startDate,
                endDate:endDate,
                numOfGuests,
                locationId,
                pageNumber
              }
            })
  
          }
          
        }catch(error){
          console.log(error.message)
        }
  
      }
      getHotels()

    },[pageNumber])

    // const searchHotels = () =>{
    //   router.push({
    //     pathname: '/search',
    //     query:{
    //       location,
    //       startDate:startDate,
    //       endDate:endDate,
    //       numOfGuests,
    //       locationId,
    //       pageNumber
    //     }
    //   })
      
    // }
    

    const handlePageClick =(data) =>{
      //console.log('Pagination Num:' + Number(data.selected + 1))
        setPageNumber(Number(data.selected) + 1) 
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
        
        
    }

  return (
      <>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={50}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            initialPage={null}
            containerClassName={'container'}
            previousLinkClassName={'page'}
            breakClassName={'page'}
            nextLinkClassName={'page'}
            pageClassName={'page'}
            disabledClassNae={'disabled'}
            activeClassName={'active'}
        />
      </>
  )
}
