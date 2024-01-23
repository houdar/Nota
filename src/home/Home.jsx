import  bgImg2 from '../../public/images/homeBg2.png'
import React from "react"

import { Calendar } from "@/components/ui/calendar"
const Home = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="flex-grow ml-16">



   {/* welcoming section  */}
   <div className='relative flex w-5/6 h-32 mt-8 rounded bg-home-secondary'>
  <div className='mt-6 ml-4'>
    <h1 className='font-bold sm:text-2xl lg:text-4xl'>Welcome back, Houda</h1>
    <p className='sm:text-sm lg:text-lg'>Ready to start a new productive day?</p>
   <img src={bgImg2} alt="img"  className='absolute top-0 right-0 w-full mt-0 ml-auto mr-4 sm:w-1/2 md:w-1/3 lg:w-1/4'/>
  </div>
</div>
{/* calendar +quick access */}
<div className='flex'>
 <Calendar 
    mode="single"
    selected={date}
    onSelect={setDate}
    className="mt-24 mr-48 bg-transparent border rounded-md"
  />
 {/* quick access */}
 <div className='mt-24'>
 <h1 className='text-xl font-bold'>quick Started</h1>
 <p className='font-bold'>welcome to Nota </p>
 </div>

</div>
    </div>
  )
}

export default Home