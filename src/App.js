import './App.css';
// import Header from './component/Header';
// import Blogs from './component/Blogs';
// import  Pegination  from './component/Pegination';
import './index.css';
import { Home } from './Home';
import { TagPage } from './TagPage';
import { BlogPage } from './BlogPage';
import { CategoryPage } from './CategoryPage';
import { useContext,useEffect } from 'react';
import { Appcontext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';

function App() {
  const{fetchblogData}=useContext(Appcontext);

const[searchParams,setsearchParams]=useSearchParams();
const location=useLocation();


useEffect(()=>{
  const page=searchParams.get("page") ?? 1;

  if (location.pathname.includes("tag")) {
    //esse tag bala show krna ho
    const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchblogData(Number(page),tag);
  }
  else if (location.pathname.includes("categories")) {
    const category=location.pathname.split("/").at(-1).replace("-"," ");
    fetchblogData(Number(page),null,category);
  }else{
    fetchblogData(Number(page));
  }
},[location.pathname,location.search]);


  //not click ko call krne ke liye
  // useEffect(()=>{
  //   fetchblogData();
  // },[])
  //[]==is braket na lgane se data infinite baar liya jata h
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tag/:tagName" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
    
    //only bina click bala code likhe tb
    // <div className="w-full h-full flex flex-col items-center justify-center gap-x-1 ">
      //{/* <Header></Header>
     // <Blogs/>
     // <Pegination/> */}
    // </div>
}

export default App;
