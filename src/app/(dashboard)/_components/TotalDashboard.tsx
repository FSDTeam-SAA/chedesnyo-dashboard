import React from 'react'
import OverViewCard from './OverViewCard'
import EarningsOverviewChart from './EarningsChart'

function TotalDashboard() {
  return (
    <div className='pt-7 px-2'>
        <OverViewCard />
        <EarningsOverviewChart />
    </div>
  )
}

export default TotalDashboard