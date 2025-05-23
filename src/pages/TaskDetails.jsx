import { useParams } from "react-router";
import { use, useEffect, useState } from "react";
import { FaCalendarAlt, FaHeart, FaTag } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../component/Loading";

const TaskDetails = () => {
  const { user } = use(AuthContext)
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [bid, setBid] = useState(false);
  const email = user.email

  useEffect(() => {
    fetch(`https://task-marketplace-server-olive.vercel.app/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data)
        if(data.bidders?.includes(email)){
          setBid(true)
        }

      });
  }, [id, email]);

  const handleBid = () => {
  fetch(`https://task-marketplace-server-olive.vercel.app/tasks/${id}/bid`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userEmail: email }),
  })
    .then((res) => res.json())
    .then((data) => {
  if (data.success) {
      setTask(data.task);
    setBid(true);
  }
});
};

  if (!task) {
    return <Loading></Loading>
  }

  return (
  <div className="max-w-3xl mx-auto py-6 px-4 space-y-6 border border-base-200 rounded-xl shadow-lg md:my-20 my-10">

  <div className="flex items-center gap-5 pb-4 border-b border-gray-700">
    <img
      src={task?.photo}
      alt={task?.name}
      className="w-16 h-16 rounded-full object-cover shadow-sm"
    />
    <div>
      <h2 className="text-2xl font-bold text-sky-400">{task?.name}</h2>
      <p className="text-gray-400 text-sm">{task?.email}</p>
    </div>
  </div>

  <div className="space-y-4">
    <h1 className="md:text-3xl text-2xl font-medium">{task.title}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
      <p className="flex items-center font-medium gap-3">
        Category:
        <span className="text-xs bg-blue-200 text-blue-500 px-2 py-1 rounded-full flex gap-1 items-center font-medium">
                  <FaTag className="text-blue-500" />
                  {task.category}</span>
      </p>
      <p className="flex font-medium items-center gap-3">
        <FaCalendarAlt className="text-gray-500" />
        Deadline:
        <span className="">
          {task.deadline}
        </span>
      </p>
      <p className="flex font-medium items-center gap-2">
        Budget:
        <span className="text-green-600 font-semibold text-lg">
          ${task.budget}
        </span>
      </p>
    </div>
    <p className="leading-relaxed pt-2">
      <span className="font-medium text-gray-400">Description</span>: {task.description}
    </p>
  </div>

  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
    <div className="flex items-center gap-3">
      <button
        onClick={handleBid}
        disabled={bid}
        className={`flex items-center justify-center w-12 h-12 rounded-full text-3xl transition-all duration-300 transform`}
      >
        {bid? <FaHeart className="text-red-500 cursor-not-allowed"></FaHeart> : <FaHeart className="text-gray-300 cursor-pointer"></FaHeart>}
      </button>
      <span className="text-lg font-medium">
        <span className="font-bold">
          {task?.bidsCount || 0}
        </span>{" "}
        bids received
      </span>
    </div>
  </div>
</div>
  );
};

export default TaskDetails;
