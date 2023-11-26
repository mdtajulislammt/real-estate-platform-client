import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)
     const googleProvider = new GoogleAuthProvider();
     const axiosPublic = useAxiosPublic()

     //google login
     const googleSignIn = ()=>{
          setLoading(true);
          return signInWithPopup(auth,googleProvider)
     }

     // signup 
     const signUp = (email,password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
     }

     // signIn 
     const signIn = (email,password) =>{

          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }

     //logOut

     const logOut = () =>{
          setLoading(true)
          return signOut(auth)
     }

     //update user 
     const updateUserprofile = (name, img) =>{
          return updateProfile(auth.currentUser,{
                 displayName: name, photoURL : img
           })
      }


     //user manage 
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                 setUser(currentUser);
                 if(currentUser){
                    //get token and store client
                    const userInfo = {email: currentUser.email}
                    axiosPublic.post('/jwt',userInfo)
                    .then(res=>{
                         if(res.data.token){
                              localStorage.setItem('access-token', res.data.token)
                              setLoading(false);
                         }
                    })
                 }else{
                    localStorage.removeItem('access-token')
                    setLoading(false);
                 }
               
                 
            })
            return()=>{
                 return unsubscribe();
            }
       },[axiosPublic])


     const authInfo = {
          user,
          loading,
          signUp,
          signIn,
          logOut,
          updateUserprofile,
          googleSignIn
     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;