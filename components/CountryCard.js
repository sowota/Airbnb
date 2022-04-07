
import Image from 'next/image';

export default function CountryCard({img, title, index}) {

    const colors =[
        "#cc2d4a",
        "#de3151",
        "#d93b30",
        "#bc1a6e"
    ]

    //console.log(colors[0])


  return (
    <div style={{backgroundColor:`${colors[index]}`}} className='shrink-0  h-[350px] w-[280px] cursor-pointer rounded-xl '>
        <div className="relative rounded-t-xl h-60 w-full overflow-hidden">
            <Image src={img} layout='fill' className='rounded-t-xl hover:scale-105 transition duration-300 ease-out '/>
        </div>
        <h3 className='text-white font-bold uppercase text-2xl mt-4 ml-4'>
            {title}
        </h3>
    </div>
  )
}
