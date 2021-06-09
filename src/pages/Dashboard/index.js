import React from 'react';
import api from '~/services/api';

const Dashboard = () => {
  api.get('users');

  return <h1>Dashboard</h1>;
};

export default Dashboard;
