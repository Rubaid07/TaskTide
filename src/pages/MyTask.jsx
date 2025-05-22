import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../component/Loading";
import MyTaskCard from "./MyTaskCard";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/my-tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email: user.email })
    })
      .then(res => res.json())
      .then(data => {
        setTasks(data)
        setLoading(false)
      })
      .catch(error => {
        // console.log(error)
        setLoading(false)
      });
  }, [user?.email]);

  if (loading) {
    return <Loading></Loading>;
  }


  return (
    <div className="max-w-5xl mx-auto mt-5 p-6">
      <h1 className="text-3xl font-bold w-max mb-12 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">My Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500">You haven't posted any tasks yet.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map(task => (
            <MyTaskCard
              key={task._id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTasks;
