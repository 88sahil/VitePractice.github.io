import React from 'react';
import img4 from '../images/img4.png';

const Contactus = () => {
  return (
    <div className='flex flex-wrap gap-60 min-h-screen items-center'>
      <div>
        <img 
          src={img4}
          width={500}
          height={200}
          alt="no logo"
        />
      </div>
      <div>
        <h1 className='font-extrabold text-3xl pb-5'>Contact us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="form-input mt-1 block w-full border border-gray-500 border-solid" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="form-input mt-1 block w-full border border-gray-500 border-solid" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
            <textarea id="message" name="message" className="form-textarea mt-1 block w-full border border-gray-500 border-solid" rows="4" required></textarea>
          </div>
          <div className="mt-6">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
