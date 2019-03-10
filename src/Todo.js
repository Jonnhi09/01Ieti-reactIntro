import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (
        	<li>
        		<h5>Title: {this.props.text}</h5>
        		<h5>Priority: {this.props.priority}</h5>
        		<h5>Due date: {this.props.dueDate}</h5>
        		<br/>
    		</li>
        );
    }

}