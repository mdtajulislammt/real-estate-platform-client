import { useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const PropertyReview = ({property}) => {
     const { id } = useParams();
     const {user} = useAuth()
     const [rating, setRating] = useState(0);
     const axiosSecure = useAxiosSecure();
     const {
          title,
          agentName,
          agentImg,
        } = property || {};

        const showDate = new Date();
        const displayDate = showDate.getDate()+"/"+(showDate.getMonth()+1)+"/"+showDate.getFullYear()+" "+showDate.getHours()+":"+showDate.getMinutes();

        

     const handleReviewSubmit =(e)=>{
          e.preventDefault();
          const form =e.target
          const textArea = form.textArea.value ;
          const reviewInfo = {
               title,
               agentName,
               agentImg,
               description:textArea,
               rating,
               displayDate,
               propertyId:id,
               userName:user.displayName,
               userImg:user.photoURL,
               email:user.email
          }
          console.log(reviewInfo);
          axiosSecure.post('/allReviews',reviewInfo)
          .then(res=>{
               if(res.data.insertedId){
                    Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: `${user.displayName} Review successfully added  `,
                         showConfirmButton: false,
                         timer: 1500
                       }); 
                       
               }
          })

     }
     return (
          <form onSubmit={handleReviewSubmit} className=" border shadow-xl my-10 p-5 rounded-lg border-black shadow-gray-400">
              <div className=" flex items-center justify-between mb-3 ">
              <h2 className=" md:text-3xl font-semibold mb-5">Customer Reviews . . .</h2>

              <div className=" flex items-center gap-2">
               <h2 className=" uppercase md:text-xl font-semibold">{user.displayName}</h2>
              <img src={user.photoURL} alt="" className="border-4 w-10 h-10 rounded-full" />
              </div>
              </div>
              <div className=" flex justify-between items-center">
              <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
              <p className=" text-lg p-2 rounded-xl border">Write a review</p>
              </div>
              <textarea className="textarea textarea-bordered w-full h-28 mt-5" placeholder="Write a review . . . " name="textArea" ></textarea>
              <div className=" flex justify-end ">
               <input type="submit" value="Submit"  className=" bg-[#ffb900] p-2 px-5 mt-2 rounded-md font-semibold cursor-pointer" />
               </div>
             
          </form>
     );
};

export default PropertyReview;