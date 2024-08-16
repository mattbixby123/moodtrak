import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Main from '@/components/Main';
import React from 'react'
export const metadata = {
  title: "moodtrak ⋅ Dashbaord",
};

const DashboardPage = () => {


  const isAuthenticated = false

  let children = (
    <Login />
  )

  if (isAuthenticated) {
    children = (
      <Dashboard />
    )
  }
  return (
    <Main>
      {children}
    </Main>
  )
}

export default DashboardPage