import React, { useState } from "react";

const MovieTable = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  // Filtered movies based on search
  const filteredMovies = movies.filter(
    (movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase()) ||
      movie.Description.toLowerCase().includes(search.toLowerCase()) ||
      movie.Cast.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredMovies.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + rowsPerPage);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Database</h1>

      {/* Search Filter */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title, description, or cast..."
          value={search}
          onChange={handleSearch}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Movie ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Genre ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Release Date</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Cast</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map((movie) => (
            <tr key={movie.Movie_ID} className="odd:bg-white even:bg-gray-100 text-black">
              <td className="border border-gray-300 px-4 py-2">{movie.Movie_ID}</td>
              <td className="border border-gray-300 px-4 py-2">{movie.Title}</td>
              <td className="border border-gray-300 px-4 py-2">{movie.Description}</td>
              <td className="border border-gray-300 px-4 py-2">{movie.Genre_ID}</td>
              <td className="border border-gray-300 px-4 py-2">{movie.Release_Date}</td>
              <td className="border border-gray-300 px-4 py-2">{movie.Cast}</td>
              <td className="border border-gray-300 px-4 py-2">{movie.Rating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieTable;
