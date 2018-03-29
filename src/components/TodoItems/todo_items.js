import React from 'react';
import '../../css/todoItem.css';

export default class Todo_items extends React.Component {

	constructor(props) {
	    super(props);
  	}

  	removeTodo(id) {
  		this.props.removeTodo(id);
  	}

	render() {
		return (
			<div className="todoWrapper">
				<button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Remove</button>
				<span>{this.props.todo.text}</span>
			</div>
		);
	}
}