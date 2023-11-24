
const SectionTitle = ({subHeading,heading,shortDes,heading2}) => {
     return (
          <div className=" mx-auto text-center md:w-5/12 my-8">
              <p className=" text-[#ffb900] mb-2 bg-[#4b4a4a] p-1 rounded-xl
               w-2/6 mx-auto">{subHeading} </p> 
              <h3 className=" text-3xl bg-black text-white rounded mb-3 font-bold uppercase py-4">{heading}<span className=" text-[#ffb900]">{heading2}</span></h3>
              <p>{shortDes}</p>
          </div>
     );
};

export default SectionTitle;