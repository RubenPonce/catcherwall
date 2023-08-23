import React, {useState} from 'react';

//@TODO add Instagram, TikTok, Kick, Facebook, Twitter
const tabClasses = {
    Rumble: 'rumble',
    Youtube: 'youtube',
}
export const TabContext = React.createContext();

export function Tab({children}) {
    const [activeTab, setActiveTab] = useState('Rumble');
    const [isFilterEnabled, setIsFilterEnabled] = useState(true);
    const handleToggle = () => {
        setIsFilterEnabled(!isFilterEnabled);
    };
    return (
        <TabContext.Provider value={{activeTab, isFilterEnabled}}>

            <div className="tab-container">
                <div className="tab-buttons">
                    {Object.keys(tabClasses).map((tab) => (
                        <button
                            key={tab}
                            className={`${tabClasses[tab]}  ${tab === activeTab ? `active ${tabClasses[tab]}-bg` : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
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
                    <div className={`${activeTab.toLowerCase()}-content`}>
                        {children}
                    </div>
                </div>
            </div>

        </TabContext.Provider>
    );
}
