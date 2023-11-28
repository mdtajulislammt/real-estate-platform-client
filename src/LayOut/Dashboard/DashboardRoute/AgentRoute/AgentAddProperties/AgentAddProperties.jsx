import { Link } from "react-router-dom";
import DashboardHeader from "../../../DashboardHeader";



const AgentAddProperties = () => {
     return (
          <div>
               <DashboardHeader heading={'My Added Properties'}></DashboardHeader>
               <div>
                    <Link><button>Add Property</button></Link>
               </div>
               <div className=" mx-8 lg:mx-20 my-5 border p-4 rounded-xl bg-slate-200">
               <form
               // onSubmit={handleSubmit(onSubmit)}
               >
          {/* tilte */}
          <div className="form-control w-full my-2">
          
            <label className="label">
              <span className="label-text">
                Property Title 
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={'title'}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          {/* location */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Property location 
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={'location'}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          <div className=" flex items-center gap-5 mb-4">
            {/* Buyer Name */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Buyer Name
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={'user.displayName'}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
             {/* Buyer Email */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Buyer Email
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={'user.email'}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          </div>
          <div className=" flex items-center gap-5 mb-4">
            {/* agent Name */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Agent Name
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={'agentName'}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
             {/* Buying Date */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Buying Date
              </span>
            </label>
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="input input-bordered w-full "/> */}
          </div>
          </div>
          <div className=" flex items-center gap-5 mb-4">
            {/* agent Name */}
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
                Make Offer Amount 
              </span>
            </label>
            <input
          //     {...register("offerAmount",{required:true})}
              type="number"
              placeholder="$ Amount"
              className="input input-bordered w-full "
              
            />
          </div>
             {/* Amount Current */}
          <div className=" flex items-center gap-2">
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
              $ Minimum 
              </span>
            </label>
            <input
              
              type="text"
              placeholder=""
              defaultValue={'minPrice'}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">
              $ Maximum
              </span>
            </label>
            <input
             
              type="text"
              placeholder=""
              defaultValue={'maxPrice'}
              className="input input-bordered w-full "
              readOnly
            />
          </div>
          </div>
          </div>
          <input type="submit" value="Offer" className=" bg-green-500 p-2 px-8 font-semibold text-white rounded border-2 border-green-500 hover:text-black cursor-pointer hover:bg-transparent" />
        </form>
               </div>
          </div>
     );
};

export default AgentAddProperties;