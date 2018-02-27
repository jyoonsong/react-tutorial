import React, { Component } from 'react';
import User from './User';

export default class UserList extends Component {
	renderUsers = () => {
		const {users} = this.props;
		return users.map(user =>
			<User key={user.id} user={user} />
		);
	}	

	render() {
		console.log('Rendering UserList');
		const {renderUsers} = this;
		return (
			<div>
				{renderUsers()}
			</div>
		);
	}
}
