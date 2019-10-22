import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Adopt-Fees-nobkgrd1-768x524.png' />
      { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;
