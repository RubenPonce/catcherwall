import React from "react";

export const StaticEvents = ({ events }) => {
  return (
    <div className="border-2 border-green-500 rounded p-4">
      <h2 className="text-green-500 font-bold text-lg mb-4">
        Static Events 🟢
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-md transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2">
                {event.type || "Demo Static Type"}
              </h3>
              <a
                href={event.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {event.url || "Demo Static URL"}
              </a>
              <p className="text-gray-600 mt-2">
                {event.live || "Demo Static Live"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
