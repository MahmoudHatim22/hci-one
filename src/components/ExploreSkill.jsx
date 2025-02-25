import React, { useState } from "react";
import SkillCard from "./SkillCard";
import Filter from "./Filter";

const ExploreSkill = () => {
  const [filters, setFilters] = useState({
    offeredSkill: "",
    offeredSkillLevel: "",
    requestedSkill: "",
    requestedSkillLevel: "",
    language: "",
  });

  const skillCardsData = [
      {
        username: "Nadine Mohamed",
        offeredSkill: "Frontend",
        offeredSkillLevel: "Beginner",
        requestedSkill: "Backend",
        requestedSkillLevel: "Intermediate",
        language: "English",
        city: "San Francisco",
        image: "../public/../images/man.jpg",
      },
      {
        username: "Ahmed Khaled",
        offeredSkill: "Backend",
        offeredSkillLevel: "Advanced",
        requestedSkill: "Frontend",
        requestedSkillLevel: "Beginner",
        language: "Arabic",
        city: "Cairo",
        image: "../public/../images/man.jpg",
      },
      {
        username: "Mahmoud Hatim",
        offeredSkill: "Data Analyst",
        offeredSkillLevel: "Advanced",
        requestedSkill: "UX Design",
        requestedSkillLevel: "Advanced",
        language: "Arabic",
        city: "Alexandria",
        image: "../public/../images/man.jpg",
      },
      {
        username: "Faisal Mohamed",
        offeredSkill: "UX Design",
        offeredSkillLevel: "Advanced",
        requestedSkill: "Data Analyst",
        requestedSkillLevel: "Beginner",
        language: "Arabic",
        city: "Dubai",
        image: "../public/../images/man.jpg",
      },
      {
        username: "Emily Carter",
        offeredSkill: "Frontend",
        offeredSkillLevel: "Intermediate",
        requestedSkill: "UX Design",
        requestedSkillLevel: "Advanced",
        language: "Spanish",
        city: "Buenos Aires",
        image: "../public/../images/man.jpg",
      },
      {
        username: "Kareem Fares",
        offeredSkill: "Backend",
        offeredSkillLevel: "Beginner",
        requestedSkill: "Frontend",
        requestedSkillLevel: "Intermediate",
        language: "English",
        city: "Sydney",
        image: "../public/../images/man.jpg",
      },
      {
        username: "Sophia Mark",
        offeredSkill: "Data Analyst",
        offeredSkillLevel: "Advanced",
        requestedSkill: "Backend",
        requestedSkillLevel: "Intermediate",
        language: "Arabic",
        city: "Cairo",
        image: "../public/../images/man.jpg",
      },
      {
        username: "John Doe",
        offeredSkill: "UX Design",
        offeredSkillLevel: "Intermediate",
        requestedSkill: "Frontend",
        requestedSkillLevel: "Advanced",
        language: "English",
        city: "New York",
        image: "../public/../images/man.jpg",
      },
    ];
    


  const filteredData = skillCardsData.filter((card) => {
    return (
      (!filters.offeredSkill || card.offeredSkill === filters.offeredSkill) &&
      (!filters.offeredSkillLevel || card.offeredSkillLevel === filters.offeredSkillLevel) &&
      (!filters.requestedSkill || card.requestedSkill === filters.requestedSkill) &&
      (!filters.requestedSkillLevel || card.requestedSkillLevel === filters.requestedSkillLevel) &&
      (!filters.language || card.language === filters.language)
    );
  });

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-x-32 lg:gap-x-2 py-5 sm:ml-[20%] md:ml-[0px]  ">
      <div className="sm:w-1/4  w-full ">
        <Filter setFilters={setFilters} />
      </div>

      <div className="sm:w-3/4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-8 xl:gap-x-0  xl:gap-4 ">
          {filteredData.map((card, index) => (
            <SkillCard
              key={index}
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
          {filteredData.length === 0 && (
            <p className="col-span-2 text-center text-gray-500">
              No skills match the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreSkill;
