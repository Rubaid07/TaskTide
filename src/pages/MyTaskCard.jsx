import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTaskCard = ({ task, tasks, setTasks }) => {
  const { _id, title, budget, deadline, category, bidsCount } = task;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tasks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              const remaining = tasks.filter((t) => t._id !== _id);
              setTasks(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-200 shadow-md p-4">
      <div className="flex w-full justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-400"><span className="font-medium">Category</span>: {category}</p>
          <p className="text-gray-400"><span className="font-medium">Budget</span>: ${budget}</p>
          <p className="text-gray-400"><span className="font-medium">Deadline</span>: {deadline}</p>
          <p className="text-gray-400"><span className="font-medium">Bids</span>: {bidsCount || 0}</p>
        </div>
        <div className="card-actions flex flex-col items-end space-y-2">
          <Link to={`/task/${_id}`}>
            <button className="btn btn-sm bg-gray-700 text-white"><GrView size={20} /></button>
          </Link>
          <Link to={`/update-task/${_id}`}>
            <button className="btn btn-sm btn-info"><FaEdit size={20} /></button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm bg-red-400"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTaskCard;
