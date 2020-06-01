import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/e0286edb-2a6f-4c16-a4ec-d762f3b7d4e6">Go To Profile </Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
