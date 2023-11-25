

import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useFeaturedata from "../../../Hooks/useFeaturedata";
import FeatureItem from "./FeatureItem/FeatureItem";


const FeaturedProperties = () => {
  const [properties] = useFeaturedata();
  console.log(properties);
  return (
     <Container>
      <SectionTitle 
      subHeading={'Featured Properties'} 
      heading={'Featured '} 
      heading2={' Properties'} 
      shortDes={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'}
      ></SectionTitle>
    <div className="grid grid-cols-1 gap-8">
      {properties.map((feature) => (<FeatureItem key={feature._id} card={feature}></FeatureItem>
    
        
        
      ))}
    </div>
   
    </Container>
  );
};

export default FeaturedProperties;
