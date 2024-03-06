import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-yellow-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>5 Star Hotels</h3>
            <p className='pt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint sed tempora aliquid inventore? Libero.</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://images.mirai.com/INFOROOMS/70465526/dHuAsZoE7WGKzWabV8Vv/dHuAsZoE7WGKzWabV8Vv_large.jpg" alt="/" />
            <img className='row-span-2 object-cover w-full h-full' src="https://static-resources.mirai.com/wp-content/uploads/sites/1738/20221031113037/tabaiba-habitaciones.jpg" alt="/" />
            <img className=' object-cover w-full h-full' src="https://media-cdn.tripadvisor.com/media/photo-s/23/5d/a9/0d/lopesan-costa-meloneras.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Rooms