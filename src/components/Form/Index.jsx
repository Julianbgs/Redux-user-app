import React, { Component } from 'react';
import { addUser } from '../../actions/actions';
import { connect } from 'react-redux';

import './Form.sass';

class FormUsers extends Component {

  handleUserAdd = (e) => {
    e.preventDefault();
    this.props.addUser('test', 23);
  };

  render() {
    return (
      <div className="Form" onSubmit={this.handleUserAdd}>
        <form className="Form__Wrap">
          <input type="text" className="Form__Name" />
          <input type="text" className="Form__Age" />
          <input type="submit" className="Form__Submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addUser
};

export default connect(null, mapDispatchToProps)(FormUsers);
