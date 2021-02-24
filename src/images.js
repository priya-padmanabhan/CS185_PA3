import { Component } from 'react';

class Images extends Component {
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
    }
    
    hide() {
        document.getElementById('overlay').style.display = "none";
    }

	render() {
		return (<>
            <div className="main">
                <div className="grid">
                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_9367.jpeg" }/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_9979.jpeg"}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_9446.jpeg"}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_9649.jpeg"}/>
                    </div>

                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_9790.jpeg"}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_0048.jpeg"}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_0393.jpeg"}/>
                    </div>
                    <div className="grid-item">
                        <img onClick={this.show} src={"IMG_0653.jpeg"}/>
                    </div>
                </div>
            </div>
            <div id="overlay" className="overlay" onClick={this.hide}>
                <img id="obj" className="obj" onClick={this.clickHandler}/>
            </div>
		</>);
	}
}

export default Images;
