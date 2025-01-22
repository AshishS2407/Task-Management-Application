import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const taskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');
    const [priority, setPriority] = useState('Medium');
    const [createdAt, setCreatedAt] = useState('');


    const navigate = useNavigate();

    const handleAddTask = async (e) => {
        e.preventDefault();

        const taskDetails = {
            title, description, status, priority, createdAt
        };

        try {
            const res = await fetch("/api/add-task", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(taskDetails)
            });

            const data = await res.json();

            if (res.ok && data.message === "Successful") {
                toast.success("Task added successfully!");
                navigate('/tasks');
            } else {
                toast.error("Error adding task");
            }
        } catch (error) {
            toast.error("Error adding task");
        }
    };

   

    return (
        <>
            <div>Add Task</div>
            <form onSubmit={handleAddTask}>
                <div>
                    <label>Task Title</label>
                    <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            > Status
              
            </label>
            <select
              id="status"
              name="status"
              className="border rounded w-full py-2 px-3"
              required
              value={status}
              onChange={(e) => setStatus (e.target.value)}
              
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

                <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            > Priority
              
            </label>
            <select
              id="priority"
              name="priority"
              className="border rounded w-full py-2 px-3"
              required
              value={priority}
              onChange={(e) => setPriority (e.target.value)}
              
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>


                <div>
                    <label>Date</label>
                    <input type="date" name="date" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
                </div>

                <button>Add Task</button>
            </form>





        </>
    );
};

export default taskForm;