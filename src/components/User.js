import React, { Component } from 'react';

export default class User extends Component {
	render() {
		const {user} = this.props;
		console.log('%s가 렌더링되고 있어요', user);

		return (
			<div>
				{user.username}
			</div>
		);
	}
}
