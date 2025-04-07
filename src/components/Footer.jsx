import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-100 p-4 mt-5'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5 text-sm'>
        <div>
          <img src={assets.treasurit_logo} className='mb-5 w-32 mx-12' alt='Company Logo' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eos beatae nostrum et! Asperiores distinctio velit dolore dicta exercitationem dolores ipsa facilis. Nesciunt, adipisci autem.
          </p>
        </div>
        <div>
          <p className='text-xl font-bold mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-700'>
            <NavLink className='hover:text-black' to='/'>Home</NavLink>
            <NavLink className='hover:text-black' to='/about-us'>About Us</NavLink>
            <NavLink className='hover:text-black'>Services</NavLink>
            <NavLink className='hover:text-black'>Privacy Policy</NavLink>
          </ul>
        </div>
        <div>
          <p className='text-xl font-bold mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <NavLink className='hover:text-black'>+1-212-456-7890</NavLink>
            <NavLink className='hover:text-black'>contact@Treasureit.com</NavLink>
          </ul>
        </div>
      </div>
      <div className='mt-5'>
        <hr />
        <p className='py-5 text-sm text-center'>
          &copy; {currentYear} @treasureit.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
