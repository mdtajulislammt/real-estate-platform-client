import { useParams } from "react-router-dom";
import useUserWishOffer from "../../../../../Hooks/useUserWishOffer";
import DashboardHeader from "../../../DashboardHeader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
const Payment = () => {
     const [userWishOffer] = useUserWishOffer();

     const {id} =useParams();
     const propertyDetails = userWishOffer?.find( item => item._id === id);
     const {offerAmount , title, location ,agentEmail} = propertyDetails || {}
 console.log(propertyDetails);

    



     return (
          <div>
              <DashboardHeader heading={'Payment'}></DashboardHeader> 
              <div>
                    <div className=" border md:p-10 md:m-10 rounded-xl  shadow-lg bg-[#ffffff]">
                         <Elements stripe={stripePromise}>  
                         <CheckOutForm
                         propertyDetails={propertyDetails}
                          offerAmount={offerAmount}
                           title={title}
                           location={location}
                           agentEmail={agentEmail}
                           id={id}
                           ></CheckOutForm>
                         </Elements>
                    </div>
              </div>
          </div>
     );
};

export default Payment;