import { useState, useEffect } from 'react'
import App from './App';
import { useParams, Link } from 'react-router-dom';

const Post = ({ posts, auth, destroyPost, updatePost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  const [deets, setDeets] = useState('');

  useEffect(()=> {
    const post = posts.find(post => post._id === id);
    if(post){
      setDeets(post.description)
    }

  }, [posts, id]);

  if(!post){
    return null;
  }

const save = (ev)=> {
  ev.preventDefault();
  const post = { id, deets}
  updatePost(post);
};

  return (
    <div>
      <h1>{ post.title }</h1>
      <p>{ post.description }</p>
      <form onSubmit={ save }>
        <input value={ deets } onChange={ev => setDeets(ev.target.value)}/>
        <button disabled={ post.description === deets }>Update</button>
      </form>
      { auth._id === post.author._id ? <button onClick={ ()=> destroyPost(post)}>x</button>: ''}
    </div>
  );
};

export default Post;
