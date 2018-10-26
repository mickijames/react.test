import React, { Component } from 'react';
import './App.css';
import {
    Button,
    Container,
    TextArea,
    Header,
    Segment,
    Icon,
    Image,
    Item,
    // Label,
    Menu,
    Form,
    // Grid,
    // Step,
    // Table,
} from 'semantic-ui-react';
import $ from 'jquery';

const src = 'https://placeimg.com/640/480/any';

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
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
                        <h1 className="ui inverted header">Hello, my name is <span className="highlight">Micalyn Williams</span>. <br />I'm a web developer.</h1>
                            <Button icon inverted className="huge basic yellow" name="about" onClick={this.handleItemClick}>
                                <Icon className="down arrow"/>
                            </Button>
                    </Container>
                </Header>
                <Container main>
                    <Segment padded="very" id='about'>
                        <h2>About</h2>
                        <p>
                                My name is Micalyn Williams, and I'll be graduating this spring with degrees in Visual Communication Design (BA)
                                and Computer Science (BCS) with a focus in web application development. I'm a very friendly, laid-back person
                                and I believe that my combined skillsets in both the design and programming worlds makes me an adaptable candidate
                                for many projects and groups.
                            </p>
                            <p>
                                I grew up attending a church camp in Oregon every summer. I have many fond memories of the weeks spent there and as a
                                result, I try my best to go back every summer as a volunteer. I have served in many different capacities over the
                                years. One year I was kayaking and basketball staff at two different camps, and for the past 3 years I have been
                                assigned the responsibility and privelege of being a dorm counselor. I have gained invaluable experience within
                                these leadership opportunities. The challenging yet rewarding jobs have allowed me to learn and practice connecting
                                with all types of personalities and ages from year to year.
                            </p>
                    </Segment>
                    <Segment padded="very" id='projects'>
                        <h2>Projects</h2>
                        <Item>
                        <Image.Group size='medium'>
                            <Image src={src} />
                            <Image src={src} />
                            <Image src={src} />
                        </Image.Group>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis ut numquam labore impedit expedita aliquid dolorem eum iure libero qui est, explicabo harum fugit et modi? Sunt, harum vero!</p>
                        
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis porro voluptate accusamus? Officiis, corrupti in reiciendis tempore commodi est voluptates doloremque doloribus, at perferendis distinctio laboriosam ad saepe veritatis iusto.</p>
                        Voluptate eum deserunt distinctio similique illo est ullam. Eaque itaque eveniet quo minima totam minus, commodi sit perferendis labore quisquam repudiandae deserunt, nesciunt incidunt id possimus debitis eos asperiores aliquam!
                        Voluptas, tempora! Vel, recusandae dolores tempore totam ab dolorem dolorum eius perferendis, rerum culpa cupiditate modi non. Praesentium dolor, dolorum totam esse, ullam porro quaerat error optio nulla laudantium ratione?
                        Maiores illo reiciendis autem quibusdam nobis tempora explicabo. Earum repellat doloribus culpa quam officiis magni vero eos veritatis nemo facere. Quis, perspiciatis amet! Esse sapiente pariatur mollitia dolore provident laborum.
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis ut numquam labore impedit expedita aliquid dolorem eum iure libero qui est, explicabo harum fugit et modi? Sunt, harum vero!</p>
                        </Item>
                    </Segment>
                    <Segment padded="very" id='contact'>
                        <h2>Contact</h2>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='First Lastname' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' />
                            </Form.Field>
                            <Form.Field control={TextArea} label="Message" placeholder="Your message goes here...">
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </Container>
            </div>
        );
    }
}
export default App;