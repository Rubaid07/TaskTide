// src/layouts/DashboardLayout.jsx
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaTasks,
  FaPlusCircle,
  FaUser,
} from 'react-icons/fa';
import { FiPieChart } from 'react-icons/fi';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { CgLogOut } from 'react-icons/cg';
import ScrollToTop from '../component/ScrollToTop';
import tasktide from '../assets/TaskTide.png'
import { useTheme } from '../provider/ThemeProvider';

const DashboardLayout = () => {
  const { theme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // This ensures theme is fully initialized before rendering
    setIsThemeReady(true);
  }, []);
  if (!isThemeReady) {
    return <div className="flex justify-center items-center h-screen">
      <span className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-info"></span>
    </div>;
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully")
      }).catch(error => {
        // console.log(error);
      })
  }

  return (
    <div className="flex h-screen bg-base-100">
      <ScrollToTop></ScrollToTop>
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#4ba5dc] text-white shadow-md"
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-base-300 transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="flex items-center justify-center h-16 px-4 border-b border-[#4ba5dc]">
          <img className='md:w-40 w-30' src={tasktide} alt="" />
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <NavItem to="/dashboard" icon={<FiPieChart />} text="Dashboard" />
            <NavItem to="/my-tasks" icon={<FaTasks />} text="My Tasks" />
            <NavItem to="/add-task" icon={<FaPlusCircle />} text="Add Task" />
            <NavItem to="/profile" icon={<FaUser />} text="Profile" />
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:max-w-9/12 mx-auto">
        <header className="bg-base-100 shadow-sm">
          <div className="flex items-center justify-end p-4">
            {user && (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full border-2 border-info">
                    <img alt={user.displayName} src={user?.photoURL} />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li onClick={handleLogout}><a>Logout <CgLogOut size={16} className="ml-1" /></a></li>
                </ul>
              </div>
            )}

          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-base-200">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? 'bg-[#4ba5dc] flex items-center p-3 rounded-lg' : 'flex items-center p-3 rounded-lg hover:bg-[#4ba5dc] transition-colors hover:text-white'}
    >
      <span className="mr-3">{icon}</span>
      <span className="font-medium">{text}</span>
    </NavLink>
  </li>
);

export default DashboardLayout;