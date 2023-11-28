import Banner from "../Banner/Banner";
import FeaturedPlaces from "../FeaturedPlaces/FeaturedPlaces";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";
import ReviewLatest from "../ReviewLatest/ReviewLatest";
import SpacialProperty from "../SpacialProperty/SpacialProperty";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <FeaturedProperties></FeaturedProperties>
               <ReviewLatest></ReviewLatest>
               <FeaturedPlaces></FeaturedPlaces>
               <SpacialProperty></SpacialProperty>
          </div>
     );
};

export default Home;