import React from 'react';
import "./mood.scss"
import Popup from '../../Popups';
import { useState }  from 'react';




export default function Mood() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="mood" id="mood"> 
             <h1>Mood</h1>
               <div className ="container">
                   <div className="item">
                    <img id="smile"
                    src="./assets/smile.png" alt=""
                    />
                    </div>
                    <div className="item" >
                    <button onClick={() => setButtonPopup(true)}><img id="sad"
                    src="./assets/sad.png" alt=""
                    /></button>
                    <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
                    <form>
                   
            </form>
                    </Popup>
                    </div>
                    <div className="item">
                    <img  id="angry"
                    src="./assets/angry.png" alt=""
                    />
                   </div>
                   <div className="item">
                    <img  id="emotion"
                    src="./assets/emotions.png" alt=""
                    />
                    </div>
                      </div>
               </div>
    )
}
 