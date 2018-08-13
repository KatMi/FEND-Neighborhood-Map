import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, { Marker, Popup, NavigationControl} from 'react-map-gl';
import InfoWindow from './InfoWindow.js';
import Forts from './forts.json';

const token = 'pk.eyJ1Ijoia2F0bWkiLCJhIjoiY2praDFsa3lrMG5oZTNscWg1ZWxoNTlsaiJ9.fNB821wIXlOewI0sAbkuQw';

const navControlStyle = {
  position: 'absolute',
  bottom: 20,
  right: 0,
  padding: '20px'
};

const menuStyle = {
  position: 'absolute',
  top: 10,
  right: 10,
  padding: '2px',
  width: '80px'
};

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 42.6413661,
        longitude: 18.1075044,
        zoom: 16,
        width: 500,
        height: 500,
      },
      infoWindow: null,
    };
  }

componentDidMount() {
    window.addEventListener('resize', this.resizeMap);
    window.addEventListener('click', this.toggleMenu);
    this.resizeMap();
    this.toggleMenu();
  }

  resizeMap = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }

    });
  };

  updateViewport = (viewport) => {
    this.setState({viewport});
  }

  toggleMenu = () => {
      const hamburgerMenu = document.getElementById('hamburger-icon')
      const sidebarNav = document.getElementById('navigation')

      hamburgerMenu.addEventListener('click', function() {
         if (sidebarNav.style.marginLeft == 0) {
           sidebarNav.style.marginLeft = "-300px";
         } else {
           sidebarNav.style.marginLeft = "0";
         }
      })
    }


  renderMarker = (fort, index) => {
    let isActive = false

    if (this.props.forts.id === this.props.activeMarker) {
      isActive = true;
    }
    
    return (
      <Marker key={fort.id}
        longitude={fort.longitude}
        latitude={fort.latitude} >
        {isActive ? (
           <img src="https://image.flaticon.com/icons/svg/90/90389.svg" alt="fort icon" height={50} onClick={() => this.setState({infoWindow: fort})} />
        ) : (
           <img src="https://image.flaticon.com/icons/svg/90/90389.svg" alt="fort icon" height={30} onClick={() => this.setState({infoWindow: fort})}/>
        )}
      </Marker>
    );
  }

  renderInfoWindow() {
    const {infoWindow} = this.state;

    return infoWindow && (
      <Popup tipSize={5}
        anchor="top"
        longitude={infoWindow.longitude}
        latitude={infoWindow.latitude}
        onClose={() => this.setState({infoWindow: null})}>
        <InfoWindow info={infoWindow}/>
      </Popup>
    );
  }

  render() {

    const {viewport} = this.state;

    return (
      <MapGL
        className="map-container"
        {...viewport}
        mapStyle="mapbox://styles/katmi/cjkfysodr15b42rt5w7wno0qv"
        onViewportChange={this.updateViewport}
        mapboxApiAccessToken={token} >

        {Forts.map(this.renderMarker)}

        {this.renderInfoWindow()}

        <div className="map-navigation" style={navControlStyle}>
          <NavigationControl onViewportChange={this.updateViewport} />
        </div>
        <div id="hamburger-icon" style={menuStyle} onClick={this.toggleMenu}>
          <a href="#"><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/th-menu-outline-512.png" alt="hamburger menu"/></a>
        </div>
      </MapGL>
    );
  }
}
