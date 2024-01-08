import React, {Component} from 'react';
import card1 from '../assets/img/retangle1.png';
import card2 from '../assets/img/retangle2.png';
import card3 from '../assets/img/retangle3.png';
import card4 from '../assets/img/retangle4.png';
import card5 from '../assets/img/retangle5.png';
import card6 from '../assets/img/retangle6.png';
import card7 from '../assets/img/retangle7.png';
import card8 from '../assets/img/retangle8.png';

class RowSection extends Component {
    render() {
        return (
            <div>
                <div className="rowSection">
                    <div className="container">
                        <div className="row mt-5  py-5">
                            <h3 className="text-center">Print that delivers</h3>

                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card1} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Brouchers
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card2} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Flyers
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card3} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Package inserts
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card4} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Newspaper inserts
                                    </div>
                                </div>
                            </div>

                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card5} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Letters
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card6} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Reply cards
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card7} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Direct mail inserts
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mb-4">
                                <div className="card border-0">
                                    <div className="card-header p-0">
                                        <img className="w-100" src={card8} alt=""/>
                                    </div>
                                    <div className="card-body text-center">
                                        Flyers
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row mb-5 d-flex align-items-center justify-content-center">
                            <div className="white-box d-flex align-items-center justify-content-center">
                                See all <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="31" height="16"
                                             viewBox="0 0 31 16" fill="none">
                                <path
                                    d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                                    fill="black"/>
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RowSection;