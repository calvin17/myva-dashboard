import React from 'react';
import { Container, Grid } from '@mui/material';
import Card from './Card';

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item>
          <Card title="Carde 1" content="Content of card 1" height={250} width={800} />
        </Grid>
        <Grid item>
          <Card title="Card 2" content="Content of card 2" height={250} width={300} />
        </Grid>
        <Grid item>
          <Card title="Card 3" content="Content of card 3" height={250} width={300} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
