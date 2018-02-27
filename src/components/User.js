import React, { Component } from 'react';

export default class User extends Component {

	shouldComponentUpdate(prevProps, prevState) {
		return prevProps.user !== this.props.user;
	}

	render() {
		// const {user: {username}} = this.props; // const {username} = this.props.user; 둘다 user은 undefined
		const {username} = this.props.user.toJS(); // const username = this.props.user.get('username')
		console.log("Rendering " + username);

		return (
			<div>
				{username}
			</div>
		);
	}
}
