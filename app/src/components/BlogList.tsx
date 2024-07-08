import {Link} from 'react-router-dom'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { RootState } from '../state/store';
import { addReaction, ReactionsStateType } from '../state/reactions/reactionsSlice';

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

    const reactionsState = useSelector((state: { reactions:  ReactionsStateType[] }) => state.reactions);
    const dispatch = useDispatch();

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
                    <button className="right-button" onClick={() => dispatch(addReaction({id: blog.id, reactionType: "thumbsUp"}))}>
                        {reactionEmoji.thumbsUp}                        
                        {/* {reactionsState.find(reaction => reaction.id === blog.id).reactions.thumbsUp} */}
                        {reactionsState !== undefined ? reactionsState.find(reaction => reaction.id === blog.id)?.reactions.thumbsUp || 0 : 0}
                    </button>
                    <button className="right-button" onClick={() => dispatch(addReaction({id: blog.id, reactionType: "rocket"}))}>
                        {reactionEmoji.rocket}                        
                        {/* {reactionsState.find(reaction => reaction.id === blog.id).reactions.thumbsUp} */}
                        {reactionsState !== undefined ? reactionsState.find(reaction => reaction.id === blog.id)?.reactions.rocket || 0 : 0}
                    </button>
            </div>
          ))}
        </div>
    );
}
 
export default BlogList;