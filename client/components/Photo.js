import React from 'react'
import { Link } from 'react-router-dom'
import {formatPrice} from '../helpers';
import Checkout from './Checkout';

const Photo = (state, dispatch) => {
  const { post, i, comments, increment } = state;
  
  return (
    <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>
          


          <figcaption>
            <p>{post.caption}</p>
            <p>{formatPrice(post.price)}</p>
            <div className="control-buttons">
              <button onClick={() => state.increment(i)} className="likes">&hearts; {post.likes}</button>
              <Link className="button" to={`/view/${post.code}`}>
                <span className="comment-count">
                  <span className="speech-bubble"></span>
                  {comments[post.code] ? comments[post.code].length : 0}
                </span>
              </Link>
              </div>

            <div className="purchase-buttons">
            {/* <button onClick={()=>{addToCart(post.code)}}>Purchase</button> */}
            <Checkout
              name={post.caption}
              description={post.caption}
              amount={post.price}/>

            </div>
          </figcaption>
        </div>
      </figure>
  );   
}

export default Photo