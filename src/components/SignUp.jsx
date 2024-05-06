import React, { useState } from 'react';
import { MdOutlineAssignmentInd } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";

const SignUp = () => {

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(form);
    }

    const [form,setForm]=useState({
        username: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        password: '',
    });
    
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    };

  return (
    <div className='flex items-center justify-center h-screen bg-white'>
        <div className='w-full max-w-md p-2 space-y-6 bg-orange-700 rounded-xl shadow-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-center p-2 pb-0 text-white'>Virtual Queue</h1>
        <div className='flex justify-center gap-2'>
        <MdOutlineAssignmentInd className='text-white text-2xl '/>
          <h1 className='text-xl font-bold text-center  text-white'>Sign Up</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='px-6 py-3'>
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="first_name">
             First Name
            </label>
            <input className="bg-white w-full px-3 py-2 leading-tight text-orange-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" placeholder="John" name="first_name" value={form.first_name} onChange={handleChange} />
          </div>
          <div className='px-6 py-3'>
            <label className='block mb-2 text-sm font-bold text-white' htmlFor='last_name'>
                Last Name
            </label>
            <input className="bg-white w-full px-3 py-2 leading-tight text-orange-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" placeholder="Shumba" name="last_name" value={form.last_name} onChange={handleChange} />
            
          </div>
          <div className='px-6 py-3'>
            <label className='block mb-2 text-sm font-bold text-white' htmlFor='phone'>
                Phone Number
            </label>
            <input className="bg-white w-full px-3 py-2 leading-tight text-orange-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="number" placeholder="0711111111" name="phone" value={form.phone} onChange={handleChange} />
            
          </div>
          <div className='px-6 py-3'>
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="password">
              Password
            </label>
            <input className="bg-white w-full px-3 py-2 mb-3 leading-tight text-orange-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} />
          </div>
          <div className=' flex  justify-center'>
            <button 
             onClick={() => (window.location.href = {SignUp})}
            //  onClick={SignUp}
             className="flex gap-2 justify-center p-2 m-4 w-1/2 font-bold rounded bg-orange-500 text-white focus:outline-none focus:shadow-outline" 
             type="submit">
              Sign Up
              <MdAssignmentTurnedIn className='text-white text-2xl'/>
            </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp