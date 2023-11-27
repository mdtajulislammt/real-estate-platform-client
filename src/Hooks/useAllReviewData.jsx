import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllReviewData = () => {
     const axiosSecure = useAxiosSecure();

     const {data: allReviews=[], isPending:loading,refetch} = useQuery({
          queryKey:['allReviews'],
          queryFn:async()=>{
               const res = await axiosSecure.get('/allReviews');
               return res.data
          }
         })
     return [allReviews,loading,refetch]
};

export default useAllReviewData;