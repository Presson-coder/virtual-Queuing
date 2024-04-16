import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const dietaryNeeds = ['Vegan', 'Vegetarian', 'Gluten-Free', 'Pescetarian', 'Ketogenic'];
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className=''>

        <div className='flex items-center justify-center text-green-500 text-3xl font-bold '>
            <h1>Dishcovery</h1>
            
        </div>
        <div className='flex items-center justify-center text-green-500'><p>discover your best dishes</p></div>

     {/* <div className='mt-10 flex justify-center '>
        <div className='relative  '>
        <FiSearch className='absolute top-4 left-3'/>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className=" p-3 pl-10 rounded border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
        </div>
      </div> */}

      <nav className=" top-0 z-0 flex items-center justify-between navbar navbar-expand-lg navbar-light bg-light w-full p-10">
        <div className='container flex items-center justify-between rounded-lg text-lg text-white-100 p-4'>
          {dietaryNeeds.map((diet, index) => (
            <Link key={index} className='flex items-center justify-center hover:text-slate-950 duration-500 mx-2 p-3 w-full bg-green-500 text-white rounded' to={`/${diet.toLowerCase()}`}>
              {diet}
            </Link>
          ))}
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar;