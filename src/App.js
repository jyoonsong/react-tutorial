import React, { Component } from 'react';
import UserList from './components/UserList';
import { Map, List } from 'immutable';


class App extends Component {

	id = 3 // 이미 0,1,2가 존재
	
	state = {
		data: Map({
			input: '',
			users: List([
				Map({ id: 1, username: 'jaeyoon' }),
				Map({ id: 2, username: 'song' })
			])
		})
	}

	onChange = (e) => {
		const {value} = e.target;
		const {data} = this.state;

		this.setState({
			data: data.set('input', value)
		});
	}

	onButtonClick = (e) => {
		const {data} = this.state;

		this.setState({
			data: data.set('input', '') // input: ''
								.update('users', users => users.push( // users.concat 새 Map을 추가
									Map({
										id: this.id++,
										username: data.get('input') // data.input은 불가능
									})
								))
		})
	}

  render() {
  	// this 생략을 위해
  	const {data} = this.state;
  	const input = data.get('input');
  	const users = data.get('users');
  	const {onChange, onButtonClick} = this;

    return (
			<div>
				<div>
					<input onChange={onChange} value={input} />
					<button onClick={onButtonClick}>추가</button>
				</div>
				<h3>사용자목록</h3>
				<UserList users={users} />
      </div>
    );
  }
}

export default App;