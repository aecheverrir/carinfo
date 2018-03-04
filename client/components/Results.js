import React from 'react';
import ResultItem from './Results/ResultItem';

export default class Results extends React.Component {
  render () {
    return (
    	<div>
    		<div>Results</div>
    		<ResultItem />
    		<ResultItem />
    	</div>
    );
  }
}