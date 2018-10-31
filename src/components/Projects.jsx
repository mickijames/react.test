import React, {Component} from 'react';
import {Segment, Image} from 'semantic-ui-react';

const src = 'https://placeimg.com/640/480/any';

class Projects extends Component {
    render() {
        return(
            <div id='projects' className="page-height">
                <Segment.Group padded="very">
                    <Segment padded="very">
                        <h2>Projects</h2>
                        <Image src={src} size="small" floated="left"/>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis ut numquam labore impedit expedita aliquid dolorem eum iure libero qui est, explicabo harum fugit et modi? Sunt, harum vero!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis porro voluptate accusamus? Officiis, corrupti in reiciendis tempore commodi est voluptates doloremque doloribus, at perferendis distinctio laboriosam ad saepe veritatis iusto.
                            Voluptate eum deserunt distinctio similique illo est ullam. Eaque itaque eveniet quo minima totam minus, commodi sit perferendis labore quisquam repudiandae deserunt, nesciunt incidunt id possimus debitis eos asperiores aliquam!
                            Voluptas, tempora! Vel, recusandae dolores tempore totam ab dolorem dolorum eius perferendis, rerum culpa cupiditate modi non. Praesentium dolor, dolorum totam esse, ullam porro quaerat error optio nulla laudantium ratione?
                            Maiores illo reiciendis autem quibusdam nobis tempora explicabo. Earum repellat doloribus culpa quam officiis magni vero eos veritatis nemo facere. Quis, perspiciatis amet! Esse sapiente pariatur mollitia dolore provident laborum.</p>
                        </div>
                    </Segment>
                    <Segment padded="very">
                        <Image src={src} size="small" floated="left"/>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium quam consectetur esse omnis quis? 
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?
                                Accusantium asperiores est incidunt molestias pariatur, harum a soluta mollitia iste sequi alias reiciendis numquam?
                            </p>
                        </div>
                    </Segment>
                    <Segment padded="very">
                        <Image src={src} size="small" floated="left"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis ut numquam labore impedit expedita aliquid dolorem eum iure libero qui est, explicabo harum fugit et modi? Sunt, harum vero!</p>
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}

export default Projects;