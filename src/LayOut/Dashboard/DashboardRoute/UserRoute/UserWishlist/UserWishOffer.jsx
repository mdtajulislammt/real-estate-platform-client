import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../../Hooks/useAuth";
import useAllWishlistData from "../../../../../Hooks/useAllWishlistData";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const UserWishOffer = () => {
     const { register, handleSubmit,reset } = useForm();
     const { id } = useParams();
     const {user} = useAuth();
     const [wishlist] = useAllWishlistData();
     const axiosSecure = useAxiosSecure();
     const property = wishlist?.find((item) => item._id === id);
   
     const [startDate, setStartDate] = useState(new Date());
     const {
       title,
       location,
       agentName,
       agentEmail,
       maxPrice,
       minPrice,
       img,
       status
     } = property || {};
     console.log(agentEmail);

     const onSubmit = async (data) => {

          
           
          const  offerInfo = {
               title: title,
               location: location,
               buyerEmail: user.email,
               buyerName: user.displayName,
               minPrice: minPrice,
               maxPrice: maxPrice ,
               offerAmount: data.offerAmount,
               buying:startDate,
               agentName: agentName,
               agentEmail: agentEmail,
               img:img,
               status:status
          }
          console.log(typeof(parseFloat(minPrice)));
           if(  parseFloat(minPrice) <= parseFloat(data.offerAmount)  ){
               axiosSecure.post('/userWishOffer',offerInfo)
               .then(res=>{
                    reset();
                    Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: `Send Offer successfully `,
                         showConfirmButton: false,
                         timer: 1500
                       });  
               })
               .catch((err)=>{
                    Swal.fire({
                         position: "top-end",
                         icon: "error",
                         title: `offer Not send `,
                         showConfirmButton: false,
                         timer: 1500
                       }); 
               })

               
                  return ;
          }else{
             Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${data.offerAmount} money is out of range `,
                    showConfirmButton: false,
                    timer: 1500
                  });  
          }
     }
     return (
          <div>
               <div className=" bg-slate-200 rounded p-5 mx-10 my-7">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* tilte */}
          <div className="form-control w-full my-2">
          
            <label className="label">
              <span className="label-text">
                Property Title 
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={title}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          {/* location */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Property location 
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={location}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          <div className=" flex items-center gap-5 mb-4">
            {/* Buyer Name */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Buyer Name
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={user.displayName}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
             {/* Buyer Email */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Buyer Email
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={user.email}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          </div>
          <div className=" flex items-center gap-5 mb-4">
            {/* agent Name */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Agent Name
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={agentName}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
             {/* Buying Date */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Buying Date
              </span>
            </label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="input input-bordered w-full "/>
          </div>
          </div>
          <div className=" flex items-center gap-5 mb-4">
            {/* agent Name */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Make Offer Amount 
              </span>
            </label>
            <input
              {...register("offerAmount",{required:true})}
              type="number"
              placeholder="$ Amount"
              className="input input-bordered w-full "
              
            />
          </div>
             {/* Amount Current */}
          <div className=" flex items-center gap-2">
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
              $ Minimum 
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={minPrice}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
              $ Maximum
              </span>
            </label>
            <input
             
              type="text"
              placeholder=""
              defaultValue={maxPrice}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          </div>
          </div>
          <input type="submit" value="Offer" className=" bg-green-500 p-2 px-8 font-semibold text-white rounded border-2 border-green-500 hover:text-black cursor-pointer hover:bg-transparent" />
        </form>
      </div>
          </div>
     );
};

export default UserWishOffer;