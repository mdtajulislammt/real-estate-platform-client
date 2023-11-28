
import useAuth from "../../../../../Hooks/useAuth";
import useUserWishOffer from "../../../../../Hooks/useUserWishOffer";
import DashboardHeader from "../../../DashboardHeader";
import UserBoughtCard from "./UserBoughtCard";


const UserBought = () => {
     const [userWishOffer] = useUserWishOffer();
     
     const {user} =useAuth();
     const offer = userWishOffer?.filter( item => item.buyerEmail === user.email);

     console.log(offer);
     return (
          <div>
               <DashboardHeader heading={"Property Bought"}/>
               <div className=" grid lg:grid-cols-2 grid-cols-1">
               {
                    offer.length ? <>
                    {
                    offer?.map(item => <UserBoughtCard key={item._id} item={item}></UserBoughtCard>
                    )
               }
                    </> : <>
                    <div className=" ">
                         <h2 className=" text-3xl mt-10 font-semibold  text-center ">Data Not Found  . . .</h2>
                    </div>
                    </>
               }
          </div>
          </div>
     );
};

export default UserBought;