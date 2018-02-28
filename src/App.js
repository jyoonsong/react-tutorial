import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';
import Button from './components/Button';
import StyledButton from './components/StyledButton';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
		const isBlue = true;

    return (
    	<div>
	      <div className={cx('box', {
	      	blue: isBlue
	      })}>
	      </div>
	      {/*<Button>버튼</Button>*/}
        <StyledButton big>버튼</StyledButton> {/* big={true} */}
			</div>
    );
  }
}

export default App;
