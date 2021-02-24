import AboutMe from './AboutMe.js';
import Images from './images.js';
import Videos from './videos.js';
import Table from './table.js';
import Email from './email.js';
import { Component } from 'react';

class Body extends Component {
    render() {
        var displayContent = () => {
            var activetab = this.props.activetab; 
            if (activetab == 0) {
            	return <AboutMe />
            }
            else if (activetab == 1) {
            	return <Images />
            }
            else if (activetab == 2) {
            	return <Videos />
            }
            else if (activetab == 3) {
            	return <Table />
            }
            else if (activetab == 4) {
            	return <Email />
            }
            else {
                return <AboutMe />;
            }
        }
        return (displayContent());
    }
}

export default Body;
