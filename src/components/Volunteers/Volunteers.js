import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    return (
        <div className='activity-container'>
            {
                volunteers.map(activity => <Activity
                    key={activity._id}
                    activity={activity}
                ></Activity>)
            }
        </div>
    );
};

export default Volunteers;