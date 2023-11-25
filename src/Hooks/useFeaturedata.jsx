
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useFeaturedata = () => {
     const axiosPublic = useAxiosPublic();

     const {data: properties=[], isPending:loading,refetch} = useQuery({
          queryKey:['featureProperties'],
          queryFn:async()=>{
               const res = await axiosPublic.get('/featureProperties');
               return res.data
          }
         })
     return [properties,loading,refetch]
};

export default useFeaturedata;