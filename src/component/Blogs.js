import React, { useContext } from 'react'
import { Appcontext } from '../context/AppContext'
import { Spinner } from './Spinner';
import { BlogDetail } from '../BlogDetail';


const Blogs = () => {
  // Consume the context
  const { posts,loading } = useContext(Appcontext);
 console.log(posts);
  return (

    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mx-auto">
      {
        loading ? 
        <Spinner />:
        posts.length === 0 ? (
          <div><p>No post found</p></div>
        ) : (
          // Render each post in a Card
          posts.map((post) => (
            
            <BlogDetail key={post.id} post={post}/>
            // <div key={post.id}>
            //   <p className="font-bold text-sm text-red-500">{post.title}</p>
            //   <p className="text-[14px]">
            //     By <span className="italic">{post.author}</span> on{" "} <span className="underline font-bold">{post.category}</span>
            //   </p>
            //   <p className="text-[14px]">Posted on {post.date}</p>
            //   <p className="text-[16px] mt-[13px] text-yellow-600">{post.content}</p>
            //   <div className="flex flex-wrap gap-x-2 items-center">
            //     {post.tags.map((tag, index) => (
            //       <span className="text-xs font-semibold underline text-blue-700 cursor-pointer" key={index}>{`#${tag}`}</span>
            //     ))}
            //   </div>
            // </div>
          ))
        )
      }
    </div>
  );
};

export default Blogs;
