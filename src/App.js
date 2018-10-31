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
import './scripts/vendor/jquery.scrollDetection';

import Video from './components/Video';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import beachy from './img/bw+g.jpg';
    
// TODO: figure out scrolling so it only shows a section at a time
// function handleScroll(e, { sections, pos }) {
//     this.setState({ curSection: pos });
//     $.scrollDetection({
//         scrollDown: function() {
//           // ...
//           this.setState({ scrollPos: pos++ })
//           console.log(pos);
//         },
//         scrollUp: function() {
//           // ...
//           this.setState({ scrollPos: pos-- })
//           console.log(pos);
//         }
//   });
//   e.handleItemClick(sections[pos].name);
// }

class App extends Component {
    state = { 
        // reconfigure sections and active item to use numbers instead of names for scrolling to work too
        activeItem: 'home',
        sections: ['home', 'about', 'projects', 'contact'],
        curSection: 0
    };

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