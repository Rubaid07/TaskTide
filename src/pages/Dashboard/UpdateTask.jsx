// src/pages/Dashboard/UpdateTask.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Loading from "../../component/Loading";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [id]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedTask = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      deadline: form.deadline.value,
      budget: form.budget.value,
    };

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Task updated successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/my-tasks");
        }
      });
  };

  if (!task) return <Loading></Loading>;

  return (
     <div className="max-w-2xl mx-auto my-12 p-8 bg-base-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-info">
        Update Task
      </h2>

      <form onSubmit={handleUpdateTask} className="grid grid-cols-1 gap-5">
        <input
          type="text"
          name="title"
          defaultValue={task.title}
          placeholder="Task Title"
          className="input input-bordered w-full"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full"
          defaultValue={task.category}
          required
        >
          <option disabled value="">
            Choose a Category
          </option>
          <option>Web Development</option>
          <option>Design</option>
          <option>Writing</option>
          <option>Marketing</option>
          <option>Data Entry</option>
          <option>Customer Service</option>
        </select>

        <textarea
          name="description"
          defaultValue={task.description}
          className="textarea textarea-bordered h-32 w-full"
          placeholder="Task Description"
          required
        ></textarea>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="date"
            name="deadline"
            defaultValue={task.deadline}
            className="input input-bordered w-full"
            required
          />

          <input
            type="number"
            name="budget"
            defaultValue={task.budget}
            placeholder="Budget ($)"
            className="input input-bordered w-full"
            required
          />
        </div>

        <button
        type="submit"
        className="btn btn-info text-white w-full mt-2"
      >
        Update Task
      </button>
      </form>
    </div>
  );
};

export default UpdateTask;
