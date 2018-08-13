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
    const { activeMarker } = this.props

    let filteredForts = this.props.forts.filter(fort => {
         return (
           fort.name
             .toLowerCase()
             .indexOf(this.state.search.toLowerCase()) !== -1
         );
       });

    return (

      <div className="App-navigation" id="navigation">
        <h1 className="App-title">Dubrovnik City Walls</h1>
        <div className="input-wrapper">
         <input type="text" placeholder="Filter forts"
         value={this.state.search} onChange={this.updateSearch.bind(this)}/>
         </div>
         <ol className="forts">
           {filteredForts.map((fort) => {
             <li><button handleOnClick={this.props.handleOnClick} handleOnChange={this.props.handleOnChange} activeMarker={this.props.activeMarker}>{fort.name}</button></li>
           })}
         </ol>
      </div>
    );
  }
}
