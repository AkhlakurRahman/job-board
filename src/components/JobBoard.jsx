import React from 'react';

// "id": 1,
// "company": "Photosnap",
// "logo": "./images/photosnap.svg",
// "new": true,
// "featured": true,
// "position": "Senior Frontend Developer",
// "role": "Frontend",
// "level": "Senior",
// "postedAt": "1d ago",
// "contract": "Full Time",
// "location": "USA Only",
// "languages": ["HTML", "CSS", "JavaScript"]

const JobBoard = ({ job }) => {
  return (
    <div className='flex bg-white shadow-md m-4 p-4'>
      <div>
        <img src={job.logo} alt='image' />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default JobBoard;
