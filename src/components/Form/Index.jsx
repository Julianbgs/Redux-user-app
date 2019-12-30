import React, { Component } from 'react';

import './Form.sass';

class FormUsers extends Component {
  render() {
    return (
      <div className="Form">
        <div className="Form__Wrap">
          <input type="text" className="Form__Name" />
          <input type="text" className="Form__Age" />
          <input type="submit" className="Form__Submit" />
        </div>
      </div>
    )
  }
}

export default FormUsers;
