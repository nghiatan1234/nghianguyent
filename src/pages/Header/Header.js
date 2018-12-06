import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>
                <div className="header-wrap ">
                    <header className="header ">
                        <div className="non-desktop-header show-non-desktop"></div>

                        <div className="primary-wrap">
                            <div className="brand-wrap">
                                <h1>
                                    <a href="/" className="brand-link">
                                        <img src="https://getlinks.co/images/v2/getlinks_full_logo.png" alt="Bookdepository.com" />
                                    </a>
                                </h1>
                            </div>
                            <div className="search-wrap">
                                <form>
                                    <div className="el-wrap header-search-el-wrap">
                                        <input type="text" placeholder="https://getlinks.co" 
                                            name="searchTerm" className="text-input"/>
                                        <input type="hidden" name="search"/>
                                        <button aria-label="Search" className="header-search-btn" type="submit">
                                            <span className="text">Search</span>
                                        </button>
                                    </div><div className="result-wrap no-result"><div className="suggest-result">

                                    </div><div className="book-result"></div></div>
                                </form>
                                <a rel="nofollow" href="/search/advanced" className="advanced-search">Advanced Search</a>
                                <div className="bg-screen"></div></div>

                            <div className="free-delivery-wrap">
                                <div className="free-delivery">
                                    <a rel="nofollow" href="/help/topic/HelpId/3/Which-countries-do-you-deliver-to#helpContent" alt="Free delivery worldwide" title="Free delivery worldwide">
                                        <i className="icon-rocket"></i>
                                        Free delivery worldwide
                                    </a>
                                </div>
                            </div>

                        </div>

                    </header>
                </div>
            </div>

        )
    }
}

export default Header;