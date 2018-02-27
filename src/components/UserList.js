import React, { Component } from 'react';
import User from './User';

export default class UserList extends Component {

	shouldComponentUpdate(prevProps, prevState) {
		return prevProps.users !== this.props.users;
	}

	renderUsers = () => {
		const {users} = this.props; // const users = this.props.users;
		return users.map(user => (
			<User key={user.get('id')} user={user} />
		));
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
