import React from "react";
import "./Header.css";
import hopcamplogo from "../../assets/hopcamp.svg"
import searchIcon from "../../assets/search_icon.svg";


const Header = () => {
    return (
        <>
            <div className="header-banner">
                <div className="header-container-centered">
                    <div className="header-L-container">
                        <a href="https://www.hipcamp.com/en-US">
                            <div className="header-logo">
                            <img src={hopcamplogo} alt='Hopcamp logo'/>
                            </div>
                        </a>
                        <div className="header-search-btn-container">
                            <button className="header-search-btn">
                                    <div className="search-btn-content">
                                        <span className='px-3'>Start your search</span>
                                        <div className='search-icon-wrapper'>
                                            <img className='search-icon' src={searchIcon} alt='Search Icon'/>
                                        </div>
                                    </div>
                            </button>
                        </div>
                    </div>
                    <div className="header-R-container">
                        <div className="px-2">
                            <span className="header-link">Near Me</span>
                        </div>
                        <div className="px-2">
                            <span className="header-link">About</span>
                        </div>
                        <div className="px-2">
                            <span className="header-link">Earn Hipcash</span>
                        </div>
                        <div className="px-2">
                            <span className="header-link">Start hosting</span>
                        </div>
                        <div className="ps-2 pe-4">
                            <span className="header-link">Log in</span>
                        </div>
                        <button className="sign-up-btn">Sign up</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
