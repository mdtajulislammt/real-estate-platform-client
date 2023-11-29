

import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAllPropertiesData from "../../../Hooks/useAllPropertiesData";

import FeatureItem from "./FeatureItem/FeatureItem";


const FeaturedProperties = () => {
  const [allProperties] = useAllPropertiesData();
  console.log(allProperties);
  return (
     <Container>
      <SectionTitle 
      subHeading={'Featured Properties'} 
      heading={'Featured '} 
      heading2={' Properties'} 
      shortDes={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'}
      ></SectionTitle>
    <div className="grid grid-cols-1 gap-8">
      {allProperties.map((feature) => (<FeatureItem key={feature._id} card={feature}></FeatureItem>
    
        
        
      )).slice(0,4)}
    </div>
   
    </Container>
  );
};

export default FeaturedProperties;
