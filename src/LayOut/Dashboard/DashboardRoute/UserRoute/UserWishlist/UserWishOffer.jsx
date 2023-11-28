import { useParams } from "react-router-dom";
import useAllWishlistData from "../../../../../Hooks/useAllWishlistData";

const UserWishOffer = () => {
  const { id } = useParams();
  const [wishlist] = useAllWishlistData();
  const property = wishlist?.find((item) => item._id === id);
  const {
    _id,
    img,
    title,
    location,
    agentName,
    agentImg,
    verificationStatus,
    priceRange,
  } = property || {};

  return (
    <div>
      <div>
          <h2>{title}</h2>
          <p>{location}</p>
          <h1>{agentName}</h1>
      </div>
    </div>
  );
};

export default UserWishOffer;
