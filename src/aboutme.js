import { Component } from 'react';

class aboutme extends Component {
	render() {
		return (<>
			
			<div className="topheader">
				<h1> Milo </h1>
				<p> The Golden Retriever Puppy </p>
			</div>
	

			<ul>
				<li> About Me </li>
				<li> Images </li>
				<li> Video </li>
				<li> Table </li>
				<li> Email </li>
			</ul>


			<div className ="main">
				<br />
				<br />
				<h2> Hi! I'm Milo.</h2>
				<h3> I'm a four month old Golden Retriever puppy. </h3>
				<br />
				<form>
					<label> Send me a message!</label><br />
					<input type="msg" /><br />
					<label> Do you like dogs or cats more?</label><br />
					<input name="radio" type="radio" />
					<label>Dogs</label><br />
					<input name="radio" type="radio" />
					<label>Cats</label><br />
					<input type="button" value="Submit" />
				</form>
				<br />
			
				<div class="indexgrid">
					<div class="indexgrid-item">
						<p class="tab">Some fun facts about me are: </p>
						<p class="tab">1. I was born on September 10, 2020</p>
						<p class="tab">2. I've lost 25% of my puppy teeth!</p>
						<p class="tab">3. I weigh less than a half of my full-grown weight.</p>
					</div>
					<div class="indexgrid-item">
						<p class="tab">Some of my favorite things to do are: </p>
						<p class="tab">1. Eat! </p>
						<p class="tab">2. Bite on shoes </p>
						<p class="tab">3. Jump on the couch when no one is looking </p>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>

		</>);
	}
}

export default aboutme;
