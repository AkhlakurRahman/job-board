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
  const langAndTools = [];

  if (job.languages) {
    langAndTools.push(...job.languages);
  }

  if (job.tools) {
    langAndTools.push(...job.tools);
  }

  return (
    <div className='flex bg-white shadow-md m-4 p-6'>
      <div>
        <img src={job.logo} alt='image' />
      </div>
      <div className='flex flex-col justify-between ml-2'>
        <h3 className='font-bold text-teal-500 '>{job.company}</h3>
        <h2 className='font-bold text-xl'>{job.position}</h2>
        <p className='text-gray-700'>
          {job.postedAt} &middot; {job.contract} &middot; {job.location}
        </p>
      </div>
      <div className='flex items-center ml-auto'>
        {langAndTools
          ? langAndTools.map((langAndTool, id) => (
              <span
                className='text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded'
                key={id}
              >
                {langAndTool}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};

export default JobBoard;
