import React from "react";
import Results from '../components/Results';
import ResultItem from '../components/Results/ResultItem';


export function getCarros(component) {
	fetch("/api/carros")
	.then(results => {
		return results.json();
	}).then(data => {
	   let components = data.map((car) => {
	   		return(<ResultItem  key={car._id} modelo={car.modelo}/>);
	   });

	   component.setState({carros: components});
	});


}