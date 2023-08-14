import React from "react";

export const StaticChannels = ({ content }) => {
  console.log({ content });
  if (!content.length) {
    return null;
  }
  return (
    <div className="border-2 border-green-500 rounded p-4">
      <h2 className="text-green-500 font-bold text-lg mb-4">
        Static channels 🟢
      </h2>
      {content.map((contentItem, index) => (
        <div key={index} className="mb-4 p-2 border rounded bg-gray-100">
          <div className="flex flex-col md:flex-row items-center mb-2">
            >
            <img
              src={contentItem.image}
              alt={contentItem.title}
              className="w-16 h-16 object-cover rounded mr-2 mb-2 md:mb-0"
            />
            <a
              href={contentItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {contentItem.title}
            </a>
            <p className="text-gray-500 text-sm">{contentItem.date}</p>
          </div>
          ) }
        </div>
      ))}
    </div>
  );
};
