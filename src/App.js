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
    this.scrollHandler = this.scrollHandler.bind(this);
    this.scrollBtn = this.scrollBtn.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler(event) {
    this.scrollBtn();
  }

  scrollBtn() {
    var scrollBtn = document.getElementById("btn");

    if(document.body.scrollTop > window.innerHeight * 0.25 || document.documentElement.scrollTop > window.innerHeight * 0.25) {
        scrollBtn.style.display = "block";
    }
    else {
        scrollBtn.style.display = "none";
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.scrollBtn();
  }



  render() {
  
    const tabs = [{
      id:0, 
      title: "About Me"
    },
    {
      id:1, 
      title: "Images"
    }, 
    {
      id:2, 
      title: "Videos"
    },
    {
      id:3, 
      title: "Table"
    },
    {
      id:4, 
      title: "Email"
    }
    ];


    return (<>
      
      <div className="topheader">
        <h1> Milo <img class="sub" src="pawprint.png" /> </h1>
        <p> The Golden Retriever Puppy</p>
      </div>
    
      <div className="nav">
        <Tablist tabs = {tabs} activetab = {this.state.active} ctab={this.changeTab}/>
      </div>
    
      <Body activetab = {this.state.active}/>

      <button id="btn" onClick={this.scrollToTop}>Scroll Up</button>
      
    </>);

  }
  
}

export default App;
