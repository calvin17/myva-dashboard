import React from 'react';
import { Container } from '@mui/material';
import TodoCard from './TodoCard';
import ETCard from './ETCard';
import CricketCard from './CricketCard';
import ProfileCard from './ProfileCard';
import SchedulerCard from './SchedulerCard';

const Dashboard = () => {
  return (
    <Container>
      <div class="container">
        <main>
            <h2>Task Manager</h2>
            <div class="task-manager">
              <TodoCard title={'Completed'} count={32} percent={77} cardclass={'sales'} />
              <TodoCard title={'Todo'} count={43} percent={45} cardclass={'visits'} />
              <TodoCard title={'Total'} count={28} percent={28} cardclass={'searches'} />
            </div>
            <div class="et-wrapper">
                <ETCard title='Expanse Tracker'/>
            </div>
            <div class="cricket-info">
              <CricketCard title='Cricket Info'/>
            </div>
        </main>

        <div class="right-section">
            <ProfileCard userName='Calvin' userProfile='Fullstack Web Developer' />
            <SchedulerCard title='Reminders' />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
