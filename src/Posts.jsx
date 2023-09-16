import { Link } from 'react-router-dom';

const Posts = ({ posts, auth })=> {
  
  return (
    <ul>
      {
        posts.map( post => {
          const price = post.price*1
          console.log(price)
          return (
            <li key={ post._id } className={ post.author._id === auth._id ? 'mine': ''}>
              <Link to={`/posts/${post._id}`}>{ post.title } -- { post.author.username } -- { post.location }</Link> ${ post.price }
            </li>
          );
        })
      }
    </ul>
  );
};

export default Posts;

