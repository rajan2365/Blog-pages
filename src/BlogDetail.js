import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css';

export const BlogDetail = ({post}) => {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-sm text-red-500">{post.title}</span>
        </NavLink>
        <p className="text-[14px]">
            By<span  className="italic">{post.author}</span>
            on  {" "}    
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className="underline font-bold">{post.category}</span>
            </NavLink>
 </p>

 <p className="text-[14px]">Posted on {post.date}</p>
 <p className="text-[16px] mt-[13px] text-yellow-600">{post.content}</p>
 <div className="flex flex-wrap gap-x-2 items-center">
    {post.tags.map((tag,index)=>(
   <NavLink key={index} to={`/tag/${tag.replaceAll(" ","-")}`}>
    <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
   </NavLink>
    ))

    }
 </div>

    </div>
  )
}
