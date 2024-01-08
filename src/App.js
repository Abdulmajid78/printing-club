import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import RowSection from "./components/RowSection";
import Lower from "./components/Lower";
import Footer from "./components/Footer";


class App extends Component {
    render() {
        // js.files
        return (
            <div>
                <Navbar/>
                <Header/>
                <MainSection/>
                <RowSection/>
                <Lower/>
                <Footer/>
            </div>
        )
    }
}

export default App