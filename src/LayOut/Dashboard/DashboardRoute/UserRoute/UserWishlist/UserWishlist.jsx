import useAllWishlistData from "../../../../../Hooks/useAllWishlistData";
import useAuth from "../../../../../Hooks/useAuth";
import DashboardHeader from "../../../DashboardHeader";
import UserWish from "./UserWish";

const UserWishlist = () => {
  const [wishlist] = useAllWishlistData();
  const { user } = useAuth();
  const wish = wishlist?.filter((item) => item.email === user.email);


  return (
     <div>
<DashboardHeader heading={'Wish List'}></DashboardHeader>
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
      
          {wish?.map((property) => (
            <UserWish key={property._id} property={property}></UserWish>
          ))}
    </div>
     </div>
  );
};

export default UserWishlist;
