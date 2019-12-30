import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Header.scss';
import appLogo from './img/trombi.svg';
import LogoDark from './img/logo-carma.svg';
import LogoLight from './img/logo-carma-white.svg';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationsMenuIsOpen: false
        }
    }
    toggleApplicationsMenu = () => {
        this.setState({
            applicationsMenuIsOpen: !this.state.applicationsMenuIsOpen
        })
    }
    render = () => {
        return <header className='Header sticky-top'>
            <div className='container-fluid'>
                <div className="row height-60px align-items-center px-md-2">
                    <div className="col logo-carma-container">
                        <Link to="/">
                            <img src={(this.props.theme === 'theme-light') ? LogoDark : LogoLight} alt="logo carma" />
                        </Link>
                    </div>
                    <div className="col text-center application-name-container">
                        <img src={appLogo} alt="Application logo" />
                        <span className='website-name font-size-26px'><span className="d-none d-md-inline antagometricaRegular">FaceOffice</span></span>
                    </div>
                    <div className="col text-right">
                        <button className="btn toggler-btn d-md-inline-flex mr-md-1" onClick={this.props.toggleTheme}>
                            <span className="font-size-14px d-none d-initial-md">{(this.props.theme === 'theme-light') ? 'Thème sombre' : 'Thème clair'}</span>
                            <i className="fas fa-adjust ml-md-2 toggler-btn-ico font-size-21px"></i>
                        </button>
                        {/* <div className="d-inline-flex justify-content-center position-relative">
                            <>
                                {
                                    (this.state.applicationsMenuIsOpen) &&
                                    <ApplicationMenuPopOver toggleApplicationsMenu={this.toggleApplicationsMenu} theme={this.props.theme} />
                                }
                            </>

                            <button onClick={this.toggleApplicationsMenu} className={`btn ${(this.state.applicationsMenuIsOpen) ? 'is-open' : ''} global-menu-btn  width-38px height-38px p-0  border-radius-100p`}>
                                <img src={(this.state.applicationsMenuIsOpen) ? RectIcoWhite : RectIco} alt="menu" />
                            </button>
                        </div>
                            */}

                    </div>
                </div>
            </div>
        </header>
    }
}