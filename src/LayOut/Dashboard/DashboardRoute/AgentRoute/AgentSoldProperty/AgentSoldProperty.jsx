import useAuth from "../../../../../Hooks/useAuth";
import usePaymentsData from "../../../../../Hooks/usePaymentsData";
import DashboardHeader from "../../../DashboardHeader";

const AgentSoldProperty = () => {
     const payments = usePaymentsData();
     const {user} = useAuth();
     const paymentData = payments[0]?.filter(payment => payment.agentEmail === user.email)
     console.log(paymentData);
     
     return (
          <div className=" ">
               <DashboardHeader heading={'My Sold Properties'}></DashboardHeader>
                <div className="overflow-x-auto bg-white rounded-lg m-5 p-5 border-2 h-screen shadow-xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th> No.</th>
        <th>Property Title</th>
        <th>Property Location</th>
        <th>Buyer Email</th>
        <th>Buyer Name</th>
        <th>Sold Price</th>
      </tr>
    </thead>
    <tbody>
    {
                    paymentData?.map((payment,index) =><tr key={payment._id}
                    className=" bg-gray-200  font-semibold">
                         <th>{index +1}</th>
                         <td>{payment.title}</td>
                         <td>{payment.location}</td>
                         <td>{payment.buyerName}</td>
                         <td>{payment.buyerEmail}</td>
                         <td className=" border-l border-white">$ {payment.price}</td>
                       </tr>)
               }
      
    </tbody>
  </table>
</div>
               
          </div>
     );
};

export default AgentSoldProperty;