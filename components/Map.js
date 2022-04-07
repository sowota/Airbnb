import Map, {Marker, Popup} from 'react-map-gl';
import {useState, useEffect} from 'react'
import  getCenter  from 'geolib/es/getCenter';
import {LocationMarkerIcon, StarIcon} from '@heroicons/react/solid'

export default function MapBox({hotels}) {

   const[selectedHotel, setSelectedHotel] = useState({})
   //const [coords, setCoords] = useState=({})
   //console.log(selectedHotel)
   //console.log(hotels)


 

     //transform hotels objects into the latitude and longitude obejctly
   const coordinates = hotels?.searchResults?.results.map(hotelLocation =>({
        latitude: hotelLocation.coordinate.lat,
        longitude: hotelLocation.coordinate.lon
    }))

    //console.log(coordinates)
   
   let mapCenter = {}
   const getmapCenter = ()=> {
       return mapCenter = getCenter(coordinates)

       
   }
  
   getmapCenter()

   useEffect(() => {
       getmapCenter()
   }, [hotels, coordinates])

    const [viewPort, setViewPort] = useState({
        width:'100vw',
        height:'100ch',
        latitude: mapCenter.latitude,
        longitude: mapCenter.longitude,
        zoom: 12
    })

    const handleClose =() =>{setSelectedHotel({})}


  return (
    <Map
        mapStyle='mapbox://styles/sowota/ckzm2nmxy002m15p71k48usdu'
        mapboxAccessToken='pk.eyJ1Ijoic293b3RhIiwiYSI6ImNremwyczhydzJiZXUydm9jN2wyNng2bHQifQ.QuKUw-k-88fSVGRclnxq5w'
        styles={{width:'100%', height:'100%'}}
        onMove={nextViewPort => setViewPort({nextViewPort})}
        {...viewPort}
    >
        {hotels?.searchResults?.results.map(hotel => (
            <div>
                <Marker
                    longitude={hotel?.coordinate.lon}
                    latitude={hotel?.coordinate.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <div 
                    className='cursor-pointer hover:animate-bounce'
                    onClick={()=> setSelectedHotel(hotel)}>
                        <LocationMarkerIcon className="w-10 text-red-500"/>
                    </div>   
                </Marker>
                {selectedHotel?.coordinate?.lat === hotel?.coordinate?.lat ?(
                    <Popup
                        latitude={hotel?.coordinate.lat}
                        longitude={hotel?.coordinate.lon}
                        //onClose={()=>{setSelectedHotel({})}}
                        closeOnClick={handleClose}
                        className='flex flex-col justify-center items-center'
                    >
                            <p className="text-lg">{selectedHotel.name}</p>
                            <div className="flex gap-1">
                                <StarIcon className="w-6 text-red-400 justify-center items-center" />
                                <p className="text-base inline-block self-center">{selectedHotel.starRating}</p>
                            </div>

                    </Popup>

                )
                : (false)
                
                
                }     
            </div>
        ))}
        
    </Map>
  )
}
