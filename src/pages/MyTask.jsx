import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../component/Loading";
import MyTaskCard from "./MyTaskCard";
import { Link } from "react-router";
import { LuNotebookText } from "react-icons/lu";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://task-marketplace-server-olive.vercel.app/my-tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email: user.email })
    })
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto mt-5 py-6 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          My Tasks
        </h1>
        {tasks.length > 0 && (
          <span className="badge bg-sky-600 text-white">
            {tasks.length} Task
          </span>
        )}
      </div>

      {tasks.length === 0 ? (
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center py-12">
            <LuNotebookText size={50} />
            <h3 className="mt-4 text-lg font-medium text-gray-500">No tasks yet</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">You haven't posted any tasks yet. Get started by creating a new task.</p>
            <div className="mt-6">
              <Link
                to="/add-task"
                className="btn bg-sky-500 text-white"
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