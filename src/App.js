import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import MainSection from "./components/mainSection";


class App extends Component {
    render() {
        // js.files
        return (
            <div>
                <Navbar/>
                <Header/>
                <MainSection/>
            </div>
        )
    }
}

export default App