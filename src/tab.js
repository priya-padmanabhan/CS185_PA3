//import React, { Component } from 'react';

function Tab (props){

	const addstyle = () => {
		if (props.tab.id == props.activetab) {
			return {backgroundColor: 'red'};
		}
		else {
			return {backgroundColor: 'yellow'};
		}
	};

	console.log(props)

	return (
		<div style = {addstyle()} onClick = {props.ctab.bind(this,props.tab.id)}>
			{props.tab.title}
		</div>
	);
}

export default Tab;

	