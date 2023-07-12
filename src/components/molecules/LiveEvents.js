export const LiveEvents = ({ events }) => {
  // if (!events.liveEvents.length) {
  //   return <h2>No Live Events :(</h2>;
  // }
  return (
    <div className="border-amber-200 h-full w-full">
      <h2>Live Events 🔴</h2>
      <div className="w-full w-full grid-cols-4 auto-rows-auto inline-grid">
        {events.liveEvents.map((event) => {
          return (
            <div className="border-amber-200 h-full ">
              <h3>{event.type || "demo type"}</h3>
              <p>{event.url || "demo url"}</p>
              <p>{event.live || "demo live"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
