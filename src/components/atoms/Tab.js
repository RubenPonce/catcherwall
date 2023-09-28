import React, {useState} from 'react';

//@TODO add Instagram, TikTok, Kick, Facebook, Twitter

export const TabContext = React.createContext();

export function Tab({children}) {
    const [isFilterEnabled, setIsFilterEnabled] = useState(true);
    const [contentNotFounCount, setContentNotFoundCount] = useState(0);
    const handleToggle = () => {
        setIsFilterEnabled(!isFilterEnabled);
    };
    return (
        <TabContext.Provider value={{ isFilterEnabled, setContentNotFoundCount, contentNotFounCount}}>

            <div className="tab-container">
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
                <div className="tab-content">
                    <div className={`all-channel-content`}>
                        {children}
                    </div>
                    <p>{contentNotFounCount>0 ? 'Uploaded content deleted from media sources: ' + contentNotFounCount : ''}</p>
                </div>
            </div>

        </TabContext.Provider>
    );
}
