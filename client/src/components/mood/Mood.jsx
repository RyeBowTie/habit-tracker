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
                    <img  onClick={() => setButtonPopup(true)} id="smile"
                    src="./assets/smile.png" alt=""
                    />
                    <Popup trigger ={buttonPopup} setTrigger ={setButtonPopup}>

                    </Popup>
                    </div>
                    <div className="item" >
                   <img onClick={() => setButtonPopup(true)} id="sad"
                    src="./assets/sad.png" alt=""
                    />
                    <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
                    <form>
                   
            </form>
                    </Popup>
                    </div>
                    <div className="item">
                    <img onClick={() => setButtonPopup(true)} id="angry"
                    src="./assets/angry.png" alt=""
                    />
                    <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>

                    </Popup>
                   </div>
                   <div className="item">
                    <img onClick={() => setButtonPopup(true)} id="emotion"
                    src="./assets/emotions.png" alt=""/>
                     <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                         </Popup>
            
                    </div>
                      </div>
               </div>
    )
}
 