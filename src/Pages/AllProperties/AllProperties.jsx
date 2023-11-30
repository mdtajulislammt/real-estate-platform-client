
import { useState } from "react";
import Container from "../../Components/Container";
import useAllPropertiesData from "../../Hooks/useAllPropertiesData";
import AllProperty from "./AllProperty";
import { Link } from "react-router-dom";

const AllProperties = () => {
     const [allProperties] = useAllPropertiesData()
     const [search, setSearch] = useState('')
     const [searchBtn, setSearchBtn]= useState('');

     const handleSearch = (searchBtn)=>{
      setSearch(searchBtn)
    

}
  return (
    <div className="">
      <div className=" ">
        <img
          src="https://i.ibb.co/j6LwFfJ/allproperty-Banner.jpg"
          alt=""
          className=" w-full h-[80vh] object-cover  "
        />
        <div className="relative md:-mt-[200px] -mt-[100px] mb-[80px] md:mb-[200px] lg:mx-32 md:mx-28 mx-14">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                         </svg>
                    </div>
                    <input onChange={(e)=>{setSearchBtn(e.target.value)}} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#ffb900] focus:border-[#ffb900] dark:bg-[#242323] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ffb900] dark:focus:border-[#ffb900]" placeholder="Search Jobs . . ." required />
                    <Link>
                    <button onClick={()=>handleSearch(searchBtn)} type="submit" className="text-black absolute right-2.5 bottom-2.5 bg-[#ffb900] hover:bg-[#ffb900] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#ffb900] dark:hover:bg-[#ffb900] dark:focus:ring-[#ffb900]">Search</button>
                    </Link>
               </div>
      </div>
        <Container>
        <input
  id="customRange1"
  className="form-range"
  type="range"
/>
      <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          allProperties?.filter((property)=>{

            if(search == ""){
                 return property;
            }else if (property?.title.toLowerCase().includes(search.toLowerCase())){
                 return property ;
            }
       })?.map(property=><AllProperty key={property._id} property={property}></AllProperty>
          )
        }
      </div>
        </Container>
    </div>
  );
};

export default AllProperties;
