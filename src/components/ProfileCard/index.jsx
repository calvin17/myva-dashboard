import React from 'react';
import PropTypes from 'prop-types';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const ProfileCard = ({ userName, userProfile }) => {
  return (
    <div class="user-profile">
        <div class="logo">
            <AccountCircleRoundedIcon />
            <h2>{userName}</h2>
            <p>{userProfile}</p>
        </div>
    </div>
)};

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProfileCard;
