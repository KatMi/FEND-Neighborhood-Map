import React, {Component} from 'react';
import './App.css'
//import Forts from './forts.json'


export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  }

  updateSearch(event) {
  this.setState({search: event.target.value.substr(0, 20)});
}

  render() {

      let filteredForts = this.props.forts.filter(
        (fort) => {
          return fort.name.indexOf(this.state.search) !== -1;
        }
      );

    return (

      <div className="App-navigation" id="navigation">
        <h1 className="App-title">Dubrovnik City Walls</h1>
        <div className="input-wrapper">
         <input type="text" placeholder="Filter forts"
         value={this.state.search} onChange={this.updateSearch.bind(this)}/>
         </div>
         <ol className="forts">
           {filteredForts.map((fort) => {
             return <li a href="#"> fort={fort}</li>
           })}
         </ol>
      </div>
    );
  }
}
