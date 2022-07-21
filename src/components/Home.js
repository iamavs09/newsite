import React, {useState} from 'react';
import "../Styles/Home.css";
import {GiHamburgerMenu} from "react-icons/gi";

function Home() {
    const [openLinks,setOpenLinks] = useState(false);
    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    }

    
  return (
    <div id='home'>
        <div className="wrapper">
            <div className="nav-container">
                <div className="logo" >
                    Codeext
                </div>
                <div id={openLinks ? "open" : "close"}>
                    <div className="hiddenlinks">
                        <ul>
                            <li> <a href="#home">Home</a> </li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#testimonial">Testimonials</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>
                </div>
                    

                        
                

                <ul className='navlinks'>
                    <li> <a href="#home">Home</a> </li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#testimonial">Testimonials</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><button>Free Trial</button></li>
                </ul>
                <div className="hamburgurer-menu" >
                    <button onClick={toggleNavbar}>
                    <GiHamburgerMenu/>
                    </button>
                    
                </div>
            </div>
            <div className="content-box">
                <div className="left">
                    <h1>Codext one of <br />
                    the best system <br />
                    in SASS</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ratione optio eveniet sit nesciunt similique enim.</p>
                    <button>Try a Live Demo</button>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home