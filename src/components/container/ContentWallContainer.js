import React, { useState, useEffect } from "react";
import { LiveEvents } from "../molecules/LiveEvents";
import { StaticEvents } from "../molecules/StaticEvents";

const Event = {
  type: "Tweet" || "YoutubeVideo" || "RumbleVideo" || "ForumPost",
  url: "",
  timestamp: "",
};
const LiveEvent = {
  type: "YoutubeVideo" || "RumbleVideo" || "Tweet",
  url: "",
  live: "Boolean",
};
export const ContentWallContainer = () => {
  // Example state for the web socket connection and events
  const [events, setEvents] = useState({
    liveEvents: [],
    staticEvents: [],
  });
  const liveEventsData = [
    {
      id: 1,
      title: "Live Event 1",
      description: "Description of Live Event 1",
    },
    {
      id: 2,
      title: "Live Event 2",
      description: "Description of Live Event 2",
    },
    // Add more live events as needed
  ];
  // Simulating the web socket connection and receiving live events
  useEffect(() => {
    // Replace this with your actual WebSocket connection code
    const webSocket = new WebSocket("ws://your-websocket-url");

    webSocket.onmessage = (event) => {
      const liveEvents = JSON.parse(event.data);
      setEvents((prevEvents) => ({
        ...prevEvents,
        liveEvents: liveEventsData, // Replace with the liveEvents data received from the WebSocket
      }));
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      webSocket.close();
    };
  }, []);

  // Example static events data
  const staticEventsData = [
    {
      id: 1,
      title: "Static Event 1",
      description: "Description of Static Event 1",
    },
    {
      id: 2,
      title: "Static Event 2",
      description: "Description of Static Event 2",
    },
    // Add more static events as needed
  ];

  useEffect(() => {
    // You can update the staticEvents state with new data if needed
    setEvents((prevEvents) => ({
      ...prevEvents,
      staticEvents: staticEventsData,
      liveEvents: liveEventsData,
    }));
  }, []);
  console.log({ events });
  return (
    <div className="w-full">
      <h1 className="bg-red-300">Current Happening in the Community</h1>
      {/* The Event Container */}
      <div className="border-amber-200 h-full w-full">
        <LiveEvents events={events.liveEvents} />
        <StaticEvents events={events.staticEvents} />
      </div>
    </div>
  );
};
