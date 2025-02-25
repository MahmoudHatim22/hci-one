import React from 'react'
import Header from './Header'

const HowSection = () => {
  return (
<div>

<Header>How To Use?</Header>

  <div className='steps-container flex flex-col space-y-8 sm:space-y-16 mt-10'>


    <div className='steps1&2 flex flex-col sm:flex-row justify-center gap-8 sm:gap-10'>
      <div className='step1-content flex flex-col w-full sm:w-[350px]'>
        <p className='text-2xl sm:text-3xl font-bold text-center'>
          <span className='bg-gradient bg-clip-text text-transparent'>Step 1:</span> Sign Up
        </p>
        <p className='text-lg sm:text-2xl text-center sm:text-left mt-3'>
          Join the community by setting up your profile and showcasing your skills.
        </p>
      </div>
      <div className='step2-content flex flex-col w-full sm:w-[350px]'>
        <p className='text-2xl sm:text-3xl font-bold text-center'>
          <span className='bg-gradient bg-clip-text text-transparent'>Step 2:</span> Add Skills
        </p>
        <p className='text-lg sm:text-2xl text-center sm:text-left mt-3'>
          Add the abilities you're ready to share and the ones you’d like to gain.
        </p>
      </div>
    </div>


    <div className='steps3&4 flex flex-col sm:flex-row justify-center gap-8 sm:gap-10'>
      <div className='step3-content flex flex-col w-full sm:w-[350px]'>
        <p className='text-2xl sm:text-3xl font-bold text-center'>
          <span className='bg-gradient bg-clip-text text-transparent'>Step 3:</span> Connect
        </p>
        <p className='text-lg sm:text-2xl text-center sm:text-left mt-3'>
          Browse and connect with members who complement your learning or teaching goals.
        </p>
      </div>
      <div className='step4-content flex flex-col w-full sm:w-[350px]'>
        <p className='text-2xl sm:text-3xl font-bold text-center'>
          <span className='bg-gradient bg-clip-text text-transparent'>Step 4:</span> Exchange
        </p>
        <p className='text-lg sm:text-2xl text-center sm:text-left mt-3'>
          Exchange knowledge, gain new skills, and make meaningful connections!
        </p>
      </div>
    </div>

  </div>
</div>


  )
}

export default HowSection