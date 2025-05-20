import React, { use, useEffect, useState } from 'react';
import tasktide from '../assets/TaskTide.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const handleTheme = e => {
    const newTheme = e.target.checked ? 'dark' : 'light'
    setTheme(newTheme)
  }
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  const links = <>
    <NavLink to='/' className={({ isActive }) => isActive ? 'underline underline-offset-7 text-sky-500 font-semibold' : ''}>Home</NavLink>
    <NavLink to='/browse-task' className={({ isActive }) => isActive ? 'underline underline-offset-7 text-sky-500 font-semibold' : ''}>Browse Task</NavLink>
    <NavLink to='/add-task' className={({ isActive }) => isActive ? 'underline underline-offset-7 text-sky-500 font-semibold' : ''}>Add Task</NavLink>
    <NavLink to='/my-task' className={({ isActive }) => isActive ? 'underline underline-offset-7 text-sky-500 font-semibold' : ''}>My Task</NavLink>
  </>
  const handleLogout = () => {
    logOut()
    .then(()=> {
      toast.success("Logged out successfully")
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <div className='bg-base-100 shadow-md'>
      <div className="navbar md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown block  lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-md">
              {links}
              <Link to='/login' className="md:btn md:px-[30px] md:py-[15px]  border border-sky-400 hover:bg-sky-400 hover:text-white md:text-sky-400 md:border-sky-400 text-sky-400 rounded-sm px-3 py-2">Login</Link>
              <Link to='/register' className="md:btn md:px-[30px] md:py-[15px] md:bg-sky-400 bg-sky-400 hover:bg-sky-500 md:text-white md:flex rounded-sm px-3 py-2 text-white">Register</Link>
            </ul>
          </div>
          <img className='md:w-50 w-30' src={tasktide} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="cursor-pointer grid place-items-center mr-4">
            <input type="checkbox" checked={theme === 'dark'} onChange={handleTheme} className=" toggle-info toggle theme-controller  row-start-1 col-start-1 col-span-2" />
          </label>

          {!user ? (
            <div className='hidden lg:flex'>
              <Link to='/login' className="md:btn md:px-[30px] md:py-[15px] md:bg-transparent  border border-sky-400 hover:bg-sky-400 hover:text-white md:text-sky-400 md:border-sky-400 text-sky-400 rounded-sm px-3 py-2  mr-3">Login</Link>
              <Link to='/register' className="md:btn md:px-[30px] md:py-[15px] md:bg-sky-400 bg-sky-400 hover:bg-sky-500 md:text-white md:flex rounded-sm px-3 py-2 text-white">Register</Link>
            </div>
          ) : (
            <div className="relative group inline-block">
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="profile" />
                </div>
              </div>

              <div className="absolute right-0 mt-2 w-56 bg-base-100 p-4 shadow-lg rounded-md 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-all duration-200 z-50">
                <p className="text-sm font-semibold">{user?.displayName}</p>
                <p className="text-xs text-gray-200 mb-2">{user?.email}</p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-red-500 text-white hover:bg-red-600 mt-2"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;