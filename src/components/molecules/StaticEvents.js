export const StaticEvents = ({ events }) => {
  return (
    <div className="border-amber-200 h-full w-full">
      <h2>Static Events</h2>
      <div className="border-amber-200 h-full w-full grid-cols-4 auto-rows-auto inline-grid">
        {events.staticEvents.map((event) => {
          return (
            <div className="border-amber-100 border-2 rounded-2xl h-full mt-3">
              <h3>{event.type || "demo static type"}</h3>
              <p>{event.url || "demo static url"}</p>
              <p>{event.live || "demo static live"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
