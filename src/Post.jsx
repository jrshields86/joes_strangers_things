import { useState, useEffect } from 'react'
import App from './App';

import { useParams, Link } from 'react-router-dom';

const Post = ({ posts, auth, destroyPost, updatePost })=> {
  console.log(updatePost)
  const { id } = useParams();
  console.log(id)
  const post = posts.find(post => post._id === id);
  const [description, setDescription] = useState('');

  useEffect(()=> {
    const post = posts.find(post => post._id === id);
    
    if(post){
      setDescription(post.description)
    }
  }, [posts, id]);

  if(!post){
    return null;
  }

  const save = (ev) => {
    ev.preventDefault();
    const post = { description };
    console.log(post)
    updatePost(post);
  };

  return (
    <div>
      <h1>{ post.title }</h1>
      <p>{ post.description }</p>
      <form onSubmit={ save }>
        <input value={ description } onChange={ ev => setDescription(ev.target.value)}/>
        <Link>{auth._id === post.author._id ? <button disabled={ post.description === description }>Update</button>: ''}</Link>  
      </form>
      { auth._id === post.author._id ? <button onClick={ ()=> destroyPost(post)}>x</button>: ''}
    </div>
  );
};

export default Post;
