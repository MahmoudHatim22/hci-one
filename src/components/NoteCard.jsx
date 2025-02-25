import React from 'react';

const NoteCard = ({ username, noteDescription, image, downloadLink }) => {
  return (
    <div className="border-gradient-m bg-white w-[400px] sm:w-[400px]  h-[200px] rounded-lg shadow-lg flex p-4 m-2 ">

      <div className="">
        <img
          className="bg-black w-[100px] h-[100px] border-gradient-m rounded-lg"
          src={image || 'default-image-url.jpg'}
          alt="User"
        />
      </div>


      <div className="ml-4 flex flex-col justify-between ">
        <h2 className="text-lg mb-4 bg-gradient bg-clip-text text-transparent">{username}</h2>
        <div className="flex-grow">
          <p className="text-sm font-medium mb-4">{noteDescription}</p>
        </div>
        <div>
          <a
            href={downloadLink || '#'}
            className="bg-gradient text-white px-4 py-2 rounded-md text-center mt-2"
            download
          >
            Download Note
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
