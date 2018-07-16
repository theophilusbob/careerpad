import React from 'react'
import Arief from './assets/founder/arief@2x.png'
import Intan from './assets/founder/intan@2x.png'
import Teguh from './assets/founder/teguh@2x.png'

const Founder = () => (
    <div className="full_container">
        <div className="main_container">
                <div className="two_container">
                    <div className="avatar">
                        <img src={Arief} alt="Arief Avatar"/>
                    </div>
                    <div className="contentItem">
                        <h1>Arief Rakhmadani</h1>
                    </div>
                    <div className="thickSeparator"/>
                    <div className="contentItem">
                        <p>
                        A Digital and communication practitioner with 15+ years experience under his belt. In his last role, he was the digital lead for Tempo Scan Pacific, one of the biggest pharmaceutical, personal care, and cosmetics companies Indonesia. He lead 40 people across social, technical, creative and digital media under Tempo Digital Center. This “internal agency” manages all Tempo Scan’s brands including bodrex, hemaviton, vidoran, My Baby, Marina, Revlon, and Ultima II.
                        <br/>
                        <br/>
                        Arief started his career in the PR industry, managing communication strategy for companies such as Intel, Oracle, and BlackBerry. Seeing the fast adoption and growth in digital, he joined Mirum to head the social media division and then moved up to the position of Strategy Director.
                        <br/>
                        <br/>
                        In his spare time, he enjoys giving talks on digital and technology.    
                        </p>
                    </div>
                </div>
                <div className="two_container">
                    <div className="avatar">
                        <img src={Intan} alt="Intan Avatar"/>
                    </div>
                    <div className="contentItem">
                        <h1>Intan Andini</h1>
                    </div>
                    <div className="thickSeparator"/>
                    <div className="contentItem">
                        <p>
                        Started her career in the agency side, spending most of her time analysing data and provide valuable insight for her clients such as XL Axiata, Nestle, and Singapore Airlines. She then spread her wings and moving to Unilever to undertake the digital head role for ice cream category. She was involved in the digital transformation of three Unilever’s leading brands, Magnum, Walls, and Paddle Pop.
                        <br/>
                        <br/>
                        Her genuine passion for digital has made her the rising star in analytics and received the award by Digital Analytics Association. Recently she was chosen as one of the 100 Smartest Digital Marketing Leaders by World Digital Marketing Congress.
                        <br/>
                        <br/>
                        In her spare time, she plays basketball and continue her endless search for the best coffee shop in Indonesia.
                        </p>
                    </div>
                </div>
                <div className="two_container">
                    <div className="avatar">
                    <div className="avatar">
                        <img src={Teguh} alt="Teguh Avatar" />
                    </div>
                    </div>
                    <div className="contentItem">
                        <h1>Teguh Triguna</h1>
                    </div>
                    <div className="thickSeparator"/>
                    <div className="contentItem">
                        <p>
                        Armed with a degree in communication and business burning in his heart, Teguh considered starting his career as a digital analyst before he decided to turn good and went into entrepreneurship instead. 
                        3 years on, this remains a right decision he has cherished ever since. Before he started Chalkboard Asia, He worked in Mirum - JWT, handling local and global clients from a wide range of categories, from FMCG, Bankings, Beverages, Dairy to E-Commerce.
                        <br/>
                        <br/>
                        As the Digital Group Head, Teguh leads a department of brand strategists, social media, crisis management and analytics, overseeing the communication and content plan of all global and local clients.
                        When not living in “Agency Life”, Teguh actively contribute to the industry through academic teaching about social media and digital communication field to universities. 
                        </p>
                    </div>
                </div>
            </div>
        <div className="footer">
            CareerPad © 2018 / Home page photo by Ben O'Sullivan on Unsplash
        </div>
    </div>
);
            
export default Founder