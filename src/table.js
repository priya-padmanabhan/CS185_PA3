import { Component } from 'react';

class Table extends Component {

	render() {
		return (<>
            <div class="main">
                <table class="center">
                    <tr>
                        <th> Source </th>
                        <th> Link </th>
                    </tr>
                    <tr>
                        <td> Zak George - Dog Trainer</td>
                        <td> <a href="https://www.youtube.com/user/zakgeorge21">Training Videos</a></td>
                    </tr>
                    <tr>
                        <td> American Kennel Club: Golden Retrievers</td>
                        <td> <a href="https://www.akc.org/dog-breeds/golden-retriever/">Breed Info</a></td>
                    </tr>
                    <tr>
                        <td> American Kennel Club: Golden Retrievers</td>
                        <td> <a href="https://www.akc.org/expert-advice/dog-breeds/10-facts-about-golden-retrievers/"> 10 Facts</a></td>
                    </tr>
                </table>
	        </div>
		</>);
	}
}

export default Table;
