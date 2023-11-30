import { Link, useParams } from "react-router-dom";
import useAllPropertiesData from "../../Hooks/useAllPropertiesData";
import Container from "../../Components/Container";
import { FaBath, FaBed, FaLocationDot, FaRegBookmark, FaVectorSquare } from "react-icons/fa6";
import PropertyReview from "../../Components/PropertyReview/PropertyReview";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Review from "../Home/ReviewLatest/Review";
import useAllReviewData from "../../Hooks/useAllReviewData";
import { MdVerifiedUser } from "react-icons/md";
import useAllWishlistData from "../../Hooks/useAllWishlistData";

const Propertydetails = () => {
  const {user} = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [allProperties] = useAllPropertiesData();
  const [allReviews] = useAllReviewData();
  const [ ,refetch] = useAllWishlistData()
  const property = allProperties?.find((property) => property._id === id);
  const reviews = allReviews?.filter(review => review.propertyId === id) 
 
  const {
    img,
    title,
    location,
    agentName,
    agentEmail,
    description,
    agentImg,
    maxPrice,
    minPrice,
    verificationStatus,
    status
  } = property || {};

  const handleWishlist = () =>{
    const propertyInfo ={
      email: user.email,
      img,
    title,
    location,
    agentName,
    description,
    agentImg,
    maxPrice,
    agentEmail,
    minPrice,
    verificationStatus,
    status

    }

   axiosSecure.post('/wishlist',propertyInfo)
   .then(res=>{
    console.log(res);
    if(res.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to Wishlist successfully",
        showConfirmButton: false,
        timer: 1500
      });
      refetch();
    }
   })

  }
  return (
    <div className="">
        <img src={img} alt="" className=" w-full h-[80vh] object-cover" />
      <Container>
        <div className=" md:flex flex-row-reverse justify-between md:gap-10 py-10 ">
          <div className="  mt-10 ">
          <div className=" flex md:justify-end justify-center">
          <Link> 
              <button onClick={handleWishlist} className=" bg-[#ffb900] font-semibold    hover:text-white p-3 mb-16 flex items-center gap-2 "><FaRegBookmark /> Add To Wishlist</button>
              </Link>
          </div>
          <div className="card rounded-none  bg-base-100 shadow-xl">
  <figure><img src={agentImg} alt="Movie" className=" h-52 w-full object-cover"/></figure>
  <div className="card-body">
    <h2 className="card-title">{agentName}</h2>
    <p>Licensed Associate Real Estate Broker</p>
     <p></p>
    <div className="lg:flex justify-between ">
              <a
                href="#"
                className="flex items-center p-2 rounded-xl hover:bg-gray-50 hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 m-1"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span className="text-xs">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 rounded-xl hover:bg-gray-50 hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 m-1"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <span className="text-xs">Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 rounded-xl hover:bg-gray-50 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 m-1"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
                <span className="text-xs">Youtube</span>
              </a>
            </div>
  </div>
</div>
          </div>
          <div className=" mt-5 ">
            <h2 className=" text-4xl font-bold">{title}</h2>
            <p className=" text-xl flex items-center gap-2 text-gray-500 mt-2 "><FaLocationDot /> {location}</p>
            <p className=" flex items-center gap-2 text-lg font-semibold text-gray-500"><MdVerifiedUser className=" text-blue-500"/>{verificationStatus}</p>
            <h2 className=" text-3xl font-bold mt-2">${minPrice} - ${maxPrice}</h2>
            <div className="flex justify-between text-center bg-[#ffb900] text-black py-2 border mt-8 border-gray-400 rounded-md  w-full">
              <p className="  px-2">
                <FaBed className=" mx-auto" /> 3 bedroom
              </p>
              <p className=" px-2 border-x border-gray-400">
                <FaBath className=" mx-auto" /> 3 bathroom
              </p>
              <p className=" px-2 ">
                <FaVectorSquare className=" mx-auto" />
                820 sqft
              </p>
            </div>
            <div className=" border-2 rounded-xl shadow-lg  mt-10 p-4">
            <h2 className=" text-3xl font-bold ">Property Details : </h2>
            <p>{description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni incidunt in nobis quis officia. Nobis laboriosam dolorum quis ea inventore quasi iste reiciendis optio velit, cum ad debitis harum fugit doloremque, labore eum. Fugit adipisci ducimus dolorem delectus blanditiis aspernatur fuga provident voluptatibus maxime quam facilis obcaecati facere numquam corporis quod enim aliquam placeat molestias amet minima magnam alias inventore, laboriosam iste? Est voluptatibus nobis porro quas eos mollitia dolorum recusandae possimus ullam ea totam animi reprehenderit impedit aliquam delectus architecto, inventore iusto accusamus beatae! Ab illum omnis, rerum modi soluta et atque beatae cumque dolorem corrupti tempora. Molestias, quo.</p>
            </div>

          </div>
        </div>
        <PropertyReview property={property} refetch={refetch}></PropertyReview>
        <div className="divider"></div> 
        <div>
          <h2 className=" text-3xl font-bold"> All Reviews -</h2>
           {
            reviews?.map((review) =><Review key={review._id}  review={review}></Review>)
           }
        </div>
        
      </Container>
    </div>
  );
};

export default Propertydetails;
