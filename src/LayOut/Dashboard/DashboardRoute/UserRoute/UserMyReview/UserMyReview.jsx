import { FaCalendarAlt } from "react-icons/fa";
import useAllReviewData from "../../../../../Hooks/useAllReviewData";
import useAuth from "../../../../../Hooks/useAuth";
import { FaQuoteLeft } from "react-icons/fa6";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const UserMyReview = () => {
  const [allReviews,refetch] = useAllReviewData();
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth();
  const review = allReviews?.filter((item) => item.email === user.email);

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
         
          axiosSecure.delete(`/allReviews/${id}`)
          .then(res =>{
               if(res.data.deletedCount > 0){
               refetch();
              Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success"
            });   
               }
          })
          }
        });
}

  return (
    <div>
      {review?.map((item) => (
        <div
          key={item._id}
          className=" shadow-lg py-8 px-5 border rounded my-5 mx-10"
        >
          <div className=" flex items-center justify-between">
            <div>
              <div className=" flex items-center gap-2 mb-3">
                <img
                  src={item.userImg}
                  alt=""
                  className=" object-cover border-2 w-16 h-16 rounded-full"
                />
                <div className=" text-gray-500">
                  <h2 className=" text-lg font-semibold">{item.userName}</h2>
                  <p className=" flex items-center gap-2">
                    <FaCalendarAlt /> {item.displayDate}
                  </p>
                </div>
              </div>
              <h2 className=" text-lg font-semibold">{item.title}</h2>
            </div>
            <FaQuoteLeft size={50} className=" text-[#ffb900] opacity-60" />
          </div>
          <p className=" py-5 text-lg font-semibold text-gray-500">
            {item.description}
          </p>
          <Rating
            style={{ maxWidth: 120, color: "blue" }}
            value={item.rating}
            readOnly
            className="py-2"
          />
          <hr />
          <div className="pt-5 flex items-center justify-between gap-3">
            <div>
              <h2 className=" text-xl font-semibold">{item.agentName}</h2>
              <p className=" text-sm text-gray-500">Agent</p>
            </div>
            <Link onClick={()=>handleDelete(item._id)}> 
              <button className=" bg-red-500  mt-4 hover:bg-transparent hover:text-red-500 border-2 border-red-500 font-semibold  text-white p-3 rounded  w-full px-14 flex items-center gap-2"><MdDelete /> Delete</button>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserMyReview;
