import { Component } from 'react';

class Videos extends Component {

    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        event.stopPropagation();
    }

    show(other) {
        document.getElementById('overlay').style.display = "block";
        document.getElementById('obj').src = other.target.src;
        document.getElementById('obj').type = other.target.type;
    }

    hide() {
        document.getElementById('overlay').style.display = "none";
    }

	render() {
		return (<>
            <div className="main">
                <div className="grid">
                    <div className="grid-item">
                        <video src={"video1.mp4"} onClick={this.show} controls>
                        </video>
                    </div>
                    <div className="grid-item">
                        <video src={"video4.mp4"} onClick={this.show} controls>
                        </video>
                    </div>
                    <div className="grid-item">
                        <video src={"video2.mp4"} onClick={this.show} controls>
                        </video>
                    </div>
                    <div className="grid-item">
                        <video src={"video3.mp4"} onClick={this.show} controls>
                        </video>
                    </div>
                </div>
            </div>
            <div id="overlay" className="overlay" onClick={this.hide}>
                <video id="obj" className="obj" onClick={this.clickHandler} controls/>
            </div>
		</>);
	}
}

export default Videos;
