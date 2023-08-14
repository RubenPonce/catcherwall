import React from "react";

export const LiveEvents = ({ channels }) => {
  if (!channels.length) {
    return <h2>No Live Events 😞</h2>;
  }

  return (
    <div className="border-2 border-red-500 rounded p-4">
      <h2 className="text-red-500 font-bold text-lg mb-4">Live Events 🔴</h2>
      <div className="grid grid-cols-1 gap-4">
        {channels.map((channel) => {
          return (
            <div
              key={channel.channelId}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-md transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2">
                {channel.name || "Demo Type"}
              </h3>
              <a
                href={channel.socials || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {channel.url || "Demo URL"}
              </a>
              <p className="text-gray-600 mt-2">
                {channel.live || "Demo Live"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
