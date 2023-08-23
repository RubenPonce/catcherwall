import React, {useMemo} from "react";
import {Channel} from "./Channel";

export const StaticChannels = ({channels}) => {
    const latestUpdatedChannels = useMemo(() => {
        return channels.sort((a, b) => {
            return new Date(b.timeOfLastUpdate) - new Date(a.timeOfLastUpdate);
        })
    }, [channels]);
    console.log({latestUpdatedChannels})
    if (!channels.length) {
        return null;
    }

    console.log({latestUpdatedChannels})
    return (
        <div className="static-channels">
            <h2>
                Current Videos 🟢
            </h2>
            <div className="static-channels-container">
                {latestUpdatedChannels.map((channel) => (
                    <Channel key={channel.channelId} channel={channel}/>
                ))}
            </div>
        </div>
    );
};
