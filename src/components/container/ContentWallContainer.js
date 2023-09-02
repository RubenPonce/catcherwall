import { StaticChannels } from "../molecules/StaticEvents";
import { useEffect, useState } from "react";
import { useGetContentLatestContent } from "../../queries/getContent";
import {Tab} from "../atoms/Tab";

export const ContentWallContainer = () => {
  const {loading, error, data} = useGetContentLatestContent();
  const [events, setEvents] = useState({
    liveChannels: [],
    staticContent: [],
  });

  useEffect(() => {
    if (!loading && !error) {
      //@TODO: add live through polling service
      /*  const liveChannels = data.channels.filter(
        (channel) => channel.status.live.isLive,
      );*/
      const staticContent = data.channels;

      setEvents({staticContent});
    }
  }, [loading, error, data]);
  if (error) {
    return (
        <div className="error-message">
          <p>Something went wrong! Please try again later.</p>
        </div>
    );
  }
  if (loading) {
    return (
        <p className="loading">Loading...</p>
  )
}

  return (
    <div className="">
      {/* Tab for media providers */}
      <Tab>
        {/*        <LiveEvents channels={events.liveChannels} />*/}
        <StaticChannels channels={events.staticContent} />
      </Tab>
    </div>
  );
};
