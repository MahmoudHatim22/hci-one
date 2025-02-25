import React, { useState } from "react";

const Filter2 = ({ setFilters }) => {
  const [offeredSkill, setOfferedSkill] = useState("");
  const [offeredSkillLevel, setOfferedSkillLevel] = useState("");
  const [language, setLanguage] = useState("");

  const handleFilterChange = () => {
    setFilters({
      offeredSkill,
      offeredSkillLevel,
      language,
    });
  };

  const handleReset = () => {
    setOfferedSkill("");
    setOfferedSkillLevel("");
    setLanguage("");
    setFilters({}); 
  };

  return (
    <div className="w-full sm:w-[400px] md:w-[270px] p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 bg-gradient text-transparent bg-clip-text">Filter Users</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium">Offered Skill</label>
        <select
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value={offeredSkill}
          onChange={(e) => setOfferedSkill(e.target.value)}
        >
          <option value="">Select Offered Skill</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="UX Design">UX Design</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Skill Level</label>
        <select
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value={offeredSkillLevel}
          onChange={(e) => setOfferedSkillLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Language</label>
        <select
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          className="w-full py-2 bg-gradient text-white rounded-md"
          onClick={handleFilterChange}
        >
          Apply Filters
        </button>
        <button
          className="w-full py-2 bg-gradient text-white rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter2;
