//import React, { Component } from 'react';

function Itab (props){

	const addstyle = () => {
		if (props.out.id == props.activetab) {
			return {backgroundColor: '#D3D3D3'};
		}
	};

	console.log(props)

	return (
		<a style = {addstyle()} onClick = {props.ctab.bind(this,props.out.id)}>
			{props.out.title}
		</a>
	);
}

export default Itab;

	