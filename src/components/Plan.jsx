import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://www.absolutemagazine.co.uk/wp-content/uploads/2023/08/Hero-Cruise-shore-excursions-1140x630-1.jpg" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://www.nofrills-excursions.com/images/home/nofrills-excursions-mallorca-20002-o.jpg" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/af/f1.jpg" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://a.cdn-hotels.com/gdcs/production151/d345/e7f2dd01-3b4e-4c75-8ff3-3eb0eb1d1ee4.jpg" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://hf-s3.hotelfriend.com/pages/344/playa-de-maspalomas-gran-canaria-34708.jpg" alt="/" />
        </div>
        {/*Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan your next trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, error.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit adipisci eveniet magnam voluptate qui? Voluptas recusandae unde deleniti inventore, exercitationem numquam nesciunt asperiores eius repudiandae animi! Ut dolorem dolore quisquam!</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Trip Now</button>
            </div>
        </div>
    </div>
  )
}

export default Plan