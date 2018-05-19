import React, { Component } from 'react';
import Counter from 'components/Counter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {

	handleIncrement = () => {
		const { counterActionProps } = this.props;
		counterActionProps.increment();
	}
	
	handleDecrement = () => {
		const { counterActionProps } = this.props;
		counterActionProps.decrement();
	}

	render() {
		const { handleDecrement, handleIncrement } = this;
		const { number } = this.props;

		return (
			<Counter 
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
				number={number}
			/>
		);
	}
}

export default connect(
  (state) => ({ // const mapStateToProps = (state) => ({})
    number: state.counter.number
  }),
  (dispatch) => ({ // const mapDispatchToProps = (dispatch) => ({})
    counterActionProps: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);
