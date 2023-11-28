import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserWishOffer = () => {
     const axiosSecure = useAxiosSecure();
     const {user} = useAuth();
    const { refetch,data: userWishOffer = [] } = useQuery({
     queryKey:['userWishOffer',user?.email],
     queryFn: async ()=>{
          const res = await axiosSecure.get(`/userWishOffer?email=${user?.email}`);
          return res.data;
     }
    })
    return [userWishOffer,refetch]
};

export default useUserWishOffer;