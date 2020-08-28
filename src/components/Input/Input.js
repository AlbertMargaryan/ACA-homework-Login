import React from 'react';
import './Input.css';

import Error from '../Error/Error.js'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
  	return (
  		<div className="Input-container">
  			<input placeholder={this.props.placeholder} onChange={this.props.onchange}></input>
        <Error message={this.props.message} display={this.props.display}/>
  		</div>
  	)
  }
}