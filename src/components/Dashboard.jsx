import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TodoCard from './TodoCard/index.jsx';
import ETCard from './ETCard/index.jsx';
import CricketCard from './CricketCard/index.jsx';
import ProfileCard from './ProfileCard/index.jsx';
import SchedulerCard from './SchedulerCard/index.jsx';

const Dashboard = () => {
  return (
    <Container>
      <div className="container">
        <main>
            <h2>Task Manager</h2>
            <div className="task-manager">
              <TodoCard title={'Completed'} count={32} percent={77} cardclass={'sales'} />
              <TodoCard title={'Todo'} count={43} percent={45} cardclass={'visits'} />
              <TodoCard title={'Total'} count={28} percent={28} cardclass={'searches'} />
            </div>
            <div className="et-wrapper">
                <ETCard title='Expanse Tracker'/>
            </div>
            <div className="cricket-info">
              <CricketCard title='Cricket Info'/>
            </div>
        </main>

        <div className="right-section">
            <ProfileCard userName='Calvin' userProfile='Fullstack Web Developer' />
            <SchedulerCard title='Reminders' />
        </div>
      </div>
      <Outlet />
    </Container>
  );
};

export default Dashboard;
