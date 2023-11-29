import { FaLocationArrow, FaMoneyCheckDollar, FaQuoteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const UserBoughtCard = ({item}) => {
     const {_id,img,title,location,maxPrice,minPrice,agentName,offerAmount,status} = item || {}

  console.log(status);

     return (
          <div>
               
               <div  className=" shadow-lg py-8 px-5 border rounded m-10">
                         <img src={img} alt="" className=" w-full h-52  object-cover mb-4" />
                    <div className=" flex items-center justify-between">
                         <div>
                         <h2 className=" text-lg font-semibold">{title}</h2>
                         <p className=" flex items-center gap-2 text-gray-500 font-semibold"><FaLocationArrow/> {location}</p>
                         </div>
                         <FaQuoteLeft  size={50} className=" text-[#ffb900] opacity-60"/>
          
                    </div>
                    <p className=" py-2 text-xl font-bold ">$ {minPrice} - $ {maxPrice}</p>
                    
                    <hr />
                    <div className="pt-5 flex items-center justify-between gap-3">
                         {/* <img src={agentImg} alt="" className=" object-cover border-2 w-16 h-16 rounded-full" /> */}
                         <div>
                              <h2 className=" text-xl font-semibold">{agentName}</h2>
                              <p className=" text-sm text-gray-500">Agent</p>
                         </div>
                         <div className="">
                         <h1 className=" text-xl font-semibold p-1 px-2 bg-[#ffb900]">Offer: $ {offerAmount}</h1>
                         {
                              // todo status == accepted change
                              status == "pending" ?<Link to={`/dashboard/userBought/payment/${_id}`}><button className=" text-xl font-semibold p-1 px-2 flex items-center justify-center gap-2 hover:text-white bg-[#ffb900] mt-2 w-full" ><FaMoneyCheckDollar /> Pay</button></Link> : <button className=" text-xl font-semibold disabled:bg-slate-400 p-1 px-2 bg-[#ffb900] mt-2 w-full" disabled >{status}..</button>
                         }
                         </div>
                    </div>
                   </div>
          </div>
     );
};

export default UserBoughtCard;