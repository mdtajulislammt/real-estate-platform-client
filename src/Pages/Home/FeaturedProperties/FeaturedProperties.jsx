

import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useFeaturedata from "../../../Hooks/useFeaturedata";
import FeatureItem from "../../../Sheard/Navbar/FeatureItem/FeatureItem";


const FeaturedProperties = () => {
  const [features] = useFeaturedata();
  return (
     <Container>
      <SectionTitle 
      subHeading={'Featured Properties'} 
      heading={'Featured '} 
      heading2={' Properties'} 
      shortDes={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'}
      ></SectionTitle>
    <div className="grid grid-cols-1 gap-8">
      {features.map((feature, index) => (<>
      <FeatureItem key={index} card={feature}></FeatureItem>
      
      </>
        
        
      ))}
    </div>
   
    </Container>
  );
};

export default FeaturedProperties;
