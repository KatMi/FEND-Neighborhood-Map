import React, {Component} from 'react';
import Map from './Map.js';
import Sidebar from './Sidebar.js';
import escapeRegExp from 'escape-string-regexp';


const forts = [
  {name:"Minčeta Tower",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Casco_viejo_de_Dubrovnik%2C_Croacia%2C_2014-04-13%2C_DD_18.JPG/450px-Casco_viejo_de_Dubrovnik%2C_Croacia%2C_2014-04-13%2C_DD_18.JPG",latitude:42.643165,longitude:18.108311},
  {name:"Fort Bokar",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dubrovnik-muralles.jpg/300px-Dubrovnik-muralles.jpg",latitude:42.6410909,longitude: 18.105932},
  {name:"St. John Fortress",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Dubrovnik%2C_am_alten_Stadthafen_IMG_8169.jpg/300px-Dubrovnik%2C_am_alten_Stadthafen_IMG_8169.jpg", latitude:42.64014,longitude:18.1123283},
  {name:"Revelin Fortress",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Revelin_LS4.JPG/330px-Revelin_LS4.JPG",latitude:42.642351,longitude:18.112242},
  {name:"St. Lawrence Fortress",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fort_Lovrijenac%2CDubrovnik%2CCroatia.jpg/375px-Fort_Lovrijenac%2CDubrovnik%2CCroatia.jpg",latitude:42.640959,longitude:18.104284}
]

export default class App extends Component {


  render() {


    return (
      <div>
      <Map
        viewport= {this.props.viewport}

      />
       <Sidebar
      
      />
      </div>
    );
  }

}
