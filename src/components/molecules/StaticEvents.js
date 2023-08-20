import React from "react";
import {filterWords} from "../../utils/filterwords";

export const StaticChannels = ({content, filterExplicitTitles}) => {
    if (!content.length) {
        return null;
    }
    return (
        <div className="border-2 border-green-500 rounded p-4">
            <h2 className="text-green-500 font-bold text-lg mb-4">
                Current Videos 🟢
            </h2>
            <div className="scroll-container">
                {content.map((contentItem, index) => {
                        const title = filterExplicitTitles ? filterWords(contentItem.title) : contentItem.title;
                        return (
                            <div key={index} className="card">
                                <div>
                                    <img src={contentItem.image} alt={contentItem.title}/>
                                    <a
                                        href={contentItem.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {title}
                                    </a>
                                    <p>{contentItem.date}</p>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );
};
