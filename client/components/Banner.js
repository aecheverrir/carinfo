import React from 'react';

export default class Banner extends React.Component {

  render () {
    
    /*style*/
  	var styles = { 
  		"background-color": "#db1d0f",
      "border-color": "#db1d0f",
      "margin-color": "#db1d0f"
  	};

    return (
    	<div style={styles}>
    		<h1>{this.props.title}</h1>
    	</div>
    );
  }
}
