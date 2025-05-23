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
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-marketplace-server-olive.vercel.app/tasks/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              const remainingTask = tasks.filter((t) => t._id !== _id);
              setTasks(remainingTask);
            }
          });
      }
    });
  };

  return (
    <tr>
      <td className="font-medium">{title}</td>
      <td className="text-center">{category}</td>
      <td className="text-center">${budget}</td>
      <td className="text-center">{deadline}</td>
      <td className="text-center">
          {bidsCount || 0}
      </td>
      <td className="">
        <div className="flex justify-end space-x-1">
          <Link
            to={`/task/${_id}`}
            className="btn btn-ghost btn-sm"
            title="View"
          >
            <GrView size={16} className="text-gray-400" />
          </Link>
          <Link
            to={`/update-task/${_id}`}
            className="btn btn-ghost btn-sm"
            title="Edit"
          >
            <FaEdit size={16} className="text-blue-400" />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-sm"
            title="Delete"
          >
            <MdDelete size={16} className="text-red-400" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTaskCard;