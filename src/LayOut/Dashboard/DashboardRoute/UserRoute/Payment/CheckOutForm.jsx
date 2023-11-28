import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../../Hooks/useAuth";

const CheckOutForm = ({offerAmount}) => {
     const [error,setError] = useState();
     const [clientSecret,setClientSecret] = useState()
     const {user} = useAuth()
     const stripe = useStripe();
     const elements = useElements();
     const axiosSecure = useAxiosSecure();
     console.log(offerAmount);


     useEffect(()=>{
          axiosSecure.post('/create-payment-intent',{price:offerAmount})
          .then(res=>{
               console.log(res.data.clientSecret)
               setClientSecret(res.data.clientSecret)
          })
     },[axiosSecure,offerAmount ])

     const handleSubmit =  async (event) =>{
          event.preventDefault();

          if(!stripe || !elements){
               return ;
          }

          const card = elements.getElement(CardElement)

          if(card === null){
               return ;
          }

          const {error,paymentMethod} = await stripe.createPaymentMethod({
               type:'card',
               card
          })

          if(error){
               console.log('payment error', error);
               setError(error.message);
          }else{
               console.log('payment method', paymentMethod);
               setError('');
          }

          //confirm payment
           const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
               payment_method: {
                    card: card,
                    billing_details:{
                         email:user?.email || 'anonymous',
                         name: user?.displayName || 'anonymous'
                    }
               }
           })

           if(confirmError){
               console.log('confirm error');
           }else{
               console.log('payment intent' , paymentIntent);
           }

          
     }
     return (
          <form onSubmit={handleSubmit}> 
               <CardElement
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#000000',
              '::placeholder': {
                color: '#000000',
              },
            },
            invalid: {
              color: '#000000',
            },
          },
        }}
      />
      <div className=" flex justify-end">
      <button className=" bg-[#ffb900] rounded mt-10 text-xl  px-5 p-1 font-bold "  type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
      </div>
      <p className=" text-red-500">{error}</p>
          </form>
     );
};

export default CheckOutForm;