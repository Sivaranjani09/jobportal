//useGetAllCompanies
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { COMPANY_API_END_POINT} from '../utils/constant';
import { setCompanies } from '../redux/companySlice';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();

  useEffect(()=>{
    const fetchCompanies= async()=>{
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
            if(res.data.success){
                console.log("Fetched companies:", res.data.companies);
                dispatch(setCompanies(res.data.companies));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchCompanies();
  },[dispatch])
}

export default  useGetAllCompanies