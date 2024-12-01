//to display multiple cards
import React from 'react'
import LatestJobsCards from './LatestJobsCards.jsx'
import { useSelector } from 'react-redux';
import store from '../redux/store.js';
import { useNavigate } from 'react-router-dom';


const LatestJobs = () => {
  const {allJobs} = useSelector(store => store.job);
  const navigate = useNavigate();
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span>Job Openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
        {
            allJobs.length <=0 ? <span>No Jobs Available</span> : allJobs?.slice(0,6).map((job)=> <LatestJobsCards onClick={()=>navigate(`/description/${job._id}`)} key={job._id} job={job}/>)
        }
    </div>
    </div>
  )
}

export default LatestJobs