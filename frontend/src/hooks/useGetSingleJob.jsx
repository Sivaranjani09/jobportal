import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllJobs, setSingleJob } from '../redux/jobSlice';
import { JOB_API_END_POINT } from '../utils/constant';

const useGetSingleJobs = () => {
    const dispatch = useDispatch();

  
}

export default  useGetSingleJobs