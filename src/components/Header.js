import React, {Component} from 'react';
import header from '../assets/img/header.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row my-5 py-5">
                        <div className="col-xl-5">
                            <h1>We help you look
                                good on paper</h1>
                            <p>Quality your customers can feel</p>
                            <div className="button-black">
                                <a href="">GET QUOTE</a>
                            </div>
                            <h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-dash-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
                                </svg>
                                Over 1,546,000 pieces of mail printed last year
                            </h6>
                        </div>
                        <div className="col-xl-1"></div>
                        <div className="col-xl-6 d-flex align-items-center justify-content-center">
                            <img src={header} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;