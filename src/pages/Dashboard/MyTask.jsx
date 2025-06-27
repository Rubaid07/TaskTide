import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../../component/Loading";
import MyTaskCard from "../MyTaskCard";
import { Link, useNavigate } from "react-router";
import { LuNotebookText } from "react-icons/lu";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyTasks = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!user?.email) {
          navigate('/login');
          return;
        }

        setLoading(true);
        const response = await axiosSecure.get(`/my-tasks?email=${user.email}`);
        setTasks(response.data.reverse());
      } catch (error) {
        console.error("Error fetching tasks:", error);
        toast.error("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchTasks();
    }
  }, [user, authLoading, navigate, axiosSecure]);

  if (authLoading || loading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto mt-5 py-6 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-info">
          My Tasks
        </h1>
        {tasks.length > 0 && (
          <span className="badge badge-info">
            {tasks.length} Task{tasks.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {tasks.length === 0 ? (
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center py-12">
            <LuNotebookText size={50} />
            <h3 className="mt-4 text-lg font-medium text-gray-500">No tasks yet</h3>
            <p className="mt-2 text-gray-500">You haven't posted any tasks yet. Get started by creating a new task.</p>
            <div className="mt-6">
              <Link
        to="/add-task"
        className="btn btn-primary"
      >
        New Task
      </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="text-left">Title</th>
                  <th className="text-center">Category</th>
                  <th className="text-center">Budget</th>
                  <th className="text-center">Deadline</th>
                  <th className="text-center">Bids</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <MyTaskCard
                    key={task._id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTasks;