
import { useRecoilState } from 'recoil';
import { hotelState } from '../atoms/searchAtom';
import { StarIcon } from '@heroicons/react/solid';

export default function Hotel({thumb, name, address, landmarks, starRating, price, id, deals}) {

    const[hotels] = useRecoilState(hotelState)

  return (
    <div key={id} className='flex flex-col gap-5 sm:flex-row cursor-pointer border-t-2 pt-5 '>
        <div className="min-w-[300px] md:min-w-[380px]">
            <img src={thumb} className='w-full h-full object-cover rounded-lg' />
        </div>
        <div className="flex flex-col max-w-[400px]" >
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-gray-400 indent-3 mb-2'>{address.streetAddress} {address.postalCode} {address.locality}</p>
            {landmarks.map(landmark=>(
                <p className='indent-3'>{`${landmark.distance} to ${landmark.label}`}</p>
            ))}
            <div className='flex items-end w-full justify-between mt-2 sm:mt-10'>
                <div className="flex items-center">
                    <StarIcon className='w-6 text-red-500'/>
                    <span>{starRating}</span>
                </div>
                <p className='text-2xl'>{price} /night</p>
            </div>
        </div>

    </div>
    )
}
