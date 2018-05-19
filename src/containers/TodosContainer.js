import React, { Component } from 'react';
import Todos from 'components/Todos';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todosActions from 'store/modules/todos';

class TodosContainer extends Component {

	handleToggle = () => {
		const { todoActionProps } = this.props;
		todosActionProps.toggle();
	}
	
	handleRemove = (id) => {
		const { todoActionProps } = this.props;
		todosActionProps.remove();
	}

	render() {
		const { handleToggle, handleRemove } = this;
		const { checked, text } = this.props;

		return (
			<Todos 
				checked={checked}
				text={text}
				onToggle={handleToggle}
				onRemove={handleRemove}
			/>
		);
	}
}

export default connect(
  (state) => ({ // const mapStateToProps = (state) => ({})
    checked: state.todos.checked
    text: state.todos.text
  }),
  (dispatch) => ({ // const mapDispatchToProps = (dispatch) => ({})
    todoActionProps: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer);
