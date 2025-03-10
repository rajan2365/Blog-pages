import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Appcontext } from './context/AppContext';
import Header from './component/Header';
import { BlogDetail } from './BlogDetail';
import './index.css';

export const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { setLoading, loading } = useContext(Appcontext);
    const blogId = location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    async function fetchRelated() {
        setLoading(true);
        const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("url is...");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error in fetching related blogs:", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelated();
        }
    }, [blogId]);

    return (
        <div>
            <Header />
            <div className='background'>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mx-auto">
                {loading ? (
                    <p>Loading...</p>
                ) : blog ? (
                    <div>
                        <BlogDetail post={blog} />
                        <h2>Related Blogs</h2>
                        {relatedBlogs.map((post) => (
                            <div key={post.id}>
                                <BlogDetail post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No Blog Found</p>
                )}
            </div>
        </div>
    );
};
