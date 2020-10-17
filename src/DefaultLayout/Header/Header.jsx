import React, { useState } from "react";
import Logo from "../../Images/logo.png";
import ClassNames from "./Header.module.scss";

function Header() {

    let Routes = ["home", "product", "services", "clients", "about", "contact"];
    const [HeaderOpened, setHeader] = useState(false);
    function handleHeaderToggle() {
        setHeader(prevState => !prevState);
        console.log("the Function is Called")
    }
    return (
        <header className={`${ClassNames.Header} ${HeaderOpened && ClassNames.HeaderOpened}`}>
            <h1>
                <a herf="#home" ><img src={Logo} className={ClassNames.Logo} alt="The Logo" /></a>
                <button className={ClassNames.ToggleButton} onClick={handleHeaderToggle}>
                    <span className={ClassNames.IconBar}></span>
                    <span className={ClassNames.IconBar}></span>
                    <span className={ClassNames.IconBar}></span>
                </button>
            </h1>
            <ul className={ClassNames.RouteContainer}>
                {Routes.map((route, index) => {
                    return (
                        <li key={index}>
                            <a href={`#${route}`} className={ClassNames.Link}>{route}</a>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}
export default Header;