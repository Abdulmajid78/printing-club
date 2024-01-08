import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-border">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container my-2">
                            <a className="navbar-brand" href="#">PRINTING CLUB</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link" href="#">Home</a>
                                    <a className="nav-link mx-5" href="#">Our story</a>
                                    <a className="nav-link" href="#">Apply now</a>
                                </div>
                            </div>
                            <div className="button-black">
                                <a href="">GET QUOTE</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;