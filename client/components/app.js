import React from 'react';

import Banner from "./Banner"
import DataBar from "./DataBar"
import ResultItem from "./ResultItem"
import SideBar from "./SideBar"


export default class App extends React.Component {
  render () {
    return (
    	<div>
    		<Banner />
    		<DataBar />
    		<ResultItem />
    		<SideBar />
    	</div>
    );
  }
}
