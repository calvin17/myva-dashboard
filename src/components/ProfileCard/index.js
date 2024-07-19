import React from 'react';
import PropTypes from 'prop-types';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';

const ProfileCard = ({ userName, userProfile }) => {
  return (
    <div class="user-profile">
        <Link to={'/profile'}>
            <div class="logo">
                <AccountCircleRoundedIcon />
                <h2>{userName}</h2>
                <p>{userProfile}</p>
            </div>
        </Link>
    </div>
)};

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProfileCard;
