"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: "0",
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/Tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to create Ticket.");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center p-4">
      <form
        className="flex flex-col gap-3 p-6 rounded shadow-md w-full max-w-md"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="text-lg font-bold mb-4">Create your Ticket</h3>

        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
          className="w-full p-2 border rounded"
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows="5"
          className="w-full p-2 border rounded"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="flex items-center gap-1">
              <input
                id={`priority-${num}`}
                name="priority"
                type="radio"
                onChange={handleChange}
                value={num}
                checked={Number(formData.priority) === num}
              />
              {num}
            </label>
          ))}
        </div>

        <label>Progress</label>
        <input
          type="range"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
          className="w-full"
        />

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded cursor-pointer"
          value="Create Ticket"
        />
      </form>
    </div>
  );
};

export default TicketForm;
