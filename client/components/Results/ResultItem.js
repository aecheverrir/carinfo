import React from 'react';
import AttVal from './ResultItem/AttVal';
import ItemPhoto from './ResultItem/ItemPhoto';

export default class ResultItem extends React.Component {
  render () {
    return (
    	<div>
    		<div>{this.props.modelo}</div>
    		<AttVal />
    	</div>

    );
  }
}