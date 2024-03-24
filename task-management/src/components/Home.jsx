import React from 'react'

import Flower from '../assets/Flower.jpeg'
import FlowerPot from '../assets/FlowerPot.jpeg'
import Dog from '../assets/Dog.jpeg'
import Mobile from '../assets/Mobile.jpeg'



const Home = () => {
  return (
    
    <div className='w-[100%] min-h-[100vh] flex-col '> 
    <h1 className=' text-[#0D062D] font-[600] text-[46px]  text-7xl m-10 '>Mobile App</h1>
<div className='flex gap-3  '>
  <button className='w-[122px] h-[40px] text-[#787486] font-[500] text-[16px]  border-[#787486] border-[1px] rounded-md'>Filter</button>
  <button className='w-[122px] h-[40px] text-[#787486] font-[500] text-[16px]  border-[#787486] border-[1px] rounded-md'>Today</button>
</div>

<div className=' flex flex-col md:flex-row justify-center pt-10 gap-5 '>
    <div className='bg-[#F5F5F5] w-[300px] h-[600px] rounded-lg '>
        <li className='text-4xl text-[#0D062D] font-[500] text-[16px] text-center list-disc'>To Do</li>
        <hr className='bg-[#5030E5]      '/>

        <div className='bg-[#FFFFFF] h-[174px] w-[270px] rounded-2xl p-3 m-4'>
          <h3 className=' text-[#0D062D] font-[600] text-[18px] '>Brainstorming</h3>
<p className='text-[#787486]  font-[400] text-[12px] '>Brainstorming brings team members diverse experience into play.</p>
        </div>

        <div className='bg-[#FFFFFF] h-[174px] w-[270px] rounded-2xl p-3 m-4 mb-3'>
          <h3 className='text-[#0D062D] font-[600] text-[18px] '>Research</h3>
<p className='text-[#787486]  font-[400] text-[12px] '>User research helps you to create an optimal product for users.</p>
        </div>

        <div className='bg-[#FFFFFF] h-[174px] w-[270px] rounded-2xl p-3 m-4'>
          <h3 className='text-[#0D062D] font-[600] text-[18px] '>Wireframes</h3>
<p className='text-[#787486]  font-[400] text-[12px] '>Low fidelity Wireframes include the most basic content and visuals.</p>
        </div>


    </div>
    <div  className='bg-[#F5F5F5] w-[300px] h-[600px] rounded-lg border'>
    <li className='text-4xl  text-[#0D062D] font-[500] text-[16px]  text-center'>On Progress</li>
    <hr/>

    <div className='bg-[#FFFFFF] h-[260px] w-[270px] rounded-2xl p-3 m-4'>
          <h3 className='text-[#0D062D] font-[600] text-[18px] '>Onboarding Illustrations</h3>
          <img src={Flower} alt="" />
        </div>

        <div className='bg-[#FFFFFF] h-[260px] w-[270px] rounded-2xl p-3 m-4'>
          <h3 className='text-[#0D062D] font-[600] text-[18px] '>Moodboard</h3>
          <div className='flex mt-5 items-center gap-2  '>
          <img src={FlowerPot} alt=""  className='w-[120px] rounded-md'/>
          <img src={Dog} alt="" className='w-[120px] rounded-md' />
          </div>
        </div>

    </div>
    <div  className='bg-[#F5F5F5] w-[300px] h-[600px] rounded-lg border'>
    <li className='text-4xl  text-[#0D062D] font-[500] text-[16px]  text-center'>Done</li>
    <hr/>

    <div className='bg-[#FFFFFF] h-[260px] w-[270px] rounded-2xl p-3 m-4'>
          <h3 className='text-[#0D062D] font-[600] text-[18px] '>Mobile App Design</h3>
          <img src={Mobile} alt="" />
        </div>

        <div className='bg-[#FFFFFF] h-[260px] w-[270px] rounded-2xl p-3 m-4'>
          <h3 className='text-[#0D062D] font-[600] text-[18px] '>Design System</h3>
<p className='text-[#787486]  font-[400] text-[12px] '>It just needs to adapt the UI from what you did before .</p>
        </div>

    </div>
    </div>
    
    </div>
  )
}

export default Home