import React, { useState } from "react";
import NoteCard from "./NoteCard";
import Filter2 from "./Filter2";

export default function NotesMain() {
  const notesData = [
    {
      username: "User 1",
      noteDescription: "A detailed explanation about React.",
      offeredSkill: "Frontend",
      offeredSkillLevel: "Beginner",
      requestedSkill: "Backend",
      requestedSkillLevel: "Intermediate",
      language: "English",
      image: "./public/../images/man.jpg",
      downloadLink: "./public/../images/Lecture 13.pptx",
    },
    {
      username: "User 2",
      noteDescription: "An advanced guide to CSS.",
      offeredSkill: "UX Design",
      offeredSkillLevel: "Advanced",
      requestedSkill: "Frontend",
      requestedSkillLevel: "Intermediate",
      language: "Spanish",
      image: "./public/../images/man.jpg",
      downloadLink: "./public/../images/Lecture 13.pptx",
    },
    {
      username: "User 3",
      noteDescription: "JavaScript best practices.",
      offeredSkill: "Backend",
      offeredSkillLevel: "Intermediate",
      requestedSkill: "Data Analyst",
      requestedSkillLevel: "Beginner",
      language: "English",
      image: "./public/../images/man.jpg",
      downloadLink: "./public/../images/Lecture 13.pptx",
    },
    {
      username: "User 4",
      noteDescription: "UI/UX principles for developers.",
      offeredSkill: "UX Design",
      offeredSkillLevel: "Beginner",
      requestedSkill: "Frontend",
      requestedSkillLevel: "Advanced",
      language: "Arabic",
      image: "./public/../images/man.jpg",
      downloadLink: "./public/../images/Lecture 13.pptx",
    },
  ];

  const [filters, setFilters] = useState({
    offeredSkill: "",
    requestedSkill: "",
    language: "",
  });

  const filteredNotes = notesData.filter((note) => {
    const matchesOfferedSkill = filters.offeredSkill
      ? note.offeredSkill === filters.offeredSkill
      : true;

   
    const matchesRequestedSkill = filters.requestedSkill
      ? note.requestedSkill === filters.requestedSkill
      : true;


    const matchesLanguage = filters.language
      ? note.language === filters.language
      : true;

    return (
      matchesOfferedSkill &&

      matchesRequestedSkill &&

      matchesLanguage
    );
  });

  return (
    <div className="flex flex-col md:flex-row md:gap-x-32 lg:gap-x-4 sm:ml-[20%] md:ml-[0px] justify-center py-5">
 
    <div className="sm:w-1/4 p-4 rounded-lg mb-5 sm:mb-0 -ml-3 lg:-ml-[170px]">
      <Filter2 setFilters={setFilters} />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 lg:gap-x-8  xl:gap-6 mx-auto sm:mx-0">
    {filteredNotes.map((note, index) => (
        <NoteCard
          key={index}
          username={note.username}
          noteDescription={note.noteDescription}
          image={note.image}
          downloadLink={note.downloadLink}
        />
      ))}
      {filteredNotes.length === 0 && (
        <p className="col-span-2 text-center text-gray-500">
          No notes match the selected filters.
        </p>
      )}
    </div>
  </div>
  
  );
}
