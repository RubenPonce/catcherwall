import { StaticChannels } from "../molecules/StaticEvents";
import { useEffect, useState } from "react";
import { useGetContentLatestContent } from "../../queries/getContent";
import {Tab} from "../atoms/Tab";

export const ContentWallContainer = () => {
  const { loading, error, data } = useGetContentLatestContent();
  const [events, setEvents] = useState({
    liveChannels: [],
    staticContent: [],
  });
  const [isFilterEnabled, setIsFilterEnabled] = useState(true);
  const handleToggle = () => {
    setIsFilterEnabled(!isFilterEnabled);
  };
  useEffect(() => {
    if (!loading && !error) {
      //@TODO: add live through polling service
      /*  const liveChannels = data.channels.filter(
        (channel) => channel.status.live.isLive,
      );*/
      const staticContent = data.channels;

      setEvents({ staticContent });
    }
  }, [loading, error, data]);
  if (error) {
    return (
        <div className="error-message">
          <p>Something went wrong! Please try again later.</p>
        </div>
    );
  }
  return (
    <div className="">
      {/* Tab for media providers */}
      {loading? <p>Loading...</p>: null}
      <Tab>
        {/*        <LiveEvents channels={events.liveChannels} />*/}
        <section className="flex">

          <label className="bad-word-filter-label" htmlFor="filter-title-checkbox">
            Filter explicit titles
          </label>
            <input
                className="bad-word-filter-checkbox"
                type="checkbox"
                checked={isFilterEnabled}
                onChange={handleToggle}
                id="filter-title-checkbox"
            />
        </section>
        <StaticChannels channels={events.staticContent} isFilterEnabled={isFilterEnabled} />
      </Tab>
    </div>
  );
};
