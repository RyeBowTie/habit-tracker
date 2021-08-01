import React from 'react';
import "./mood.scss"
import Popups  from '../../Popups';
import { useState }  from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
  
    function toggle() {
      setIsShowing(!isShowing);
    }
  
    return {
      isShowing,
      toggle,
    }
  };

export default function Mood() {
 
const {isShowing, toggle} = useModal();

return (
    <div>
        <header>
        <p>Place holder fro mood titel</p>
        </header>
    <div className="Popup">
  
    <img onClick={toggle}  id="smile" src="./assets/smile.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
  <img onClick={toggle}  id="emotion" src="./assets/emotions.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
   <img onClick={toggle}  id="sad" src="./assets/sad.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
    <img onClick={toggle}  id="angry" src="./assets/angry.png"  alt=""/>
    <Popups 
    isShowing={isShowing}
    hide={toggle}
 />
 </div>
 </div>
 );

}
