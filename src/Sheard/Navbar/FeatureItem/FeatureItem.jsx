import { FaLocationDot,FaBed,FaBath,FaVectorSquare, FaPhone, FaPerson, FaVoicemail } from "react-icons/fa6";
const FeatureItem = ({ card }) => {
  console.log(card.img);
  return (
    <div className=" lg:flex  justify-between  bg-base-100 rounded-3xl shadow-xl ">
      <div className="lg:flex lg:rounded-l-3xl rounded-t-r-xl card-side  lg:w-9/12 ">
        <figure className="rounded-t-3xl">
          <img
            src={card.img}
            alt="property"
            className=" rounded-t-3xl h-full w-full object-cover  
                  hover:scale-125
                  hover:rotate-12
                  transition"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <p className=" flex items-center text-gray-500 -mt-1 text-sm">
            <FaLocationDot />
            {card.location}
          </p>
          <p className="lg:w-4/5 my-3 text-gray-500">{card.description.slice(0, 100)}</p>
          <div className=" lg:flex justify-between text-center text-gray-500 py-2 border border-gray-400 rounded-md">
            <p className=" flex items-center gap-2 px-5"><FaBed/> 3 bedroom</p>
            <p className="flex items-center gap-2 px-5 border-x border-gray-400"><FaBath/> 3 bathroom</p>
            <p className=" flex items-center gap-2 px-5 "><FaVectorSquare/>820 sqft</p>
          </div>
          <div className="">
            <button className="btn  w-full bg-[#ffb900] hover:bg-[#ffd563f8] text-black">Details</button>
          </div>
        </div>
      </div>

      <div className=" w-full flex-1 px-8 py-10  lg:pt-20 bg-black lg:rounded-r-3xl rounded-b-3xl ">
        <h2 className=" text-4xl font-bold mb-14 text-[#ffb900]  text-center">${card.price} <span className=" text-base text-slate-300">/month</span></h2>
        <div className=" flex gap-4">
          <p className=" flex items-center gap-2 cursor-pointer bg-[#ffb900] px-2 p-1 rounded "><FaPhone /> Call</p>
          <p className=" flex items-center gap-2 cursor-pointer  bg-[#ffb900] px-2 p-1 rounded"><FaVoicemail /> Email</p>
          <p className=" flex items-center gap-2 cursor-pointer  bg-[#ffb900] px-2 p-1 rounded"><FaPhone /> WhatsApp</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
