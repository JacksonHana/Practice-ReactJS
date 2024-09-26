import React, {useState} from 'react';
import "./ToggleStyle.css";

function Toggle(){
// 1. enabling state: useState(initialize value)
// 2. initialize state:  useState(false)
// 3. reading state: 
// 4. update state

    const [on, setOn] = useState(false);

    const handleToggle = () => {
        // setOn(callback) => setOn(prevState => !prevState)
        setOn(o => !o);
    }


    return(
        <div>
            <div className={`toggle ${on ? 'active': ""}`} onClick={handleToggle} >
                <div className={`spinner ${on ? 'active' : ""}`}></div>
            </div>
        </div>  
    );
}

export default Toggle