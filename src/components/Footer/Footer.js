import React from 'react';

import './Footer.scss';

const Footer = (props) => <footer className="Footer">
    <div className="align-items-center container d-flex h-100 justify-content-center">
        <div>
            <span className="font-size-12px">Copyright © {new Date().getFullYear()} - UX/UI Design by Carma</span>
        </div>
    </div>
</footer>

export default Footer;