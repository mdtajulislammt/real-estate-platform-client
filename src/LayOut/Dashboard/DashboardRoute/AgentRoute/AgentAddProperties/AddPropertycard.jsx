import { FaBath, FaBed, FaLocationDot, FaVectorSquare } from "react-icons/fa6";
import { MdDelete, MdVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AddPropertycard = ({property}) => {
     const {_id,img,title,location,agentName,agentImg,verificationStatus,maxPrice,minPrice} = property || {}
     const axiosSecure = useAxiosSecure();
     const { data: allProperties = [],refetch} = useQuery({
          queryKey: ["allProperties"],
          queryFn: async () => {
            const res = await axiosSecure.get("/allProperties");
            return res.data;
          },
        });

        //property Delete

     const handleDelete = id=>{
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
              
               axiosSecure.delete(`/allProperties/${id}`)
               .then(res =>{
                    if(res.data.deletedCount > 0){
                    refetch();
                   Swal.fire({
                   title: "Deleted!",
                   text: "Your Property has been deleted.",
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
            <p className=" text-2xl font-bold text-[#ffb900] ">$ {minPrice} - $ {maxPrice}</p>
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
          
              <Link to={`/allProperties/${_id}`}> 
              <button className="bg-gradient-to-r  from-[#ffb900] to-black hover:from-[#000000] mt-4 hover:to-[#ffb900] font-semibold  text-white p-1 w-full">View Details</button>
              </Link>
              <div className=" flex justify-between">
              <Link to={`/dashboard/myAddedProperties/${_id}`}> 
              <button className=" bg-green-500  mt-4 hover:bg-transparent hover:text-green-500 border-2 border-green-500 font-semibold  text-white p-3 rounded  w-full px-14 flex items-center gap-2"> Update</button>
              </Link>
               <Link onClick={()=>handleDelete(_id)}> 
              <button className=" bg-red-500  mt-4 hover:bg-transparent hover:text-red-500 border-2 border-red-500 font-semibold  text-white p-3 rounded  w-full px-14 flex items-center gap-2"><MdDelete /> Delete</button>
              </Link>
              </div>

          </div>
        </div>
     );
};

export default AddPropertycard;