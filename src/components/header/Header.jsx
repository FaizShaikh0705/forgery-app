import React, { useState } from 'react'
import './Header.css'
import Nav from '../nav/Nav'
import bg1 from '../../assets/bg2.jpg'


const Header = () => {
    const [isLoading, setIsLoading] = useState(false);


    return (
        <section id='Header' style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', maxHeight: '100%' }}>
            <Nav />
            <div className="container convertor_container" style={{ height: '100vh' }}>
                <div className="rowh-100 text-center">
                    <h1 style={{ paddingTop: "400px", fontSize: "32px" }}>Online Fake Document Detection System</h1>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,74.7C384,96,480,192,576,213.3C672,235,768,181,864,160C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
    );

}

export default Header


