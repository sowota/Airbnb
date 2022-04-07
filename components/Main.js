import Banner from "./Banner"
import DestinationCard from './../components/DestinationCard';
import CountryCard from './../components/CountryCard';

export default function Main({destinations, countries}) {
  return (
     <div>
         <section className='my-5 md:my-8'>
          <h1 className='text-xl font-bold md:text-3xl'>
            Inspiration for your next trip
          </h1>
          <div className='mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
            {destinations?.map((destination, i) => (
              <DestinationCard
                  img={destination.img}
                  distance={destination.distance}
                  location={destination.location}
                  key={i}
              />
            ))}
          </div>
        </section>

        <section className='my-5 sm:my-16 lg:my-20'>
          <h1 className='text-xl font-bold md:text-3xl'>
            Discover Airbnb Experiences
          </h1>
          <div className="flex mt-8 space-x-5 overflow-x-scroll scrollbar-hide  ">
            {countries.map((country, i) => (
              <CountryCard
                  img={country.img}
                  title={country.title}
                  key={i}
                  index={i}
               />
            ))}
          </div>
        </section>

        <section>
          <Banner />
        </section>
     </div>

  )
}
