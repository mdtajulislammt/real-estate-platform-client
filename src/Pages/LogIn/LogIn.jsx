import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import Container from "../../Components/Container";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const LogIn = () => {
  const {signIn,user}= useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const loc = location.state?.form?.pathname || '/' ;
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =(data) =>{
    signIn(data.email, data.password)
          .then(result=>{
               console.log(result.user);
            Swal.fire({
              title: "User Login Successfully",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            navigate(loc,{replace: true});
          })
  }
     return (
          <Container>
               <section className="h-screen">
  <div className="container h-full px-6 py-10 ">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      {/* <!-- Left column container with background--> */}
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <h2 className=" text-5xl font-semibold bg-black text-[#ffb900] p-2 text-center">LogIn</h2>
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full bg-[#ffb900] p-10"
          alt="Phone image" />
      </div>

      {/* <!-- Right column container with form --> */}
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12 p-4 rounded-lg border-2 border-[#ffb900] shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <!-- Email input --> */}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
            {...register("email",{ required: true })} 
              type="email"
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity"
              
              placeholder="Email address" />
              {errors.email && <span className=" text-red-600 my-2 text-sm">Email is required</span>}
            
          </div>

          {/* <!-- Password input --> */}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
            {...register("password",{ required: true })} 
              type="password"
              className="peer text-black block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity"
              id="exampleFormControlInput33"
              placeholder="Password" />
              {errors.password && <span className=" text-red-600 my-2 text-sm">Password is required</span>}
            
          </div>

          {/* <!-- Remember me checkbox --> */}
          <div className="mb-6 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-400 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="exampleCheck3"
                />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck3">
                Remember me
              </label>
            </div>

            {/* <!-- Forgot password link --> */}
            <a
              href="#!"
              className=" transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Forgot password?</a
            >
          </div>

          {/* <!-- Submit button --> */}
          <input type="submit" value="SignIn" className="  border-2 border-[#ffb900] bg-[#ffb900] flex gap-2 items-center justify-center w-full mb-5 rounded  py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#ffb900] before:transition-transform before:duration-300 before:content-[''] hover:text-white cursor-pointer before:hover:scale-y-100" />
          

          {/* <!-- Divider --> */}
          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  </div>
</section>
          </Container>
          
     );
};

export default LogIn;