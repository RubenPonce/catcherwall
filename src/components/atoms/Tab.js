import React, { useState } from 'react';

//@TODO add Instagram, TikTok, Kick, Facebook, Twitter
const tabClasses = {
    Rumble: 'rumble',
    Youtube: 'youtube',
}
export const TabContext = React.createContext();
export function Tab({children}) {
    const [activeTab, setActiveTab] = useState('Rumble');

    return (
        <TabContext.Provider value={{activeTab}}>
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
            <div className="tab-content">
                <div className={`${activeTab.toLowerCase()}-content`}>
                    {children}
                </div>
            </div>
        </div>
        </TabContext.Provider>
    );
}
