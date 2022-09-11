import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
// import components

class App extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      //shit that will be changed
    }
  }

  //getRequest = get request to show initial loading


  //componentDidMount() {
    //this.getRequest
  // }

  //Search(term) = {
// a waay to update for searches
  // }

  render () {
    return(
      <div>
        <h1>this is a test</h1>
        <components_name repos={this.state.repos}/>
        <Search_component onSearch={this.search.bind(this)}/>
      </div>
    )
  }

}

ReactDom.render(<App />, document.getElementById('app'));