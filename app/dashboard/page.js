import Dashboard from '@/components/Dashboard';
import Loading from '@/components/Loading';
import Login from '@/components/Login';
import Main from '@/components/Main';
import { useAuth } from '@/context/AuthContext';
import React from 'react'

export const metadata = {
  title: "moodtrak ⋅ Dashbaord",
};

const DashboardPage = () => {



  return (
    <Main>
      <Dashboard />
    </Main>
  )
}

export default DashboardPage