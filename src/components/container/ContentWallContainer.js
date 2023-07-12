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
  // Live events need to be hooked up to change with web sockets connected to graphQL data distribution
  const events = {
    liveEvents: [{}, {}, {}],
    staticEvents: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  };
  return (
    <div className="w-full">
      <h1 className="bg-red-300">The Wall of Light In The Darkness</h1>
      {/*  The Event Container*/}
      <div className="border-amber-200 h-full w-full">
        <LiveEvents events={events} />
        <StaticEvents events={events} />
      </div>
    </div>
  );
};
