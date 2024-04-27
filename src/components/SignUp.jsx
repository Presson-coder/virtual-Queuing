import React, { useState } from 'react';
import logo from '../assets/image.png';

function SignUp() {
  const [form, setForm] = useState({
    id: '',
    pin: '',
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

  return (
    <div className='flex items-center justify-center h-screen bg-white'>
      <div className='w-full max-w-md p-2 space-y-6 bg-green-700 rounded-xl shadow-lg'>
      <img src={logo} alt='logo' className='mx-auto my-12 w-32 h-32 rounded-full' />
        <h1 className='text-2xl font-bold text-center text-green-700'>ZB bank</h1>
        <form onSubmit={handleSubmit}>
          <div className='p-3'>
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="id">
              MyZB ID
            </label>
            <input className="bg-green-700 w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="ID" name="id" value={form.id} onChange={handleChange} required />
          </div>
          <div className='p-3'>
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="pin">
              PIN
            </label>
            <input className="bg-green-700 w-full px-3 py-2 mb-3 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="pin" type="password" placeholder="PIN" name="pin" value={form.pin} onChange={handleChange} required />
          </div>
          <div className='p-3'>
            <button className="w-full px-4 py-2 font-bold text-green-700 bg-white rounded hover:bg-green-500 hover:text-white focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;