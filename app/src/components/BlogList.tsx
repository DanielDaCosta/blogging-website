import {Link} from 'react-router-dom'
import React from 'react';

type Props = {
    blogs: {
        author: string,
        title: string,
        body: string, 
        id: string,
    }[],
    title: string
}

const reactionEmoji = {
    thumbsUp: '👍',
    rocket: '🚀',
}

const BlogList = ({blogs, title}: Props) => {

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-header">
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                    </div>
                </Link>
                    <button className="right-button">{reactionEmoji.thumbsUp} 12 </button>
                    <button className="right-button">{reactionEmoji.rocket} 10 </button>
            </div>
          ))}
        </div>
    );
}
 
export default BlogList;