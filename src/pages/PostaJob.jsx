import React, { useState } from "react";

export default function PostaJob() {
  const [description, setDescription] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-800 p-10">
      <div className="w-full   p-10 rounded-lg shadow-lg">
        <h1 className="text-white text-4xl mb-8">Post a Job</h1>

        <form className="space-y-8">
          {/* First row with Job Title, Category, and Time in one line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Title */}
            <div>
              <label className="block text-white mb-2">Job Title</label>
              <input
                type="text"
                placeholder="Job Title"
                className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            {/* Category */}
            <div>
              <label className="block text-white mb-2">Category</label>
              <input
                type="text"
                placeholder="Category"
                className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            {/* Time */}
            <div>
              <label className="block text-white mb-2">Time</label>
              <select className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none">
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
              </select>
            </div>
          </div>

          {/* Second row with Experience Level, Work On, and Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Experience Level */}
            <div>
              <label className="block text-white mb-2">Experience Level</label>
              <select className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none">
                <option>Select Level</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            {/* Work On */}
            <div>
              <label className="block text-white mb-2">Work On</label>
              <input
                type="text"
                placeholder="On Site"
                className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            {/* Price */}
            <div>
              <label className="block text-white mb-2">Price</label>
              <input
                type="text"
                placeholder="Price"
                className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              className="w-full p-3 bg-transparent border border-gray-500 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              rows="5"
              maxLength="500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the job..."
            />
            <div className="text-right text-gray-400 text-sm">
              {description.length} / 500
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button className="w-[300px]  p-5  py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white  hover:opacity-90">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
