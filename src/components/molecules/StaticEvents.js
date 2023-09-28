import React from 'react';
import {Content} from "./Content";

export const StaticChannels = ({channels}) => {
    if (!channels.length) {
        return null;
    }
    const latestUpdatedChannels = [...channels].sort((a, b) => {
        return new Date(b.timeOfLastUpdate) - new Date(a.timeOfLastUpdate);
    })
    const allContent = latestUpdatedChannels.flatMap((channel) =>
        channel.content.map(contentItem => ({
            ...contentItem,
            channelName: channel.name
        }))
    );

 const sortedContent =     allContent.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
        <div className="static-channels">
            <h2>
                Current Videos 🟢
            </h2>
            <div className="static-channels-container">
                {sortedContent.map((content, index) => (
                    <Content key={content.url} content={content} name={content.channelName} index={index}/>
                ))}
            </div>
        </div>
    );
};
