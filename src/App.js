import React, { Component } from 'react';
import './App.css';
import {
    Button,
    Container,
    Header,
    Icon,
    Image, 
    Menu
} from 'semantic-ui-react';
import $ from 'jquery';
import Video from './components/Video';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import beachy from './img/bw+g.jpg';

// TODO: figure out scrolling so it only shows a section at a time

//***** TODO: fix header so it doesn't show white at the top of the screen

class App extends Component {
    state = { activeItem: "home" };    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        $('html, body').animate({
            scrollTop: $('#' + name).offset().top
            }, 400
        );
    }
    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Header id="home" className="bg-image top shade">
                    <Video />
                    <Container>
                        <Menu inverted pointing secondary fixed="top" className="top shade"> 
                            <Menu.Item className="header item">MJWeb</Menu.Item>
                            <Menu.Item 
                                name="home"
                                active={activeItem === "home"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item 
                                name="about"
                                active={activeItem === "about"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item  
                                name="projects"
                                active={activeItem === "projects"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item 
                                name="contact"
                                active={activeItem === "contact"}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Container>
                    <Container text className="header">
                        <Image src={beachy} size="medium" rounded />
                        <h1 className="ui inverted header">Hello, my name is <span className="highlight">Micalyn Williams</span>. <br />I'm a web developer.</h1>
                            <Button icon inverted className="huge basic yellow" name="about" onClick={this.handleItemClick}>
                                <Icon className="down arrow"/>
                            </Button>
                    </Container>
                </Header>
                <Container className="main">
                    <About />
                    <Projects />
                    <Contact />
                </Container>
            </div>
        );
    }
}
export default App;