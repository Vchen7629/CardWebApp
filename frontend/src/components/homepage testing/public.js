import { Link } from 'react-router-dom'
import React from 'react';
import Cardsearch from '../buttons/searchbar';
import Banlist from '../buttons/banlist';
import Mycards from '../buttons/my-cards';
import Aboutus from '../buttons/about-us';
import Privacypolicy from '../buttons/Privacypolicy';
import ContactInfo from '../buttons/contactinfo';
import Home from '../buttons/home';
import Login from '../buttons/login';




const Public = () => {
   
    const content = (
        <section className="public">
            <header className="header">
                <ul className="Menu-container-left">
                    <li>
                        <Cardsearch/> {/*button component to redirect to /search endpoint */}
                    </li>
                    <li>
                        <Banlist/> {/*button component to redirect to /banlist endpoint*/}
                    </li>
                </ul>
                <div className="h1-container-dash">
                    <h1>DeckDatabaseOnline</h1>
                </div>
                <ul className='Menu-container-right'>
                    <li>
                        <Mycards/> {/*button component to redirect to /my-cards endpoint*/}
                    </li>
                    <li>
                        <Login/> {/*button component to redirect to /about-us endpoint*/}
                    </li>
                </ul>
            </header>
            <banner>
                <div className="banner"></div>
            </banner> 
            <body>
                <h1 className= "h1titlebox">
                    Welcome to the My Deck Database website
                </h1>
                
                <div className='body-container'>
                    <div className="homepage-parallelogram-upperleft"></div>
                    <div className="homepage-parallelogram-bottomleft"></div>
                    <div className="homepage-parallelogram-upperright"></div>
                    <div className="homepage-parallelogram-bottomright"></div>
                    <div className="tech-circle"></div>
                </div>
            </body>
            <footer>
                <div className="footer-container-homepage">
                    <p classname="copyright-container">&copy; 2023 DeckDatabaseOnline. All rights reserved.</p>   
                    <ul className="footer-links">
                        <li>
                            <Privacypolicy/> {/*button component to redirect to /privacy-policy endpoint */}
                        </li>
                        <li>
                            <ContactInfo/> {/*button component to redirect to /contact-info endpoint */}
                        </li> 
                        <li>
                            <Aboutus/> {/*button component to redirect to /login endpoint */}
                        </li>
                        <li>
                            <Home/> {/*button component to redirect to / endpoint */}
                        </li>
                        <li>
                            Click for Surprise
                        </li>
                    </ul>
                    
                </div>
            </footer>
        </section>
    )
    return content
}

export default Public