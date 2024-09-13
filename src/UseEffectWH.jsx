import React, {useState, useEffect} from "react";

function UseEffectWH(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return() => {
            // CLEAN UP
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");

        }
    },[]);

    useEffect(() => {
        document.title = `Size ${width} x ${height}`;
        return () => {
            // CLEAN UP CODE
        }
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Windown Width: {width}px</p>
        <p>Windown Height: {height}px</p>
    </>);
}

export default UseEffectWH