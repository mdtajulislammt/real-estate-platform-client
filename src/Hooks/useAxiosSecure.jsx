import axios from "axios";
import useAuth from "./useAuth"; 
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
     baseURL:'https://real-estate-platform-server.vercel.app'
})

const useAxiosSecure = () => {
     const navigate = useAuth()
     const {logOut} = useContext(AuthContext)
     axiosSecure.interceptors.request.use(function(config){
          const token = localStorage.getItem('access-token');
          config.headers.authorization = `Bearer ${token}`;
          return config ;
     },function(error){
          return Promise.reject(error);
     });

     axiosSecure.interceptors.response.use(function(response){
          return response ;
     },async (error)=>{
          const status = error.response.status;
          console.log(error);
          if(status== 401 || status==403){
              await logOut()
               navigate('/login');
               
          }
       return Promise.reject(status);    
     })


     return axiosSecure
};

export default useAxiosSecure;