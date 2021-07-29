import React, { useState } from 'react';

const MoodForm = () => {
    return (
        <>
        <div>
            <h2>Hello Person, How are you feeling?</h2>
        </div>
        <div>
            <input type="button" value="V Sad" className="V-Sad"/>
            <input type="button" value="Sad" className="Sad"/>
            <input type="button" value="meh" className="meh"/>
            <input type="button" value="Happy" className="happy"/>
            <input type="button" value="V Happy" className="V-happy"/>
        </div>
        <div>
            <textarea placeholder="Would you like to talk about it?" rows="10" cols="50"></textarea>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
        </>
    )
}

export default MoodForm;