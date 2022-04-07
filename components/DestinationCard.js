
import Image from 'next/image';

export default function DestinationCard({i, img, location, distance}) {
  return (
        <div className='flex items-center space-x-4 p-3 cursor-pointer rounded-lg hover:shadow-[2px_2px_14px_3px_rgba(0,0,0,0.45)]'>
            <div className='relative h-24 w-24'>
                <Image src={img} layout='fill' className='rounded-lg'/>
            </div>
            <div className='lg:text-lg'>
                <h2 >{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}
