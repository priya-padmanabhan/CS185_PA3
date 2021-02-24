import { Component } from 'react';

class Email extends Component {

    checkEmail() {
        var email = document.getElementById("email").value;
        var output = document.getElementById("output");
        
        if (email.includes("@") && (email.includes(".com"))) {
            output.innerHTML ="Email successfully recorded";
        }
        else {
            output.innerHTML ="Invalid email address";
        }
    }

	render() {
		return (<>
            <div class="main">
                <h2> Sign up to be a part of my mailing list! </h2>
			    <label> E-mail: </label><br />
			    <input id="email" /><br />
			    <p id="output"></p>
			    <button onClick={this.checkEmail}>Submit</button>
	        </div>
		</>);
	}
}

export default Email;