import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
const Review = () => {
    
     return (
         <div className=" shadow-lg py-8 px-5 border rounded">
          <div className=" flex items-center justify-between">
               <h2 className=" text-lg font-semibold">Great Work</h2>
               <FaQuoteLeft  size={50} className=" text-[#ffb900] opacity-60"/>

          </div>
          <p className=" py-5 text-lg font-semibold text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus temporibus pariatur reiciendis suscipit impedit? Expedita!</p>
          <Rating style={{ maxWidth: 120 , color: 'blue' }} value={3}  readOnly className="py-2" />
          <hr />
          <div className="pt-5 flex items-center gap-3">
               <img src='' alt="" className=" border-2 w-16 h-16 rounded-full" />
               <div>
                    <h2 className=" text-xl font-semibold">Tajul Islam</h2>
                    <p className=" text-sm text-gray-500">location</p>
               </div>
          </div>
         </div>
     );
};

export default Review;