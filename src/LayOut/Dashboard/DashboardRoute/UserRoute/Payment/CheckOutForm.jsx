import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../../Hooks/useAuth";

const CheckOutForm = ({offerAmount , title, location,agentEmail,id}) => {
     
     
     const [error,setError] = useState();
     const [clientSecret,setClientSecret] = useState();
     const [transactionId, setTransactionId] = useState();
     const {user} = useAuth()
     const stripe = useStripe();
     const elements = useElements();
     const axiosSecure = useAxiosSecure();
     const amount = parseFloat(offerAmount)
     console.log(typeof(amount));
     console.log(agentEmail);


     useEffect(()=>{
          axiosSecure.post('/create-payment-intent',{price:amount})
          .then(res=>{
               console.log(res.data.clientSecret)
               setClientSecret(res.data.clientSecret)
          })
     },[axiosSecure,amount ])

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
               if(paymentIntent.status === 'succeeded'){
                    console.log('transaction id',paymentIntent.id);
                    setTransactionId(paymentIntent.id)

                    //save the payment  in the database
                    const payment = {
                         buyerEmail : user.email,
                         buyerName: user.displayName,
                         price : amount,
                         title: title,
                         location: location,
                         date: new Date(),
                         cartId : id,
                         agentEmail : agentEmail
                    }

                   const res = await axiosSecure.post('/payments',payment)

               }
           }

          
     }
     return (
          <form onSubmit={handleSubmit}>
               <p className="px-4 p-2 text-2xl font  rounded-lg mb-5 bg-black text-[#ffb900] flex justify-between "><span>Pay Amount -</span> ${offerAmount}</p> 
               <CardElement
               className=" border-2 p-4 rounded-lg border-[#ffb900] "
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
      {
          transactionId && <p className=" text-green-500">
               Your Transaction id :- {transactionId} </p>
      }
          </form>
     );
};

export default CheckOutForm;