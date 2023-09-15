import { useState, useEffect } from 'react'
import App from './App';

import { useParams, Link } from 'react-router-dom';

const Post = ({ posts, auth, destroyPost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  if(!post){
    return null;
  }
  return (
    <div>
      <h1>{ post.title }</h1>
      <p>{ post.description }</p>
      { auth._id === post.author._id ? <button onClick={ ()=> destroyPost(post)}>x</button>: ''}
    </div>
  );
};

export default Post;
