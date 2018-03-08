import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ResultItem extends React.Component {
  render () {
    return (
    	<div>
            <Container>
                <Row>
                    <Col sm="6">
                        <Container>
                            <img src={this.props.data.imagen} height="250" width="400" alt="asf"/>
                        </Container>    
                    </Col> 
                    <Col sm="6">
                        <Container>
                            <h3>Marca: {this.props.data.marca}</h3>
                            <h3>Modelo: {this.props.data.modelo}</h3>
                            <h5>Linea: {this.props.data.linea}</h5>
                            <h5>Precio: ${this.props.data.precio}</h5>
                            <h5>Pais de origen: {this.props.data.pais}</h5>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <br/>
            <hr/>
    	</div>

    );
  }
}