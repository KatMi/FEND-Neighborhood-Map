import React, {Component} from 'react';
import Map from './Map.js';
import Sidebar from './Sidebar.js';

export default class App extends Component {
  constructor() {
     super();
     this.isFilteringForts = this.isFilteringForts.bind(this);
   }

   state = {
     forts : [
       {id: "1", name:"Minčeta Tower", latitude:42.643165, longitude:18.108311},
       {id: "2", name:"Fort Bokar", latitude:42.6410909, longitude: 18.105932},
       {id: "3", name:"St. John Fortress", latitude:42.64014, longitude:18.1123283},
       {id: "4", name:"Revelin Fortress", latitude:42.642351, longitude:18.112242},
       {id: "5", name:"St. Lawrence Fortress", latitude:42.640959, longitude:18.104284}
     ],
     marker: [],
     filteredForts: [],
     filteredMarkers: [],
   }

   componentDidMount() {
      this.isFilteringForts();
   }

   isFilteringForts(updatedForts) {
      this.setState({
        filteredForts: updatedForts
      });
   }

   handleOnClick = (event) => {
      this.setState({activeMarker: event.target.id})
      this.setState({filteredMarkers: []})
   }

   handleOnChange = (event) => {
      const filteredMarkers = this.state.forts[event.target.value]
      this.setState({activeMarker: event.target.value})
      this.setState({filteredMarkers})
   }

  render() {


    return (
      <div>
      <Map
         forts={this.state.forts}
         activeMarker={this.state.activeMarker}
         handleOnChange={this.handleOnChange}
         handleOnClick={this.handleOnClick}
      />
       <Sidebar
          forts={this.state.forts}
          filteredForts={this.state.filteredForts}
          isFilteringForts={this.isFilteringForts}
          activeMarker={this.state.activeMarker}
          filteredMarkers={this.state.filteredMarkers}
          handleOnChange={this.handleOnChange}
          handleOnClick={this.handleOnClick}    
      />
      </div>
    );
  }
}
