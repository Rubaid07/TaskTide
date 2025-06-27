// src/pages/Dashboard/AddTask.jsx
import React, { use } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useNavigate } from 'react-router';

const AddTask = () => {
  const { user } = use(AuthContext)
  const navigate = useNavigate()

  const handleAddTask = e => {
    e.preventDefault()
    const form = e.target;
    const title = form.title.value
    const category = form.category.value
    const description = form.description.value;
    const deadline = form.deadline.value;
    const budget = parseFloat(form.budget.value);

    const email = user?.email
    const name = user?.displayName
    const photo = user?.photoURL

    const newTask = {
      title,
      category,
      description,
      deadline,
      budget,
      email,
      name,
      photo,
      bidsCount: 0,
      bidders: []
    };

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Task added successfully')
        }
        navigate('/my-tasks')
      })
  }
  const today = new Date();
  const formatedToday = today.toISOString().split('T')[0];
  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-base-100 rounded-lg shadow-xl border border-base-300">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#4ba5dc]">Add a New Task</h2>

      <form onSubmit={handleAddTask} className="grid grid-cols-1 gap-5">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="input input-bordered w-full"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full"
          defaultValue=""
          required
        >
          <option value="" disabled >Choose a Category</option>
          <option>Web Development</option>
          <option>Design</option>
          <option>Writing</option>
          <option>Marketing</option>
          <option>Data Entry</option>
          <option>Customer Service</option>
        </select>

        <textarea
          name="description"
          className="textarea textarea-bordered h-32 w-full"
          placeholder="Task Description"
          required
        ></textarea>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="date"
            name="deadline"
            className="input input-bordered w-full"
            min={formatedToday}
            required
          />

          <input
            type="number"
            name="budget"
            placeholder="Budget ($)"
            className="input input-bordered w-full"
            required
          />
        </div>

      <button
          type="submit"
          className="btn bg-[#4ba5dc] text-white w-full mt-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;