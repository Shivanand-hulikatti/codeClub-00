
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [usn, setUsn] = useState('');
  const [handle, setHandle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('USN:', usn, 'Codeforces Handle:', handle);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-emerald-500 mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="usn">USN</label>
          <input
            type="text"
            id="usn"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="handle">Codeforces Handle</label>
          <input
            type="text"
            id="handle"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div className='text-slate-100 pb-3'>Already have an account ? <span className='underline  cursor-pointer' onClick={e=>navigate('/login')}>Login now</span></div>
        <button
            type="submit"
            className="w-full py-2 px-4 bg-emerald-500 text-gray-900 font-semibold rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Register
          </button>
      </form>
    </div>
  );
};

export default Register;