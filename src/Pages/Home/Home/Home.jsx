import Banner from "../Banner/Banner";
import FeaturedPlaces from "../FeaturedPlaces/FeaturedPlaces";
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties";
import ReviewLatest from "../ReviewLatest/ReviewLatest";

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <FeaturedProperties></FeaturedProperties>
               <ReviewLatest></ReviewLatest>
               <FeaturedPlaces></FeaturedPlaces>
          </div>
     );
};

export default Home;