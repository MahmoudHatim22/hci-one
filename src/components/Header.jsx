import React from 'react'

const Header = (props) => {
  return (
    <div className="margin flex flex-col px-4 sm:px-8 py-5 border-t-4 border-gray-300 m-4 mt-11 sm:m-[100px]">
  <h1 className="title-how text-2xl sm:text-4xl md:text-5xl font-bold text-center mt-8 sm:mt-12 md:mt-16">
    {props.children}
  </h1>
</div>

  )
}

export default Header