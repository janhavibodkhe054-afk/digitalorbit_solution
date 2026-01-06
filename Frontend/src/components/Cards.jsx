import React from "react";

function Cards({ item }) {
  // Generate syllabus URL dynamically
  const generateSyllabusURL = (id) => {
    return `/syllabus/${id}-syllabus.pdf`; // Adjust the pattern to match your file naming convention
  };

  return (
    <div className="mt-8 flex justify-center px-4">
  <div className="relative w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center overflow-hidden">
    
    {/* Image Section */}
    <figure className="w-full overflow-hidden rounded-t-2xl">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
      />
    </figure>

    {/* Card Body */}
    <div className="flex flex-col items-center text-center p-5">
      <h2 className="text-xl font-semibold text-white">{item.name}</h2>
      <p className="mt-2 text-gray-300 text-sm">{item.title}</p>
    </div>

    {/* Download Syllabus Button */}
    <div className="w-full flex justify-center pb-5">
      <a
        href={generateSyllabusURL(item.id)}
        download
        className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
      >
        Download Syllabus
      </a>
    </div>
  </div>
</div>

  );
}

export default Cards;
