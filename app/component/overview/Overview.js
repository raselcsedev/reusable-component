'use client';


import React, { useState } from 'react';
import { Briefcase, Clock, Plus, List, Eye, EyeOff, User, Grid } from 'react-feather';
import AppDropdown from '../dropdown/page';

const Overview = ({ cardView, setCardView }) => {
  const [showCard, setShowCard] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selected, setSelected] = useState();

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const userData = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      name: 'John Smilga',
      description: 'Web dev'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      name: 'Mosh',
      description: 'Instructor'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      name: 'JS Mastery',
      description: 'Tutor'
    }
  ];

  const departmentData = [
    {
      id: 1,
      name: 'JavaScript Department'
    },
    {
      id: 2,
      name: 'Laravel Department'
    },
    {
      id: 3,
      name: 'QA & Design Department'
    }
  ];

  const workshiftData = [
    {
      id: 1,
      name: 'Ramadan Workshift'
    },
    {
      id: 2,
      name: 'Regular Workshift'
    },
    {
      id: 3,
      name: 'Day Workshift'
    },
    {
      id: 4,
      name: 'Night Workshift'
    }
  ];

  const handleItemSelected = (selectedItem) => {
    setSelected(selectedItem);
  };

  return (
    <div className=" px-4 ">
      <div className="flex items-center">
        <div className="flex items-center w-2/3">
          <button className="flex items-center bg-blue-500 text-white font-medium px-5 py-2.5 mr-4 mb-2 rounded-md">
            <Plus size={18} className="mr-2" /> Add New
          </button>

          <button
            className="flex items-center text-gray-500 bg-white font-medium px-3 py-2.5  mb-2 rounded-md"
            onClick={() => setCardView(!cardView)}
          >
            {cardView ? <List size={21} /> : <Grid size={21} />}
          </button>
        </div>
        <div className="flex items-center mr-8">
          <button
            className="flex  text-blue-500 font-medium px-3 py-2.5 mb-2"
            onClick={() => setShowCard(!showCard)}
          >
            {showCard ? <EyeOff size={21} className="mr-2" /> : <Eye size={21} className="mr-2" />}
            Overview
          </button>

          <div className="flex gap-3">
            {/* User Dropdown */}
            <AppDropdown
              id="1"
              iconLeft={<User style={{ width: '16px', height: '16px' }} />}
              title="User"
              isActive={activeDropdown === '1'}
              toggleDropdown={toggleDropdown}
              data={userData}
              selectedItem={selected}
              onItemSelected={handleItemSelected}
            />

            {/* Department Dropdown */}
            <AppDropdown
              id="2"
              iconLeft={<Briefcase style={{ width: '16px', height: '16px' }} />}
              title="Department"
              isActive={activeDropdown === '2'}
              toggleDropdown={toggleDropdown}
              data={departmentData}
              selectedItem={selected}
              onItemSelected={handleItemSelected}
            />

            {/* Workshift Dropdown */}
            <AppDropdown
              id="3"
              iconLeft={<Clock style={{ width: '16px', height: '16px' }} />}
              title="Workshift"
              isActive={activeDropdown === '3'}
              toggleDropdown={toggleDropdown}
              data={workshiftData}
              selectedItem={selected}
              onItemSelected={handleItemSelected}
            />
          </div>

          {/* <div className="ms-3">
            <Drawer />
          </div> */}
        </div>
      </div>

      {showCard && (
        <div className="mt-4 mr-8  flex justify-between border bg-white p-6 rounded-md">
          <div className="text-left pr-2 border-gray-300">
            <div className="text-xl font-extrabold">21</div>
            <div className="text-gray-500">Total Employees</div>
          </div>

          <div className="text-left pl-5 border-l border-gray-300">
            <div className="text-xl font-extrabold text-green-500">15</div>
            <div className="text-gray-500">Present Today</div>
          </div>
          <div className="text-left pl-5 border-l border-gray-300">
            <div className="text-xl font-extrabold text-gray-500">04</div>
            <div className="text-gray-500">On Leave Today</div>
          </div>
          <div className="text-left pl-5 border-l border-gray-300">
            <div className="text-xl font-extrabold text-red-500">02</div>
            <div className="text-gray-500">Absent Today</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
