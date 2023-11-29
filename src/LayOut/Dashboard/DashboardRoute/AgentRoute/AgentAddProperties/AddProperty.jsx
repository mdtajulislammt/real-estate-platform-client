import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../../../Hooks/useAuth";


const AddProperty = () => {
     const axiosSecure = useAxiosSecure()
     const {user} = useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {

   

    const propertyInfo = {
      title: data.title,
      location: data.location,
      agentName: data.agentName,
      agentImage:  user.photoURL,
      verificationStatus: data.verificationStatus,
      description: data.description,
      img: data.img,
      maxPrice: data.maxPrice,
      minPrice: data.minPrice,
      status:'pending',
      agentEmail:user.email
    };
    console.log(data);

    const properties = await axiosSecure.post('/allProperties',propertyInfo);
     console.log(properties);
     if(properties.data.insertedId){
          reset();
          Swal.fire({
               position: "top-end",
               icon: "success",
               title: `Property is added Successfully `,
               showConfirmButton: false,
               timer: 1500
             });
     }

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
            defaultValue={""}
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
              {...register("agentName", { required: true })}
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
              {...register("agentImage", { required: true })}
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
          type="text"  id="" className="input input-bordered w-full h-28 " />
        </div>
        </div>
        <input
          type="submit"
          className=" bg-green-500 p-2 px-8 font-semibold text-white rounded border-2 border-green-500 hover:text-black cursor-pointer hover:bg-transparent"
        />
      </form>
    </div>
  );
};

export default AddProperty;
