import React from "react";
import "./footer.css"


const Footer = () => {
    return (

        <footer>
            <div class="footer-container">
                <div class="footer-container-1">
                    <div><button class="other-btn">Apple store</button></div>
                    <div><button class="other-btn">Google play</button></div>
                </div>
                <div class="footer-container-2">
                    <ul>
                        <li class="font-w-700">Privacy</li>
                        <li><a href="#login">Log in</a></li>
                        <li><a href="#joinnow">Join now</a></li>
                    </ul>
                </div>
                <div class="footer-container-3">
                    <ul>
                        <li class="font-w-700">Feature</li>
                        <li><a href="#achievement">Achievement</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div class="footer-container-4">
                    <ul>
                        <li class="font-w-700">Help</li>
                        <li><a href="#">Log in / Register</a></li>
                        <li><a href="#">Privacy Center</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div class="footer-container-5">
                    <ul>
                        <li class="font-w-700">Connect</li>
                        <div class="icon">
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>

    );
}

export default Footer;


