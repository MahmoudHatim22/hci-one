import React, { useState } from 'react';
import SkillCard from './SkillCard';
import Header from './Header';

const SkillSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    
    {
      username: "Sara Ali",
      offeredSkill: "Data Analysis",
      offeredSkillLevel: "Intermediate",
      requestedSkill: "Project Management",
      requestedSkillLevel: "Beginner",
      language: "Arabic",
      city: "Cairo",
      image: "../public/../images/man.jpg",
    },
    {
      username: "James Smith",
      offeredSkill: "Backend Development",
      offeredSkillLevel: "Advanced",
      requestedSkill: "Frontend",
      requestedSkillLevel: "Intermediate",
      language: "English",
      city: "London",
      image: "../public/../images/man.jpg",
    },
    {
      username: "Emily Brown",
      offeredSkill: "UX Design",
      offeredSkillLevel: "Beginner",
      requestedSkill: "Graphic Design",
      requestedSkillLevel: "Advanced",
      language: "French",
      city: "Paris",
      image: "../public/../images/man.jpg",
    },
    {
      username: "Ali Hassan",
      offeredSkill: "Cybersecurity",
      offeredSkillLevel: "Advanced",
      requestedSkill: "Cloud Computing",
      requestedSkillLevel: "Intermediate",
      language: "English",
      city: "Dubai",
      image: "../public/../images/man.jpg",
    }
    
    
  ];

  const nextCard = () => {
    setCurrentIndex((prevInd) => (prevInd + 2) % cardData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevInd) => (prevInd - 2 + cardData.length) % cardData.length);
  };

  return (

    <>
    <Header>Suggested Users</Header>
    <div className="m-4 sm:m-[100px]">
      <div className="carousel-container mt-8 sm:mt-[100px]">
    <   div className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-5  relative">
      

      <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 xl:space-x-[120px] justify-center">
        {cardData.slice(currentIndex, currentIndex + 2).map((card, index) => (
          <SkillCard
            key={currentIndex + index} 
            username={card.username}
            offeredSkill={card.offeredSkill}
            offeredSkillLevel={card.offeredSkillLevel}
            requestedSkill={card.requestedSkill}
            requestedSkillLevel={card.requestedSkillLevel}
            language={card.language}
            city={card.city}
            image={card.image}
          />
        ))}
        </div>

      <button
        className="absolute left-2 md:left-2 sm:-left-16 top-1/2 transform -translate-y-1/2 bg-gradient text-transparent bg-clip-text p-2 rounded-full text-2xl sm:text-4xl"
        onClick={prevCard}
      >
        &#60;
      </button>

      

      <button
        className="absolute right-2 md:right-2 sm:-right-12 top-1/2 transform   -translate-y-1/2 bg-gradient text-transparent bg-clip-text p-2  rounded-full text-2xl sm:text-4xl"
        onClick={nextCard}
      >
        &#62;
      </button>
    
    </div>


    <div className="flex justify-center mt-8 sm:mt-5">
      <button className="bg-gradient text-transparent bg-clip-text px-6 py-2 font-semibold text-lg sm:text-2xl mt-5">
        View All
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default SkillSection;