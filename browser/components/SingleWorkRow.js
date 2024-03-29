import React, { Component } from 'react';

import SingleWorkRowDescription from './SingleWorkRowDescription';
import SingleWorkRowEdit from './SingleWorkRowEdit';

class SingleWorkRow extends Component {

  constructor(props) {
    super(props);
    let editing = this.props.editing ? true : false;
    this.state = {
      editing: editing,
      work: props.work,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      work: newProps.work
    });
  }

  handleChange = e => {
    this.setState({
      work: Object.assign(this.state.work, {
        [e.target.name]: e.target.value,
      }),
    });
  }

  toggleEdit = e => {
    if (this.state.editing) {
      if (this.props.newWork) {
        this.props.saveNewWork(this.props.work);
      } else {
        this.props.updateWork(this.props.work);
      }
    }
    
    this.setState({
      editing: !this.state.editing
    });
  }

  render() {
    return (
        this.state.editing
        ? <SingleWorkRowEdit work={this.props.work} idx={this.props.idx} handleChange={this.handleChange} toggleEdit={this.toggleEdit}/>
        : <SingleWorkRowDescription work={this.props.work} idx={this.props.idx} toggleEdit={this.toggleEdit}/>
    )
  }

}

export default SingleWorkRow;
