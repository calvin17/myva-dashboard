import React from 'react';
import PropTypes from 'prop-types';

const TodoCard = ({ title, count, percent, cardclass }) => {
  return (
    <div class={cardclass}>
      <div class="todo-card">
        <div class="info">
          <h3>{title}</h3>
          <h1>{count}</h1>
        </div>
        <div class="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
        <div class="percentage">
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
