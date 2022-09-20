import { useEffect, useState } from "react";
import evaluateTheme from "./themeControl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const ThemeControlButton = ({ className }) => {
    // State to force rerenders
    const [render, setRender] = useState(0);
    
    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            setRender(prev => prev + 1);
        });
        setRender(1);
    }, [])
    
    let themeIcon: JSX.Element;
    if(typeof window !== "undefined") {
        let savedTheme = window.localStorage.getItem("theme");
        if(savedTheme === "light" || 
        (savedTheme === null && window.matchMedia("(prefers-color-scheme: light)").matches)
        ) {
            themeIcon = <FontAwesomeIcon icon={faSun} onClick={() => {
                localStorage.setItem("theme", "dark");
                evaluateTheme();
                setRender(prev => prev + 1);
            }} />
        } else {
            themeIcon = <FontAwesomeIcon className="-rotate-12" icon={faMoon} onClick={() => {
                localStorage.setItem("theme", "light");
                evaluateTheme();
                setRender(prev => prev + 1);
            }} />
        }
    }
    return (
        <button aria-label="Change Theme" className={className}>
            { render !== 0 && themeIcon }
        </button>
    )
}

export default ThemeControlButton;