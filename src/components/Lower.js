import React, {Component} from 'react';
import lower from '../assets/img/lower.png'

class Lower extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="main">
                        <div className="container">
                            <div className="row my-5 py-5">
                                <div className="col-xl-6">
                                    <img src={lower} alt=""/>
                                </div>
                                <div className="col-xl-6">
                                    <h2>
                                        Cut through the boise and go
                                        straight to the Mailbox.
                                    </h2>
                                    <p>
                                        Let’s get your message directly into the hands of your
                                        customers, a place where they will actually see it.
                                        <br/>
                                        <br/>
                                        Speak to one of our great team members today.
                                    </p>

                                    <div className="button-black">
                                        <a href="">GET QUOTE</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lower;