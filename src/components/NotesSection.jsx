import React from 'react';
import NoteCard from './NoteCard';
import Header from "./Header"

const NotesSection = () => {
  const notesData = [
    {
      username: 'User 1',
      noteDescription: 'A detailed explanation about topic X, with insights and examples.',
      image: './public/../images/man.jpg',
      downloadLink: './public/../images/Lecture 13.pptx',
    },
    {
      username: 'User 2',
      noteDescription: 'A summary of the key points from the latest research on topic Y.',
      image: './public/../images/man.jpg',
      downloadLink: './public/../images/Lecture 12.pptx',
    },
  ];

  return (
    <>
    <Header>Notes</Header>
    <div className=" flex sm:flex-col md:flex-row justify-center">
      <div className="flex flex-col md:flex-row items-center py-5 justify-center  md:space-x-8 ">
        {notesData.map((note, index) => (
          <NoteCard
            key={index}
            username={note.username}
            noteDescription={note.noteDescription}
            image={note.image}
            downloadLink={note.downloadLink}
          />
        ))}
      </div>
      </div>

      <div className="flex justify-center mt-4 sm:mt-5">
      <button className="bg-gradient text-transparent bg-clip-text px-6 py-2 font-semibold text-lg sm:text-2xl mt-5">
        View All
      </button>
    </div>
    
    </>
  );
};

export default NotesSection;
