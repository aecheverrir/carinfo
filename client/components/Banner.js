import React from 'react';

export default class Banner extends React.Component {

  render () {
    
    /*style*/
  	var styles = { 
  		"backgroundColor": "#db1d0f",
      "borderColor": "#db1d0f",
      "marginColor": "#db1d0f"
  	};

    return (
    	<div style={styles}>
    		<h1>{this.props.title}</h1>
    	</div>
    );
  }
}
