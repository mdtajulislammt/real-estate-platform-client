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
     const {offerAmount} = propertyDetails || {}
     console.log(offerAmount);

    



     return (
          <div>
              <DashboardHeader heading={'Payment'}></DashboardHeader> 
              <div>
                    <div className=" border md:p-10 md:m-10 rounded-xl h-52 shadow-lg bg-[#ffffff]">
                         <Elements stripe={stripePromise}>  
                         <CheckOutForm offerAmount={offerAmount}></CheckOutForm>
                         </Elements>
                    </div>
              </div>
          </div>
     );
};

export default Payment;