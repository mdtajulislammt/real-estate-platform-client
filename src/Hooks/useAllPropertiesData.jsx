import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllPropertiesData = () => {
     const axiosPublic = useAxiosPublic();

     const {data: allProperties=[], isPending:loading,refetch} = useQuery({
          queryKey:['allProperties'],
          queryFn:async()=>{
               const res = await axiosPublic.get('/allProperties');
               return res.data
          }
         })
     return [allProperties,loading,refetch]
};

export default useAllPropertiesData;