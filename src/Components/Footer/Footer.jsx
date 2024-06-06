import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDribbble, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black p-6 ">
            <div className="flex justify-center space-x-6">
                <a href="https://github.com/prajwol-stha" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://dribbble.com/prajwol_stha" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
                    <FontAwesomeIcon icon={faDribbble} />
                </a>
                <a href="mailto:prajwolid@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://www.instagram.com/prajwol_stha" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/prajwol-s-1b6b10120/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            <div className='text-white pb-0 pt-5'>© {new Date().getFullYear()} Prajwol Blogs. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
