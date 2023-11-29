import { FaCalendarAlt } from "react-icons/fa";
import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAllReviewData from "../../../Hooks/useAllReviewData";
import { FaQuoteLeft } from "react-icons/fa6";


import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

const ReviewLatest = () => {
  const [allReviews] = useAllReviewData();
  console.log(allReviews);
  return (
     <Container>

        <div className=" py-10">
      <SectionTitle 
      subHeading={'Latest Review'} 
      heading={'Latest'} 
      heading2={' Review '}
      shortDes={'People Love Living with Realton'}
      ></SectionTitle>
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     {
      allReviews?.map(review=><div key={review._id} className=" shadow-lg py-8 px-5 border rounded my-5">
      <div className=" flex items-center justify-between">
           <div>
           <div className=" flex items-center gap-2 mb-3">
                <img src={review.userImg} alt="" className=" object-cover border-2 w-16 h-16 rounded-full" />
                <div className=" text-gray-500">
                     <h2 className=" text-lg font-semibold">{review.userName}</h2>
                <p className=" flex items-center gap-2"><FaCalendarAlt /> {review.displayDate}</p>
                </div>
           </div>
           <h2 className=" text-lg font-semibold">{review.title}</h2>
           </div>
           <FaQuoteLeft size={50} className=" text-[#ffb900] opacity-60"/>

      </div>
      <p className=" py-5 text-lg font-semibold text-gray-500">
        {review.description.slice(0,80)}</p>
      <Rating style={{ maxWidth: 120 , color: 'blue' }} value={review.rating}   readOnly className="py-2" />
      <hr />
      <div className="pt-5 flex items-center gap-3">
           {/* <img src={agentImg} alt="" className=" object-cover border-2 w-16 h-16 rounded-full" /> */}
           <div>
                <h2 className=" text-xl font-semibold">{review.agentName}</h2>
                <p className=" text-sm text-gray-500">Agent</p>
           </div>
      </div>
     </div>).slice(0,3)
     }
     </div>
    </div>   
     </Container>
   
  );
};

export default ReviewLatest;
