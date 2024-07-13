import React from 'react';
import PropTypes from 'prop-types';

const CricketCard = ({ title }) => {
  return (
    <>
        <h2>{title}</h2>
        <table>
            <thead>
                <tr>
                    <th>Matches</th>
                    <th>Date/Time</th>
                    <th>Place</th>
                    <th>Tournament</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <a href="#">Show All</a>
    </>
)};

CricketCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CricketCard;
