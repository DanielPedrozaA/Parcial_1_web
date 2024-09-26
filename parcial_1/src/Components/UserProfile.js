import React from 'react';
import { getUserData } from '../Informacion/UserInfo';

const UserProfile = () => {
    const user = getUserData();

    return (
        <div className="user-info d-flex justify-content-center align-items-center p-4" style={{ backgroundColor: '#2e7379', color: 'white' }}>
            <div className="d-flex align-items-center">
                <img
                    src={user.profileImage}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '80px', height: '80px', marginRight: '15px' }}
                />
                <div>
                    <h2>{user.fullName}</h2>
                </div>
            </div>
            <div className="d-flex align-items-center ml-4">
                <div className="text-center mx-3">
                    <i className="fas fa-running"></i>
                    <p>{user.bestRunningTime}</p>
                </div>
                <div className="text-center mx-3">
                    <i className="fas fa-swimmer"></i>
                    <p>{user.bestSwimmingTime}</p>
                </div>
                <div className="text-center mx-3">
                    <i className="fas fa-biking"></i>
                    <p>{user.bestCyclingTime}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
