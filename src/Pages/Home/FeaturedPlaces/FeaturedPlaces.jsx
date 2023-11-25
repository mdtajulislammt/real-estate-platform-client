import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from "../../../assets/featued/featured1.jpg"
import img2 from "../../../assets/featued/featured2.jpg"
import img3 from "../../../assets/featued/featured3.jpg"
import img4 from "../../../assets/featued/featured4.jpg"
import img5 from "../../../assets/featued/featured5.jpg"
import img6 from "../../../assets/featued/featured6.jpg"
const FeaturedPlaces = () => {
     return (
          <Container>
               <SectionTitle 
      subHeading={'Featured Places'} 
      heading={'Featured'} 
      heading2={' Places IN NYC'}
      shortDes={'People Love Living with Realton'}
      ></SectionTitle>
          <div className="w-full grid lg:columns-4 col-span-2 gap-3 py-10  ">
               {/* image 1 */}
               <div className="col-span-4 ">
                 <div className=" relative   ">
                    <img src={img1} alt="" className="w-full " />
                    <h2 className=" absolute top-0 pl-4  text-4xl font-bold text-white bg-[#00000065] h-full w-full">Fort Greene</h2>
                    
               </div>
               <h1 className=" bg-[#ffb900] p-2 text-xl font-semibold text-center">View Listing</h1>   
               </div>
               {/* image 2 */}
               <div className="col-span-1 h-full ">
                 <div className=" relative   ">
                    <img src={img2} alt="" className="w-full h-full " />
                    <h2 className=" absolute top-0 pl-4 text-xl font-bold text-white bg-[#00000065] h-full w-full">Coney Island</h2>
                    
               </div>
               <h1 className=" bg-[#ffb900] p-2 text-xl font-semibold text-center">View Listing</h1>   
               </div>
               {/* image 3 */}
               <div className="col-span-1 ">
                 <div className=" relative   ">
                    <img src={img3} alt="" className="w-full " />
                    <h2 className=" absolute top-0 pl-4 text-xl font-bold text-white bg-[#00000065] h-full w-full">Crown Heights</h2>
                    
               </div>
               <h1 className=" bg-[#ffb900] p-2 text-xl font-semibold text-center">View Listing</h1>   
               </div>
               {/* image 4 */}
               <div className="col-span-1 h-full">
                 <div className=" relative   ">
                    <img src={img4} alt="" className="w-full h-full" />
                    <h2 className=" absolute top-0 pl-4 text-xl font-bold text-white bg-[#00000065] h-full w-full">Clinton hill</h2>
                    
               </div>
               <h1 className=" bg-[#ffb900] p-2 text-xl font-semibold text-center">View Listing</h1>   
               </div>
               {/* image 5 */}
               <div className="col-span-1 h-full ">
                 <div className=" relative   ">
                    <img src={img5} alt="" className="w-full h-full" />
                    <h2 className=" absolute top-0 pl-4 text-xl font-bold text-white bg-[#00000065] h-full w-full">Williamsburg</h2>
                    
               </div>
               <h1 className=" bg-[#ffb900] p-2 text-xl font-semibold text-center">View Listing</h1>   
               </div>
               {/* image 6 */}
               <div className="col-span-4 ">
                 <div className=" relative   ">
                    <img src={img6} alt="" className="w-full " />
                    <h2 className=" absolute top-0 pl-4 text-4xl font-bold text-white bg-[#00000065] h-full w-full">Downtown Brooklyn</h2>
                    
               </div>
               <h1 className=" bg-[#ffb900] p-2 text-xl font-semibold text-center">View Listing</h1>   
               </div>
               
          </div>     
          </Container>
          
     );
};

export default FeaturedPlaces;