import React from 'react';

import Progress from './components/Progress';
import Dashboard from './components/Dashboard';

export default ({ loading }) => {
  return loading ? <Progress /> : <Dashboard />;
};
