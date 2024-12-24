import React, { useState } from "react";

const WatchListTable = ({ users }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filtered users based on search
  const filteredUsers = users.filter(
    (user) =>
      user.User_ID.toLowerCase().includes(search.toLowerCase()) ||
      user.Added_at.toLowerCase().includes(search.toLowerCase()) ||
      user.Email_ID.toLowerCase().includes(search.toLowerCase())||
      user.Movie_ID.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + rowsPerPage);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Watchlist Details Database</h1>

      {/* Search Filter */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by User ID, Name, or Email..."
          value={search}
          onChange={handleSearch}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">User ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Movie ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Added at</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.User_ID} className="odd:bg-white even:bg-gray-100 text-black">
              <td className="border border-gray-300 px-4 py-2">{user.User_ID}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Movie_ID}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Email_ID}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Added_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button
          className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WatchListTable;
