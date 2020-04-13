import React, { useState, useEffect } from 'react';

import JobBoard from './components/JobBoard';
import data from './assets/data.json';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className='App'>
      <h1 className='text-4xl'>Job Board</h1>
      {jobs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
