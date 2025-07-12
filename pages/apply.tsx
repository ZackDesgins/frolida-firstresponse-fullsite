import React, { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    department: "Frolida State Police",
    reason: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! (Form handling to be implemented)");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Department Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input name="name" onChange={handleChange} value={formData.name} className="w-full p-2 bg-gray-800 rounded text-white" />
        </div>
        <div>
          <label className="block mb-1">Age</label>
          <input name="age" onChange={handleChange} value={formData.age} type="number" className="w-full p-2 bg-gray-800 rounded text-white" />
        </div>
        <div>
          <label className="block mb-1">Department</label>
          <select name="department" onChange={handleChange} value={formData.department} className="w-full p-2 bg-gray-800 rounded text-white">
            <option>Frolida State Police</option>
            <option>Frolida Fire Rescue</option>
            <option>Frolida DOT</option>
            <option>Civilian Operations</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Why do you want to join?</label>
          <textarea name="reason" onChange={handleChange} value={formData.reason} className="w-full p-2 bg-gray-800 rounded text-white" />
        </div>
        <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">Submit</button>
      </form>
    </main>
  );
}
