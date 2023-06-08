import axios from "axios";

const baseUrl = process.env.REACT_APP_TRENDZY_BASE_URL;

export const getData = async (id) => {
   
     console.log(id);
   
     try {
       // if (path == "/data/search") {
       let res = await axios.get(`${baseUrl}/${id}`);
       let data = await res.data;
       //console.log(res)
       if(typeof (data)=="object")
       return data;
       else{
         return []
       }
     } catch (err) {
       console.log(err.message);
     }
   };

   