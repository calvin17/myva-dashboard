import React from 'react';
import PropTypes from 'prop-types';

const TodoCard = ({ title, count, percent, cardclass }) => {
  return (
    <div className={cardclass}>
      <div className="todo-card">
        <div className="info">
          <h3>{title}</h3>
          <h1>{count}</h1>
        </div>
        <div className="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
        <div className="percentage">
          <p>+{percent}%</p>
        </div>
      </div>
    </div>
  </div>
)};

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  cardclass: PropTypes.string.isRequired,
};

export default TodoCard;
