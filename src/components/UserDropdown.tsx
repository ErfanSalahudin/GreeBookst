import React from 'react';

const UserDropdown: React.FC = () => {
    return (
        <div style={{
            position: 'absolute', top: '100%', right: 0, marginTop: '5px', width: '150px',
            backgroundColor: '#0d284f', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', borderRadius: '4px', zIndex: 1001,
            padding: '5px 0'
        }}>
            <div style={{ padding: '10px 15px', color: '#ffffff', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Profile</div>
            <div style={{ padding: '10px 15px', color: '#ffffff', cursor: 'pointer' }}>Logout</div>
        </div>
    );
};

export default UserDropdown;
