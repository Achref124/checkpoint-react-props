import React from 'react';
import  propTypes  from 'prop-types';
import './Profile.css'
const Profile = (props) => {

  return (
    <div>
      {props.children}
      <h1 className='fullN'>{props.fullName}</h1> 
      <h2>{props.bio}</h2>
      <p>{props.profession}</p> 
      <button className='btn' onClick={() =>props.handleName(props.fullName)}>click me!</button>      
    </div>
  )
};
Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
};
Profile.defaultProps = {
  profession: 'student'
};

export default Profile