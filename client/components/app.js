import React from 'react';

import Banner from './Banner';
import DataBar from './DataBar';
import Results from './Results';
import SideBar from './SideBar';

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
      "border": "0px",
      "margin": "0px"
    };

    return (
    	<div style={styles}>
    		<Banner title={"CarInfo"}/>
    		<DataBar />
    		<Results />
    		<SideBar />
    	</div>
    );
  }
}
