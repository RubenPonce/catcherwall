import { LiveEvents } from "../molecules/LiveEvents";
import { StaticChannels, StaticEvents } from "../molecules/StaticEvents";
import { useEffect, useState } from "react";
import { useGetChannels } from "../../queries/getchannels";
import { useGetContentLatestContent } from "../../queries/getContent";

export const ContentWallContainer = () => {
  const { loading, error, data } = useGetContentLatestContent();
  console.log({ data });
  const [events, setEvents] = useState({
    liveChannels: [],
    staticContent: [],
  });

  useEffect(() => {
    if (!loading && !error) {
      /*  const liveChannels = data.channels.filter(
        (channel) => channel.status.live.isLive,
      );*/
      const staticContent = data.getLatestContent;

      setEvents({ staticContent });
    }
  }, [loading, error, data]);

  /*  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <></>;*/
  return (
    <div className="w-full">
      <h1 className="bg-red-300">Current Happening in the Community</h1>
      {/* The Event Container */}
      <div className="border-amber-200 h-full w-full">
        {/*        <LiveEvents channels={events.liveChannels} />*/}
        <StaticChannels content={events.staticContent} />
      </div>
    </div>
  );
};
