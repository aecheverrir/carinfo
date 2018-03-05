import React from 'react';

export default class Banner extends React.Component {

  render () {
    
    /*style*/
  	var styles = { 
  		"backgroundColor": "#db1d0f",
      "borderColor": "#db1d0f",
      "marginColor": "#db1d0f",
      "text-align": "center",
      "padding-bottom": "100px",
      "padding-top": "100px"
  	};
    var styleH1 = {
      "font-size": "50px",
      "color":"white"
    };

    return (
    	<div style={styles}>
    		<h1 style={styleH1}>CarInfo</h1>
    	</div>
    );
  }
}
