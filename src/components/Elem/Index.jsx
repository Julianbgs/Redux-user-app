import React, {Component} from 'react';
import { connect } from "react-redux";

import './Elem.sass';
import {changeUser} from "../../actions/actions";


class Elem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      name: '',
    }
  }

  onEditUser = () => {
    this.setState({
      isVisible: true
    });
  };

  onSaveData = () => {
    const {name} = this.state;

    this.setState({
      isVisible: false
    });
    this.props.changeUser(this.props.dataList.id,name)
  };

  render() {
    const {name} = this.state;
    return (
      <div className="Elem">
        <div className="Elem__Avatar">
          <img src={this.props.dataList.picture} alt="User Avatar" />
        </div>
        <div className="Elem__Info">
          { !this.state.isVisible &&
            <div className="Elem__Name">
              {this.props.dataList.name}
            </div>
          }

          { this.state.isVisible && <input type="text" value={name} onChange={(e) => {this.setState({name: e.target.value})}} /> }

          <div className="Elem__Age">
            {this.props.dataList.age}
          </div>
        </div>
        <div className="Elem__Edit" onClick={this.onEditUser}>
          edit
        </div>
        {this.state.isVisible && <div className="Edit__Agree" onClick={this.onSaveData}>Save</div>}
      </div>
    )
  }
}

const mapDispatchToProps = {
  changeUser
};

export default connect(null, mapDispatchToProps)(Elem);
