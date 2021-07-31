import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {

    const setClassName = ({ date, view }) => {
        if (view === 'month') {
            // make the query to get mood data
            const fomattedDay = date.toISOTimeString();
            if ('gg') { // if (mood data at date === 'very-happy')
                return 'very-happy'
            } else if ('gg') { // if (mood data at date === 'happy')
                return 'happy'
            } else if ('gg') { // if (mood data at date === 'meh')
                return 'meh'
            } else if ('gg') { // if (mood data at date === 'sad')
                return 'sad'
            } else if ('gg') { // if (mood data at date === 'very-sad')
                return 'very-sad'
            }
        }


    }
    return (
        
        <Calendar 
            tileClassName = {setClassName}
        />
        
    )

}

export default CalendarPage;