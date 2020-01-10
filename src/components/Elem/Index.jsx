import React, {Component} from 'react';

import './Elem.sass';


class Elem extends Component {
  render() {
    return (
      <div className="Elem">
        <div className="Elem__Avatar">
          <img src={this.props.dataList.picture} alt="User Avatar" />
        </div>
        <div className="Elem__Info">
          <div className="Elem__Name">
            {this.props.dataList.name}
          </div>
          <div className="Elem__Age">
            {this.props.dataList.age}
          </div>
        </div>
      </div>
    )
  }
}

export default Elem;
