import Image from 'next/image'


export default function Banner() {
  return (
        <div className='relative w-full h-[350px] rounded-xl lg:h-[460px] my-16'>
            <Image src='/banner.jpg' layout='fill' objectFit='cover' className='rounded-xl' />
            <h2 className='absolute text-white font-bold top-[20%] text-2xl ml-4 sm:text-3xl md:text-4xl md:ml-10 lg:text-5xl'>
              Questions <br/> about <br/> hosting?
            </h2>
            <button className='absolute top-3/4 bg-white p-3 rounded-xl ml-4 md:ml-10 lg:text-lg md:p-4 hover:bg-slate-200'>
                Ask a superhost
            </button>
        </div>
    )
}
