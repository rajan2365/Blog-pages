import { createContext, useState } from "react";
import { baseUrl } from "./base_url";
import { useNavigate } from "react-router-dom";

//step 1
//context create krna 
export const Appcontext=createContext();

function AppContextProvider({children}){
 const[loading,setLoading]=useState(false);
 const [posts,setposts]=useState([]);
 const[page,setpage]=useState(1);
 const[totalpage,settotalpage]=useState(null);
 const navigation=useNavigate();

//  data filling
async function fetchblogData(page = 1,tag=null,category) {
  setLoading(true)
  let url = `${baseUrl}?page=${page}`;
  //yeh 2 new api call krne ke liye
  if (tag) {
    url+=`&tag=${tag}`;
  }
  if (category) {
    url+=`&category=${category}`;
  }
  try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data)
      setpage(data?.page);
      setposts(data?.posts);
      settotalpage(data?.totalPages);
  }
  catch (event) {
      console.log("Error")
      setpage(1);
      setposts([]);
      settotalpage(null);
  }
  setLoading(false);
}




 function handlepagechange(page){
     navigation({search:`?page=${page}`})
  setpage(page);
//   fetchblogData(page);
 }

 const value={
    loading,
    setLoading,
    posts,
    setposts,
    page,
    setpage,
    totalpage,
    settotalpage,
    fetchblogData,
    handlepagechange
 }

 //step -2
 //context provide krna
 return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}



export default AppContextProvider;
