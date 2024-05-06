import React, { useState } from 'react';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import queue from '../assets/queue1.png';
import { FaUsersLine } from "react-icons/fa6";
import { IoPeopleCircleOutline } from "react-icons/io5";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//full name 
//username
//password
//phone number 
function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  // className='mx-auto my-12 w-32 h-32 rounded-full'
  return (
    <div className='flex items-center justify-center h-screen bg-white '>
      <div className='w-full max-w-md p-2 space-y-6 bg-orange-700 rounded-xl shadow-lg m-16'>
      
        <h1 className='text-2xl font-bold text-center p-4 text-white'>Virtual Queue</h1>
        {/* <img src={queue} alt="Queue" className='scale-50'/> */}
        <div className='flex scale-200 justify-center items-center'>
           <FaUsersLine className='text-white'/>
           {/* <img src={queue} alt="Queue"/> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='px-6 py-3'>
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="username">
             Username
            </label>
            <input className="bg-white w-full px-3 py-2 leading-tight text-orange-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline" username="username" type="text" placeholder="John Shumba" name="username" value={form.username} onChange={handleChange} />
          </div>
          <div className='px-6 py-3'>
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="password">
              Password
            </label>
            <input className="bg-white w-full px-3 py-2 mb-3 leading-tight text-orange-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline" username="password" type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} />
          </div>
          <div className=' flex  justify-center'>
            <button
             onClick={() => navigate('/home')} 
             className=" p-2 m-4 w-1/4 font-bold rounded bg-orange-500 text-white focus:outline-none focus:shadow-outline" 
             type="button">
              Sign In
            </button>
            <button 
             onClick={() => navigate('/signup')}
            //  onClick={SignUp}
             className=" p-2 w-1/4 m-4 font-bold rounded bg-orange-500 text-white focus:outline-none focus:shadow-outline" 
             type="button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;