import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Review from "./Review";


const ReviewLatest = () => {
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
     <Review></Review>
     <Review></Review>
     <Review></Review>
     </div>
    </div>   
     </Container>
   
  );
};

export default ReviewLatest;
