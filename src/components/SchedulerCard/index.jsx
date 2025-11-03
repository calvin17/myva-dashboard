import React from 'react';
import PropTypes from 'prop-types';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import AddAlertRoundedIcon from '@mui/icons-material/AddAlertRounded';

const notifications = [
    {
        title: 'Workshop 1',
        timePeriod: '08:00 AM - 12:00 PM',
        highPriority: true
    },
    {
        title: 'Workshop 2',
        timePeriod: '09:00 AM - 1:00 PM',
        highPriority: false
    }
];

const SchedulerCard = ({ title }) => {
  return (
    <div class="reminders">
        <div class="header">
            <h2>{title}</h2>
            <span class="material-icons-sharp">
                <NotificationsNoneRoundedIcon />
            </span>
        </div>
        {
            notifications.map(({ title, timePeriod, highPriority }) => {
                return (
                    <div class={`notification ${highPriority && 'deactive'}`}>
                        <div class="icon">
                            <span class="material-icons-sharp">
                            <TaskAltRoundedIcon />
                            </span>
                        </div>
                        <div class="content">
                            <div class="info">
                                <h3>{title}</h3>
                                <small class="text_muted">
                                    {timePeriod}
                                </small>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <div class="notification add-reminder">
            <div>
                <span class="material-icons-sharp">
                    <AddAlertRoundedIcon />
                </span>
                <h3>Add Reminder</h3>
            </div>
        </div>
    </div>
)};

SchedulerCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SchedulerCard;
