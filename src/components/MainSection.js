import React, {Component} from 'react';
import main from "../assets/img/main.png";

class MainSection extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="container">
                        <div className="row my-5 py-5">
                            <div className="col-xl-6">
                                <img src={main} alt=""/>
                            </div>
                            <div className="col-xl-6">
                                <h2>
                                    70% of Americans believe
                                    physical mail is more personal
                                    than the internet.*
                                </h2>
                                <p>
                                    In the age of digital advertising it is easy to overlook print.
                                    Don’t make this mistake. Over fifty six percent of people
                                    say that receiving mail is a pleasure. Most people look
                                    forward to checking their mailbox everyday.
                                </p>
                                <div className={"d-flex justify-content-around"}>
                                    <div className="retangle">
                                        <h4>Email</h4>
                                        <span>17 seconds</span>
                                    </div>
                                    <div className="retangle">
                                        <h4>Direct mail</h4>
                                        <span>17 days</span>
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

export default MainSection;