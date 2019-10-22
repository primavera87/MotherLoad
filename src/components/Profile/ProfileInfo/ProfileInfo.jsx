import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
  <div>

    <div>
      <img src='https://img.pngio.com/beach-png-transparent-beachpng-images-pluspng-the-beach-png-2555_1600.jpg'></img>
    </div>
      <div className={s.descriptionBlock}>
      ava + description
      </div>
  </div>
  )
}

export default ProfileInfo;
