import Swal from "sweetalert2";
import useAllReviewData from "../../../../../Hooks/useAllReviewData";
import DashboardHeader from "../../../DashboardHeader";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";

const AdminManageReview = () => {
     const [allReviews,refetch] = useAllReviewData();
     console.log(allReviews);
     const axiosSecure = useAxiosSecure();

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
              
               axiosSecure.delete(`/allReviews/${id}`)
               .then(res =>{
                    if(res.data.deletedCount > 0){
                    refetch();
                   Swal.fire({
                   title: "Deleted!",
                   text: "Review has been deleted.",
                   icon: "success"
                 });   
                    }
               })
               }
             });
     }
     return (
          <div>
               <DashboardHeader heading={'Manage Reviews'}></DashboardHeader>
               <div>
               <div className="overflow-x-auto mx-5  ">
  <table className="table table-xs my-2 ">
    <thead>
      <tr>
        <th>No.</th> 
        <th>Reviewer Image</th> 
        <th>Reviewer Email</th> 
        <th>Reviewer Name</th> 
        <th>Review</th> 
        <th>Delete</th> 
      </tr>
    </thead> 
    <tbody >
      {
          allReviews?.map((property, index)=><tr key={property._id} className=" bg-gray-200 font-bold " >
          <th className="py-4">{index+1}</th> 
          <td><img src={property.userImg} alt="" className=" w-14 rounded-full" /></td> 
          <td>{property.email}</td> 
          <td>{property.userName}</td> 
          <td>{property.rating}</td> 

          
          <td><button
           onClick={()=> handleDelete(property._id)}
           className=" bg-red-500 p-1 text-xl font-medium text-white hover:text-black px-2 rounded"><MdDelete /></button></td>  

        </tr>)
      }
      
    </tbody> 
    
  </table>
</div>
               </div>
               
          </div>
     );
};

export default AdminManageReview;