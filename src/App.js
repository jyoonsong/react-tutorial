import React, { Component } from 'react';
import UserList from './components/UserList';

class App extends Component {

	id = 3 // 이미 0,1,2가 존재
	
	state = {
		input: '',
		users: [
			{ id: 1, username: 'jaeyoon' },
			{ id: 2, username: 'song' }
		]
	}

	onChange = (e) => {
		this.setState({
			input: e.target.value // input의 다음 바뀔 값
		});
	}

	onButtonClick = (e) => {
		this.setState(({ users, input }) => ({
			input: '',
			users: users.concat({
				id: this.id++,
				username: input
			})
		}))
	}

  render() {
  	// this 생략을 위해
  	const {input, users} = this.state;
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