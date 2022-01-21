import React from 'react';
import PropTypes from 'prop-types';
const Profile = (props) => {
  // console.log(props.info.desc);
  return(<div>
      <h3>{props.fullName} - {props.bio} - {props.profession}  </h3>
      {props.children}
  </div>)
  };
  Profile.defaultProps = {
    fullName: "name",
    bio : 'bio',
    profession : 'profession'
  }
  Profile.propTypes = {
    fullName: PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string
  };

export default Profile;
