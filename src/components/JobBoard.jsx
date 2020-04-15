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
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div
      className={`flex bg-white shadow-md m-4 p-6 rounded ${
        job.featured && 'border-l-4 border-teal-500 border-solid'
      }`}
    >
      <div>
        <img src={job.logo} alt='company-logo' />
      </div>
      <div className='flex flex-col justify-between ml-2'>
        <h3 className='font-bold text-teal-500 '>
          {job.company}
          {job.isNew && (
            <span className='bg-teal-500 text-teal-100 m-2 rounded-full font-bold py-1 px-2'>
              NEW!
            </span>
          )}
          {job.featured && (
            <span className='bg-gray-800 text-white rounded-full font-bold py-1 px-2'>
              FEATURED
            </span>
          )}
        </h3>
        <h2 className='font-bold text-xl'>{job.position}</h2>
        <p className='text-gray-700'>
          {job.postedAt} &middot; {job.contract} &middot; {job.location}
        </p>
      </div>
      <div className='flex items-center ml-auto'>
        {tags
          ? tags.map((tag, id) => (
              <span
                className='text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded'
                key={id}
              >
                {tag}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};

export default JobBoard;
