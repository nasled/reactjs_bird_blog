import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './theme.css';
import About from './components/About.js'
import Home from './components/Home.js'
import Post from './components/Post.js'
import Footer from './components/Footer.js'
import MainHeader from './components/MainHeader.js'
import Contact from './components/Contact.js'
import NewsApiSideBar from './components/NewsApiSideBar.js'


const App = ({ children }) => (
    <div id="App">
        <Router>
            <div className="blog-masthead">
                <div className="container">
                    <nav className="nav blog-nav">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about/">About Me</NavLink>
                        <NavLink className="nav-link" to="/contact/">Contact Me</NavLink>
                    </nav>
                </div>
            </div>

            <MainHeader />

            <div className="container">
                <div className="row">
                    <div className="col-sm-8 blog-main">
                        <Route path="/" exact component={Home} />
                        <Route path="/post/:id" component={Post} />
                        <Route path="/about/" component={About} />
                        <Route path="/contact/" component={Contact} />
                    </div>

                    <div className="col-sm-3 offset-sm-1 blog-sidebar">
                        <NewsApiSideBar />
                    </div>
                </div>
            </div>

            <Footer />
        </Router>
    </div>
);

export default App;
