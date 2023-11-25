import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((res) => {
      console.log(res.user);
      navigate('/')
      
    });
  };
  return (
    <div>
      {/* <!-- Social login buttons --> */}

      {/* <!-- Facebook --> */}

      <button className="relative border-2 border-[#ffb900] flex gap-2 items-center justify-center w-full mb-5 rounded  bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#ffb900] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100">
        <FaFacebookF />
        Continue with Facebook
      </button>

      {/* <!-- Google --> */}
      <button
        onClick={handleGoogleSignIn}
        className="relative flex justify-center  w-full rounded  items-center gap-2 border-2 border-[#ffb900] hover:border-black bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-700 before:content-[''] hover:text-[#ffb900] before:hover:scale-x-100"
      >
        <FaGoogle />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
