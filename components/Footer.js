

export default function Footer() {
  return (
    <footer className="bg-gray-100">
    <div className="p-3 py-8 max-w-6xl mx-auto md:px-8 grid grid-cols-1 gap-3 lg:grid-cols-4 ">
      <div>
        <h5 className='font-bold mb-3 text-lg'>Support</h5>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>
          <p className='onHover'>Help center</p>
          <p className='onHover'>Safety information</p>
          <p className='onHover'>Cancellation options</p>
          <p className='onHover'>Our COVID-19 Response</p>
          <p className='onHover'>Supporting people with disabilities</p>
        </div>
      </div>
      <div >
        <h5 className='font-bold mb-3 text-lg'>Comminity</h5>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>
          <p className='onHover'>Airbnb.org:disaster relief housing</p>
          <p className='onHover'>S className='onHover'upport Afghan refugees</p>
          <p className='onHover'>Celebrating diversity belonging</p>
          <p className='onHover'>Comabting discrimination</p>
        </div>
      </div>
      <div >
        <h5 className='font-bold  mb-3 text-lg'>Hosting</h5>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>
          <p className='onHover'>Try hosting</p>
          <p className='onHover'>AirCover:protection for Hosts</p>
          <p className='onHover'>Explore hosting resources</p>
          <p className='onHover'>Visit our community forum</p>
          <p className='onHover'>How to hos responsibly</p>
        </div>
      </div>
      <div >
        <h5 className='font-bold mb-3 text-lg'>About</h5>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>
          <p className='onHover'>Newsroom</p>
          <p className='onHover'>Learn about new features</p>
          <p className='onHover'>Letter from our founders</p>
          <p className='onHover'>Careers</p>
          <p className='onHover'>Investors</p>
          <p className='onHover'>Airbnb Luxe</p>
        </div>
      </div>
    </div>
</footer>


  )
}
