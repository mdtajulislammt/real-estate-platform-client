import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useAllPropertiesData from "../../../../../Hooks/useAllPropertiesData";
import Swal from "sweetalert2";
import useAuth from "../../../../../Hooks/useAuth";

const AddPropertyupdate = () => {
     const axiosSecure = useAxiosSecure()
     const [allProperties] = useAllPropertiesData();
     const {user} = useAuth()
     const {id} = useParams()
  const { register, handleSubmit,reset,formState: { errors },} = useForm();

  const property = allProperties?.find(item=> item._id === id)

  const {description,img,title,location,maxPrice,minPrice} = property || {}



 


  

  const onSubmit = async (data) => {
    const propertyInfo = {
      title: data.title,
      location: data.location,
      agentName: user.displayName,
      agentImage: user.photoURL,
      verificationStatus: data.verificationStatus,
      description: data.description,
      img: data.img,
      maxPrice: data.maxPrice,
      minPrice: data.minPrice,
      status: "pending",
      agentEmail: user.email,
    };
    console.log(data);

     //property Update

          axiosSecure.put(`/allProperties/${id}`,propertyInfo)
          .then(res=>{  
               console.log(res.data.modifiedCount);
               if(res.data.modifiedCount > 0){
                Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: `Property successfully updated`,
                     showConfirmButton: false,
                     timer: 1500
                   });
                   reset();
               }
            })
       
  };
  return (
    <div className=" mx-8 lg:mx-20 my-5 border p-4 rounded-xl bg-slate-200">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* tilte */}
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Property Title</span>
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Title"
            defaultValue={title}
            className="input input-bordered w-full "
          />
        </div>
        {/* location */}
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Property location</span>
          </label>
          <input
            {...register("location", { required: true })}
            type="text"
            placeholder="location"
            defaultValue={location}
            className="input input-bordered w-full "
          />
        </div>
        <div className=" flex items-center gap-5 mb-4">
          {/* Agent Name */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Agent Name</span>
            </label>

            <input
              type="text"
              placeholder="Agent Name"
              defaultValue={user.displayName}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          {/* Agent Image */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Agent Image</span>
            </label>
            <input
              type="text"
              placeholder="Agent Image URL"
              defaultValue={user.photoURL}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
        </div>
        <div className=" flex items-center gap-5 mb-4">
          {/* verificationStatus */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Verification Status</span>
            </label>
            <input
              {...register("verificationStatus")}
              type="text"
              placeholder=""
              defaultValue={"not verified"}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          {/* Property Image */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Property Image</span>
            </label>
            <input
              {...register("img", { required: true })}
              type="text"
              defaultValue={img}
              placeholder="Property Image URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="">
          {/* Amount Current */}
          <div className=" flex items-center gap-2">
            {/* minimum */}
            <div className="form-control w-full my-2">
              <label className="label">
                <span className="label-text">$ Minimum</span>
              </label>
              <input
                {...register("minPrice", { required: true })}
                type="number"
                placeholder="MinPrice" 
                defaultValue={minPrice}
                className="input input-bordered w-full "
              />
            </div>
            {/* maximum  */}
            <div className="form-control w-full my-2">
              <label className="label">
                <span className="label-text">$ Maximum</span>
              </label>
              <input
                {...register("maxPrice", { required: true })}
                type="number"
                placeholder="maxPrice"
                defaultValue={maxPrice}
                className="input input-bordered w-full "
              />
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              {...register("description", { required: true })}
              type="text"
              defaultValue={description}
              className="input input-bordered w-full h-28 "
            />
          </div>
        </div>
        <input
          type="submit"
          value={'Update'}
          className=" bg-green-500 p-2 px-8 font-semibold text-white rounded border-2 border-green-500 hover:text-black cursor-pointer hover:bg-transparent"
        />
      </form>
    </div>
  );
};

export default AddPropertyupdate;
