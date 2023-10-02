import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const ViewerDiscretionModal = ({ isAdvised, setIsAdvised }) => {

    useEffect(() => {
        const isAdvised = Cookies.get('isAdvised');

        if (!isAdvised) {
            setIsAdvised(false);
        }
    }, [isAdvised, setIsAdvised]);

    const handleClose = () => {
        Cookies.set('isAdvised', 'true', { expires: 7 });
        setIsAdvised(true);
    };

    return (
        <>
            {!isAdvised && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Viewer Discretion Advised</h2>
                        <p>Predator catching often features content that is not suitable for general audiences, including graphic material and explicit language. Please note that the tactics employed by Catchers, the language used, and law enforcement shown are not directly endorsed by CatcherTV.</p>
                        <button onClick={handleClose}>I Understand</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewerDiscretionModal;
