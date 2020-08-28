import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
  	return (
  		<>
  			<button disabled={this.props.disabled}>{this.props.value}</button>
  		</>
  	)
  }
}