import React from 'react';
import '../css/todoInput.css';

export default class Todo_inputs extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {value: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.addTodo = this.addTodo.bind(this);
  	}

  	
  	handleChange(e) {
  		this.setState({value: e.target.value});
  	}

  	handleEnter(todo) {
  		if (todo.length > 0) {
  			this.props.addTodo(todo);
  			this.setState({value: ''});
  		}
  	}

  	addTodo(todo) {
  		if (todo.length > 0) {
  			this.props.addTodo(todo);
  			this.setState({value: ''});
  		}
  	}

	render() {
		return (
			<div className="form-container" >
				<input className="todoText" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={event => {
					if (event.key === 'Enter') {
						this.handleEnter(this.state.value);
					}
				}} />
				<button className="addTodo" onClick={() => this.addTodo(this.state.value)}>
					Add
				</button>
			</div>
		);
	}
}