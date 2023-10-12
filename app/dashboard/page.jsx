'use client';

import React from 'react';
import AppTabs from '../component/tabs';
import Overview from '../component/overview/Overview';
const Dashboard = () => {
  const tabsData = [
    {
      id: '1',
      label: 'Calender',
      content: 'asdfasdfasdfgasdfg'
    },
    { id: '2', label: 'Request', content: '123234242342' },
    { id: '3', label: 'Holyday & Offday', content: 'poiuytrewqwetrtuyio' }
  ];

  return (
    <div className="px-4 mt-8">
      <AppTabs tabData={tabsData} />
      <div>
        <Overview />
      </div>
    </div>
  );
};
export default Dashboard;
