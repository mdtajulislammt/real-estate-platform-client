import banner from "../../../assets/Banner1.jpg"
const Banner = () => {
     return (
          <div>
               <div className="carousel w-full lg:h-[600px]">
        <div className="carousel-item relative w-full">
          
          <img
            src={banner}
            className="w-full object-cover"
          />
          <div className="absolute h-full w-full  left-0 top-0 bg-gradient-to-r from-[#00000063] to-[#adabab2f] ">
            <div className=" text-white space-y-3 md:space-y-7 flex flex-col justify-center items-center h-4/5 ">
               <p>THE BEST WAY TO</p>
              <h2 className=" text-xl md:text-4xl lg:text-6xl font-bold text-[#ffffff] uppercase">
                
                Find Your Dream Home
              </h2>
              <p className='text-white text-xs lg:text-lg '>
              From as low as $10 per day with limited time offer discounts. 
              </p>
              
            </div>
          </div>
        </div>
      </div>
          </div>
     );
};

export default Banner;