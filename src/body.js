import aboutme from './aboutme.js';
import { Component } from 'react';

class Body extends Component {
    render() {
        var displayContent = () => {
            var activetab = this.props.activetab; 
            if (activetab == 0) {
            	return <aboutme />
            }
        }
        return (null);
    }
}

export default Body;
