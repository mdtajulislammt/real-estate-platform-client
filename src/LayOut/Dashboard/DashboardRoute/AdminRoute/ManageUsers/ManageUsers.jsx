import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import DashboardHeader from "../../../DashboardHeader";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";

const ManageUsers = () => {
     const axiosSecure = useAxiosSecure();
     //load data from database
  const { data: users = [],refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //make agent 
  const handleMakeAgent =user=>{
     axiosSecure.patch(`/users/agent/${user._id}`)
     .then(res=>{  
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an Agent Now`,
              showConfirmButton: false,
              timer: 1500
            });
        }
     })
 }
  //make admin 
  const handleMakeAdmin =user=>{
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res=>{ 
      console.log(res);
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an Admin Now`,
              showConfirmButton: false,
              timer: 1500
            });
        }
     })


 }
  //make admin 
  const handleMakeFraud =user=>{
    console.log(user);
     axiosSecure.patch(`/users/fraud/${user._id}`)
     .then(res=>{ 
      console.log(res);
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an Fraud`,
              showConfirmButton: false,
              timer: 1500
            });


        }
     })
 }


  //user delete
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
          axiosSecure.delete(`/users/${id}`)
          .then(res =>{
               if(res.data.deletedCount > 0){
                    console.log(res.data.deletedCount);
               refetch();
              Swal.fire({
              title: "Deleted!",
              text: "Your User has been deleted.",
              icon: "success"
            });   
               }
          })
          }
        });
}
     return (
          <div className="">
               <DashboardHeader heading={'Manage Users'}></DashboardHeader>
              <div>
              <div className="divider"></div>
              <div className="overflow-x-auto mx-5  ">
  <table className="table table-xs my-2 ">
    <thead>
      <tr>
        <th>No.</th> 
        <th>User Name</th> 
        <th>User Email</th> 
        <th>Make Admin</th> 
        <th>Make Agent</th> 
        <th>Fraud</th>  
        <th>Delete User</th>
      </tr>
    </thead> 
    <tbody >
      {
          users?.map((user, index)=><tr key={user._id} className=" bg-gray-200 " >
          <th className="py-4">{index+1}</th> 
          <td>{user.name}</td> 
          <td>{user.email}</td> 
          <td>{ user.role === "admin" ? <button  className=" bg-[#ffb900] p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Admin</button>: <button onClick={()=> handleMakeAdmin(user)} className=" bg-green-500 p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Make Admin</button>}</td> 
          <td>{user.role === "agent" ? <button  className=" bg-[#ffb900] p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Agent</button>:<button onClick={()=> handleMakeAgent(user)} className=" bg-green-500 p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Make Agent</button>}</td> 
          <td>{user.role === "fraud" ? <button  className=" bg-red-400 p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Fraud</button>:<button onClick={()=> handleMakeFraud(user)} className=" bg-red-400 p-1 text-xs font-medium text-white hover:text-black px-3 rounded">Make Fraud</button>}</td>  
          <td><button onClick={()=> handleDelete(user._id)} className=" bg-red-500 p-1 text-xl font-medium text-white hover:text-black px-2 rounded"><AiFillDelete /></button></td>  
        </tr>)
      }
      
    </tbody> 
    
  </table>
</div>
              </div>
          </div>
     );
};

export default ManageUsers;