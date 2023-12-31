import { FaBath, FaBed, FaLocationDot, FaVectorSquare } from "react-icons/fa6";
import { MdDelete, MdLocalOffer, MdVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAllWishlistData from "../../../../../Hooks/useAllWishlistData";

const UserWish = ({property}) => {
     const axiosSecure = useAxiosSecure()
     const [ ,refetch] = useAllWishlistData()
     const {_id,img,title,location,agentName,agentImg,verificationStatus, minPrice,maxPrice} = property || {}
  console.log(property);
     const handleDelete =(id)=>{
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
             }).then((result) => {
               if (result.isConfirmed) {
              
               axiosSecure.delete(`/wishlist/${id}`)
               .then(res =>{
                    if(res.data.deletedCount > 0){
                    refetch();
                   Swal.fire({
                   title: "Deleted!",
                   text: "Wishlist has been deleted.",
                   icon: "success"
                 });   
                    }
               })
               }
             });
     }
     return (
          <div  className=" card rounded-none px-5 py-5 bg-white shadow shadow-black">
          <figure className="pb-2 ">
            <img
              src={img}
              alt="Shoes"
              className=" w-full h-[200px] object-cover hover:scale-125  transition"
            />
          </figure>
          <div className=" space-y-3">
            <h2 className=" text-xl font-semibold">{title}</h2>
            <p className=" flex items-center gap-2 text-sm text-gray-500"><FaLocationDot />{location}</p>
            <div className=" flex justify-between items-center">
            <p className=" text-2xl font-bold text-[#ffb900] ">${minPrice} - ${maxPrice}</p>
            <p className=" flex items-center gap-2 text-lg font-semibold text-gray-500"><MdVerifiedUser className=" text-blue-500"/>{verificationStatus}</p>
            </div>
            <div className=" flex  gap-2 items-center">
            <img src={agentImg} alt="" className="border-4 border-[#ffb900] rounded-full w-14 h-14 object-cover" />
            <h2 className=" text-lg font-semibold">{agentName}</h2>
            </div>
            <div className="flex justify-between text-center bg-[#ffb900] text-gray-500 py-2 border border-gray-400 rounded-md  w-full">
            <p className="  px-2"><FaBed className=" mx-auto"/> 3 bedroom</p>
            <p className=" px-2 border-x border-gray-400"><FaBath className=" mx-auto"/> 3 bathroom</p>
            <p className=" px-2 "><FaVectorSquare className=" mx-auto"/>820 sqft</p>
          </div>
              <div className=" flex justify-between gap-4">
              <Link to={`/dashboard/wishlist/${_id}`}> 
              <button className=" bg-green-500 hover:bg-transparent hover:text-green-500 border-2 border-green-500   font-semibold  text-white p-1 w-full md:px-14 px-8 flex items-center gap-2"><MdLocalOffer /> Offer</button>
              </Link>
              <Link onClick={()=>handleDelete(_id)}> 
              <button className=" bg-red-500 hover:bg-transparent hover:text-red-500 border-2 border-red-500 font-semibold  text-white p-1 w-full md:px-14 px-8 flex items-center gap-2"><MdDelete /> Delete</button>
              </Link>
              </div>

          </div>
        </div>
     );
};

export default UserWish;