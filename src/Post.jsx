import { useState, useEffect } from 'react'
import App from './App';

import { useParams, Link } from 'react-router-dom';

const Post = ({ posts, auth, destroyPost, updatePost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  const [title, setTitle] = useState('');

  useEffect(()=> {
    const post = posts.find(post => post._id === id);
    if(post){
      setTitle(post.title)
    }
  }, [posts, id]);

  if(!post){
    return null;
  }

  const save = (ev) => {
    ev.preventDefault();
    const post = { id, title };
    updatePost(post);
  };

  return (
    <div>
      <h1>{ post.title }</h1>
      <p>{ post.description }</p>
      <form onSubmit={ save }>
        <input value={ title } onChange={ ev => setTitle(ev.target.value)}/>
        {auth._id === post.author._id ? <button disabled={ post.title === title }>Update</button>: ''}  
      </form>
      { auth._id === post.author._id ? <button onClick={ ()=> destroyPost(post)}>x</button>: ''}
    </div>
  );
};

export default Post;
