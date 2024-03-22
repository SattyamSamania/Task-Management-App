import React from 'react'

const Dashboard = () => {
  return (
    <div className=' bg-[#FFFFFF] h-full '>

        <div className='w-[200px]'>
            <h1 className='font-bold  text-3xl m-3 p-3'>Project M.</h1> </div>
<hr/>
<div className=' list-none m-3 p-4 text-2xl font-semibold text-[#787486] space-y-3 '>
    <li>Home </li>
    <li>Messages </li>
    <li>Tasks </li>
    <li>Members </li>
    <li>Settings </li>

</div>
<hr/>

<div className='text-[#787486] list-disc m-3 p-3 space-y-3 '>
    <h1 className='text-2xl font-semibold'>MY PROJECTS</h1>
    <li>Mobile App </li>
    <li>Website Redesign </li>
    <li>Design System </li>
    <li>Wireframes </li>

</div>
    </div>
  )
}

export default Dashboard