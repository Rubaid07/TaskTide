import { useEffect, useState, useContext } from 'react';
import { FaTasks, FaUserCheck, FaCheckCircle, FaHome } from 'react-icons/fa';
import { FiPieChart } from 'react-icons/fi';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [dashboardData, setDashboardData] = useState({
    stats: null,
    chartData: [],
    categoryData: [],
  });
  const [loading, setLoading] = useState(true);

  const colors = ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B'];

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, categoryRes] = await Promise.all([
          axiosSecure.get(`/dashboard/stats?email=${user.email}`),
          axiosSecure.get(`/dashboard/categories?email=${user.email}`),
        ]);

        const stats = statsRes.data;

        // Prepare chart data based on available stats
        const chartData = [
          { name: 'Total Tasks', value: stats.totalTasks },
          { name: 'Active Tasks', value: stats.activeTasks },
          { name: 'Active Bids', value: stats.activeBids },
        ];

        setDashboardData({
          stats,
          chartData,
          categoryData: Array.isArray(categoryRes.data) ? categoryRes.data : [],
        });
      } catch (err) {
        console.error('Failed to load dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchDashboardData();
    }
  }, [user, axiosSecure]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-info"></div>
      </div>
    );
  }

  const { stats, chartData, categoryData } = dashboardData;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#4ba5dc]">Dashboard Overview</h1>
          <p className="text">Welcome back! Here's your activity summary.</p>
        </div>
        <button
          className="mt-4 md:mt-0 bg-[#4ba5dc] cursor-pointer hover:bg-[#3a80ac] text-white flex items-center gap-2 px-4 py-2 rounded-lg transition"
          onClick={() => window.location.href = '/'}
        >
          <FaHome /> Go to Home
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Tasks"
          value={stats.totalTasks}
          icon={<FaTasks className="text-indigo-500" />}
        />
        <StatCard
          title="Active Tasks"
          value={stats.activeTasks}
          icon={<FaUserCheck className="text-green-500" />}
        />
        <StatCard
          title="Active Bids"
          value={stats.activeBids}
          icon={<FaCheckCircle className="text-blue-500" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-base-100 p-6 rounded-xl shadow-sm border border-base-300 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Your Activity</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    color: '#111111'
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#4ba5dc"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Categories Chart */}
        <div className="bg-base-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Task Categories</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {categoryData.length > 0 ? (
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <FiPieChart className="text-gray-400 text-4xl mb-2" />
                  <p className="text-gray-500">No category data available</p>
                </div>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// StatCard Component
const StatCard = ({ title, value, icon }) => (
  <div className="bg-base-100 p-5 rounded-xl shadow-sm border border-base-300 hover:shadow-md transition">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-base-content/70">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-base-content">{value}</h3>
      </div>
      <div className="p-3 rounded-lg bg-primary/10 ">
        {icon}
      </div>
    </div>
  </div>
);

export default DashboardOverview;