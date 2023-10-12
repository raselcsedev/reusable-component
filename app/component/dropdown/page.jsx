/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client';
 import React, { useState } from 'react';
 
 const AppDropdown = ({
   id,
   isActive,
   toggleDropdown,
   iconLeft = 'hghghg',
   iconRight ='ghjkhgjj',
   title = '',
   data,
   selectedItem,
   onItemSelected
 }) => {
   const [searchTerm, setSearchTerm] = useState('');
 
   const handleInputChange = (e) => {
     setSearchTerm(e.target.value);
   };
 
   const filteredData = data?.filter((item) =>
     item.name.toLowerCase().includes(searchTerm.toLowerCase())
   );
 
   const handleItemClick = (item) => {
     if (onItemSelected) {
       onItemSelected(item);
     }
     toggleDropdown(item.id);
     setSearchTerm('');
   };
 
   return (
     <div className="relative inline-block">
       <button
         id={`dropdownButton-${id}`}
         data-dropdown-toggle="dropdownSearch"
         data-dropdown-placement="bottom"
         className="text-gray-600 relative hover:text-gray-800 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center  "
         type="button"
         onClick={() => toggleDropdown(id)}
       >
         <div className="flex items-center">
           <span className="mr-2">{iconLeft}</span>
           <span>{title}</span>
           {iconRight && <span className="ml-2">{iconRight}</span>}
         </div>
       </button>
 
       <div
         id={`dropdown-${id}`}
         className={`z-10 mt-2 absolute top-100 -ml-8 ${
           isActive ? '' : 'hidden'
         } bg-white overflow divide-y rounded-lg shadow w-72`}
       >
         <div className="py-3 ps-3 border-0">
           <label for="input-group-search" className="sr-only">
             Search
           </label>
           <div className="relative ">
             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
             <input
               type="text"
               id="input-group-search"
               className="block focus:outline-0 w-full p-2 text-sm text-gray-900"
               placeholder="Search & select..."
               value={searchTerm}
               onChange={handleInputChange}
             />
           </div>
         </div>
         <ul
           className="h-48 px-3 pb-3 pt-2 overflow-y-auto text-sm text-gray-700"
           aria-labelledby="dropdownSearchButton"
         >
           {filteredData && filteredData.length > 0 ? (
             filteredData.map((item) => (
               <li className="cursor-pointer" onClick={() => handleItemClick(item)}>
                 <div className="flex items-center pl-2 rounded">
                   <div className="flex items-center mr-12">
                     {item?.img && (
                       <img
                         className="w-9 h-8 rounded-full shadow-lg"
                         src={item.img}
                         alt="Item image"
                       />
                     )}
                     <label
                       htmlFor={`checkbox-item-${item?.name}`}
                       className="w-full cursor-pointer py-2 ml-2 text-sm font-medium text-gray-900 rounded"
                     >
                       <p className="text-gray-600">{item?.name}</p>
                       {item?.description && (
                         <p className="text-xs text-gray-500">{item.description}</p>
                       )}
                     </label>
                   </div>
                   {item?.name === selectedItem?.name && (
                     kghghjgkjjjkjh
                   )}
                 </div>
               </li>
             ))
           ) : (
             <li className="flex justify-center items-center h-full">
               <span className="text-gray-500">Nothing to show</span>
             </li>
           )}
         </ul>
       </div>
     </div>
   );
 };
 export default AppDropdown;
