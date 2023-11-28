import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllReviewData = () => {
     const axiosSecure = useAxiosSecure();
     const {user} = useAuth();
     const {data: allReviews=[], refetch} = useQuery({
          queryKey:['allReviews',user?.email],
          queryFn:async()=>{
               const res = await axiosSecure.get(`/allReviews?email=${user?.email}`);
               return res.data
          }
         })
     return [allReviews,refetch]
};

export default useAllReviewData;