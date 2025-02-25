import React from 'react'


export default function SkillCard(props) {
  
  return (
<div className="border-gradient1 bg-white w-full sm:w-[400px] h-auto sm:h-[350px] p-5">
  <div className="flex flex-col sm:flex-row items-center font-semibold">

    <div className=" m-2">
      <img
        className="  w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
        src={props.image}
        alt={`${props.username}'s profile`}
      />
    </div>

    <h2 className="bg-gradient bg-clip-text text-transparent text-center sm:text-left sm:ml-4 mt-2 sm:mt-0 text-lg">{props.username}</h2>
  </div>


  <div className="mt-4">
    <p className="font-semibold m-2 text-sm sm:text-base">
      Offered Skill: <span className="font-normal">{props.offeredSkill}</span>
    </p>
    <p className="font-semibold m-2 text-sm sm:text-base">
      Offered Skill Level: <span className="font-normal">{props.offeredSkillLevel}</span>
    </p>
    <p className="font-semibold m-2 text-sm sm:text-base">
      Requested Skill: <span className="font-normal">{props.requestedSkill}</span>
    </p>
    <p className="font-semibold m-2 text-sm sm:text-base">
      Requested Skill Level <span className="font-normal">{props.requestedSkillLevel}</span>
    </p>
    <p className="font-semibold m-2 text-sm sm:text-base">
      Language: <span className="font-normal">{props.language}</span>
    </p>
    <p className="font-semibold m-2 text-sm sm:text-base">
      City: <span className="font-normal">{props.city}</span>
    </p>
    
  </div>
</div>

  )
}
