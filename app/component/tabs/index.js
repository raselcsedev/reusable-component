'use client';
 
import { useState } from 'react';

const AppTabs = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="inline-block">
        <div className="ms-4 bg-white shadow-md rounded-lg p-1 flex flex-wrap text-sm font-medium text-center text-gray-500">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`inline-block px-4 py-2 ${
                index === activeTab ? 'bg-blue-100 text-blue-600' : ' text-gray-600'
              } rounded-md`}
              onClick={() => setActiveTab(index)}
            >
              <span className="px-4">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div>{tabData[activeTab].content}</div>
    </>
  );
};
export default AppTabs;
