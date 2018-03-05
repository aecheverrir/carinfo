import React from 'react';
import AttVal from './ResultItem/AttVal';
import ItemPhoto from './ResultItem/ItemPhoto';

export default class ResultItem extends React.Component {
  render () {
    return (
    	<div>
    		<img src={this.props.data.imagen} alt="asf"/>
    		<h3>Marca: {this.props.data.maraca}</h3>
    		<h3>Modelo: {this.props.data.modelo}</h3>
    		<h5>Linea: {this.props.data.linea}</h5>
    		<h5>Precio: ${this.props.data.precio}</h5>
    		<h5>Pais de origen: {this.props.data.pais}</h5>

    		<br/>
    		<br/>
    	</div>

    );
  }
}