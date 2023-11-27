import { useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const PropertyReview = () => {
     const {user} = useAuth()
     const [rating, setRating] = useState(0);
     return (
          <div className=" border shadow-xl my-10 p-5 rounded-lg border-black shadow-gray-400">
              <div className=" flex items-center justify-between mb-3 ">
              <h2 className=" text-3xl font-semibold mb-5">Customer Reviews . . .</h2>

              <div className=" flex items-center gap-2">
               <h2 className=" uppercase text-xl font-semibold">{user.displayName}</h2>
              <img src={user.photoURL} alt="" className=" w-10 h-10 rounded-full" />
              </div>
              </div>
              <div className=" flex justify-between items-center">
              <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
              <p className=" text-lg p-2 rounded-xl border">Write a review</p>
              </div>
              <textarea className="textarea textarea-bordered w-full h-28 mt-5" placeholder="Write a review . . . " ></textarea>
              <div className=" flex justify-end ">
               <Link><button className=" bg-[#ffb900] p-2 px-5 mt-2 rounded-md font-semibold">Submit</button></Link>
               </div>
             
          </div>
     );
};

export default PropertyReview;