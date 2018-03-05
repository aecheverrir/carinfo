import React from 'react';

import Banner from './Banner';
import DataBar from './DataBar';
import Results from './Results';
import SideBar from './SideBar';

import { Container, Row, Col } from 'reactstrap';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "testName"
        }
    }  
  render () {

    /*style*/
    var styles = { 
        "margin": "0",
        "padding": "0",
        "border": "0",
        "outline": "0",
        "font-family": "sans-serif",
        "font-weight": "normal",
        "font-size": "15px",
        "vertical-align": "baseline",
        "background": "transparent",
        "box-sizing": "border-box",
        "line-height": "30px",
        "color": "#838C95"
    };

    return (
        <Container>
        	<div style={styles}>
        		<Banner title={"CarInfo"}/>
                <Row>
                    <Col sm="6" lg="4">
                        <Container>
                            <SideBar />
                        </Container>    
                    </Col> 
                    <Col sm="6" lg="8">
                        <Container>
                        <DataBar />
                        <Results />
                        </Container>
                    </Col>
                </Row>
        	</div>
        </Container>
    );
  }
}
