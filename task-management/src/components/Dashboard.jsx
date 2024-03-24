import React from 'react'

const Dashboard = () => {
  return (
    <div className='min-h-[100vh] max-w-[250px]  bg-[#FFFFFF] invisible sm:visible '>

        <div className=' '>
            <h1 className=' text-[#0D062D] font-[600] text-[20px]   text-3xl m-3 p-3'>Project M.</h1> </div>
<hr/>
<div className=' list-none  font-[500] text-[16px]  m-3 p-4 text-2xl  text-[#787486] space-y-3 '>
    <li>Home </li>
    <li>Messages </li>
    <li>Tasks </li>
    <li>Members </li>
    <li>Settings </li>

</div>
<hr/>

<div className='text-[#787486] list-disc m-3 p-3 space-y-3 '>
    <h1 className='text-2xl text-[#0D062D] font-[700] text-[12px]  '>MY PROJECTS</h1>
    <li className='text-[#0D062D] font-[600] text-[16px] '>Mobile App </li>
    <li className=' font-[500] text-[16px] '>Website Redesign </li>
    <li className=' font-[500] text-[16px] '>Design System </li>
    <li className=' font-[500] text-[16px] '>Wireframes </li>

</div>

<div className='bg-[#F5F5F5] rounded-md w-[200px] flex-col space-y-3 text-center mx-2 pb-2 '>
  <h1 className='pt-3 text-[#000000] text-[14px] font-[500]'>Thoughts Time</h1>
  <p className='text-[#787486]  text-[12px] font-[400]'>We don't have any notice for you, till then you can share your thoughts with your peers.</p>
  <input placeholder='Write a message'  className='text-[#000000] text-center w-25 h-8 rounded-sm text-[12px] font-[500] '  />
</div>
    </div>
  )
}

export default Dashboard