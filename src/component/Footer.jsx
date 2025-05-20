import React from 'react';
import { Link } from 'react-router'; // Assuming you're using react-router-dom
import tasktideLogo from '../assets/TaskTide.png'; // আপনার লোগো ফাইলের পাথ

const Footer = () => {
  return (
    <div className='bg-base-200'>
        <footer className="footer p-10 text-base-content border-t border-base-300 md:flex md:w-10/12 mx-auto justify-between">
      {/* Company Section */}
      <aside>
        <Link to="/" className="flex items-center text-xl font-bold">
          <img className='md:w-50 w-30 mr-2' src={tasktideLogo} alt="TaskTide Logo" />
        </Link>
        <p className="mt-4 text-sm">
          TaskTide Inc.<br/>
          Providing reliable task management since 2024
        </p>
        <p className="mt-2 text-xs opacity-70">
          © {new Date().getFullYear()} TaskTide. All rights reserved.
        </p>
      </aside>

      {/* Services Section */}
      <nav>
        <h6 className="footer-title text-sky-500">Services</h6>
        <Link to="/browse-task" className="link link-hover">Browse Tasks</Link>
        <Link to="/add-task" className="link link-hover">Add New Task</Link>
        <Link to="/my-tasks" className="link link-hover">Manage My Tasks</Link>
        <a className="link link-hover">Project Management</a>
      </nav>

      {/* Company Links Section */}
      <nav>
        <h6 className="footer-title text-sky-500">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press Kit</a>
      </nav>

      {/* Legal Section */}
      <nav>
        <h6 className="footer-title text-sky-500">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;