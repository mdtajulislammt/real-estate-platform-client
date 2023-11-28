import { FaCalendarAlt, FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
const Review = ({review}) => {
     const {
          title,
          agentName,
          description,
          rating,
          displayDate,
          userName,
          userImg,
     } = review ||{};
    
     return (
         <div className=" shadow-lg py-8 px-5 border rounded my-5">
          <div className=" flex items-center justify-between">
               <div>
               <div className=" flex items-center gap-2 mb-3">
                    <img src={userImg} alt="" className=" object-cover border-2 w-16 h-16 rounded-full" />
                    <div className=" text-gray-500">
                         <h2 className=" text-lg font-semibold">{userName}</h2>
                    <p className=" flex items-center gap-2"><FaCalendarAlt /> {displayDate}</p>
                    </div>
               </div>
               <h2 className=" text-lg font-semibold">{title}</h2>
               </div>
               <FaQuoteLeft  size={50} className=" text-[#ffb900] opacity-60"/>

          </div>
          <p className=" py-5 text-lg font-semibold text-gray-500">{description}</p>
          <Rating style={{ maxWidth: 120 , color: 'blue' }} value={rating}   readOnly className="py-2" />
          <hr />
          <div className="pt-5 flex items-center gap-3">
               {/* <img src={agentImg} alt="" className=" object-cover border-2 w-16 h-16 rounded-full" /> */}
               <div>
                    <h2 className=" text-xl font-semibold">{agentName}</h2>
                    <p className=" text-sm text-gray-500">Agent</p>
               </div>
          </div>
         </div>
     );
};

export default Review;