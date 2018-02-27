import React, { Component } from 'react';

export default class User extends Component {
	render() {
		const {user: {username}} = this.props; // const {username} = this.props.user; 둘다 user은 undefined
		console.log("Rendering " + username);

		return (
			<div>
				{username}
			</div>
		);
	}
}
