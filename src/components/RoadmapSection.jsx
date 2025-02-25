import React from 'react'
import Header from './Header'


const RoadmapSection = () => {
  return (
    <>
    <Header>
    Roadmaps to Achieve Your Dreams
    </Header>

    <div className="flex flex-col md:flex-row justify-center   md:ml-0">
  <div className='w-full sm:w-[300px]  mb-10 sm:mx-auto md:mx-0'>
    <h1 className='text-2xl sm:text-4xl md:text-4xl font-bold text-center md:text-left'>
      Confused about Where to start from
    </h1>
    <p className='mt-6 text-center md:text-left'>Swaply offers you some roadmaps that will guide you!</p>
  </div>

  <div className='bg-slate-300 w-full sm:w-[450px] h-[200px] p-4 sm:mx-auto md:mx-0'>
    <div className='w-full sm:w-[400px] h-[150px] flex flex-wrap justify-center'>

      <div className='flex justify-center w-full mb-4'>
        <div className='bg-gradient w-[150px] h-[50px] m-3 ml-7 rounded-lg flex justify-center items-center'>
          <button
            className="font-semibold text-white px-4 py-2 rounded-md"
            onClick={() => location.href = 'https://roadmap.sh/frontend'}
          >
            Frontend
          </button>
        </div>

        <div className='bg-gradient w-[150px] h-[50px] m-3 ml-6 rounded-lg flex justify-center items-center'>
          <button
            className="font-semibold text-white px-4 py-2 rounded-md"
            onClick={() => location.href = 'https://roadmap.sh/backend'}
          >
            Backend
          </button>
        </div>
      </div>


      <div className='flex justify-center w-full'>
        <div className='bg-gradient w-[150px] h-[50px] m-3 ml-7 rounded-lg flex justify-center items-center'>
          <button
            className="font-semibold text-white px-4 py-2 rounded-md"
            onClick={() => location.href = 'https://roadmap.sh/data-analyst'}
          >
            Data Analyst
          </button>
        </div>

        <div className='bg-gradient w-[150px] h-[50px] m-3 ml-6 rounded-lg flex justify-center items-center'>
          <button
            className="font-semibold text-white px-4 py-2 rounded-md"
            onClick={() => location.href = 'https://roadmap.sh/ux-design'}
          >
            UX Design
          </button>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-4 sm:mt-5">
      <button className="bg-gradient text-transparent bg-clip-text px-6 py-2 font-semibold text-lg sm:text-2xl mt-5">
        View All
      </button>
    </div>
  </div>
  </div>

    </>
  )
}

export default RoadmapSection