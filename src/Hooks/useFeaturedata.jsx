import { useEffect, useState } from "react";


const useFeaturedata = () => {
     const [features,setFeatures] = useState([])
     // const [loading, setLoading] = useState(true)

     useEffect(()=>{
          fetch('/advertisment.json')
          .then(res=>res.json())
          .then(data=>{
               
               setFeatures(data)
               // setLoading(false)
          })
     },[])
     return [features]
};

export default useFeaturedata;