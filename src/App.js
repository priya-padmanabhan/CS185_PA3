import './App.css';
import Body from './body.js';
import Tablist from './tablist.js';
import {Component} from 'react';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      active: 0
    };
    this.changeTab=(id) => {
      this.setState({active: id});  
    }
  }

  render() {
  
    const tabs = [{
      id:0, 
      title: "aboutme"
    }
    ];


    return (<>
      
      <div className="header">
        <h1> Milo </h1>
      </div>
      
  
    
      <Body active = {this.state.active}/>
      <button onclick={this.scrollToTop}>  Click to scroll up</button>
      
    </>);

/*
<div className="nav">
        Tablist tabs = {tabs} active = {this.state.active} ctab={this.changeTab}/>
      </div>
      */
        
      
    

  }
  
}

export default App;
