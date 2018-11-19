import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/d/embed?mid=1zHI3mSGPhVMDQ-0AZQRB3jdapA0" 
                width="100%" 
                height="500px"
                frameBorder="0"
                allowFullScreen
            >
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;