import React from 'react';
import PropTypes from 'prop-types';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';

const ETCard = ({ title }) => {
  return (
    <>
       <h2>{title}</h2>
        <div class="et-list">
            <div class="et-info">
                <LocalMallRoundedIcon />
                <h2>Delete</h2>
                <p>test</p>
            </div>
            <div class="et-info">
                <AccountBalanceRoundedIcon />
                <h2>Account</h2>
                <p>test</p>
            </div>
            <div class="et-info">
                <CurrencyRupeeRoundedIcon />
                <h2>Current</h2>
                <p>test</p>
            </div>
            <div class="et-info">
                <SavingsRoundedIcon />
                <h2>Save</h2>
                <p>test</p>
            </div>
        </div>
    </>
)};

ETCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ETCard;
