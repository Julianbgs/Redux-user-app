import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeUser} from "../../actions/actions";

import './Elem.sass';
import done from '../../assets/images/done.png';
import edit from '../../assets/images/edit.png';
import upload from '../../assets/images/upload.png';

class Elem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      name: '',
      age: '',
      picture: '',
    }
  }

  onEditUser = () => {
    this.setState({
      isVisible: true
    });
  };

  onSaveData = () => {
    const {name, age, picture} = this.state;

    this.setState({
      isVisible: false
    });
    this.props.changeUser(this.props.dataList.id, name, age, picture)
  };

  onChangeAvatar = (e) => {
    if(e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({picture: e.target.result})
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  render() {
    const {name, age} = this.state;
    return (
      <div className="Elem">
        {!this.state.isVisible &&
          <div className="Elem__Avatar">
            <img src={this.props.dataList.picture} alt="User Avatar"/>
          </div>
        }

        {this.state.isVisible &&
        <label htmlFor="inputFile" className="Elem__EditLabel">
          <div className="Elem__EditDescr">
            <img src={upload} alt="edit avatar"/>
          </div>
          <input type="file" className="Elem__EditAvatar" id="inputFile" onChange={this.onChangeAvatar}/>}
        </label>
        }
        <div className="Elem__Info">
          {!this.state.isVisible &&
          <div className="Elem__Name">
            {this.props.dataList.name}
          </div>
          }

          {this.state.isVisible && <input type="text" className="Elem__EditName" value={name} onChange={(e) => {
            this.setState({name: e.target.value})
          }}/>}

          {!this.state.isVisible &&
          <div className="Elem__Age">
            {this.props.dataList.age}
          </div>
          }

          {this.state.isVisible && <input type="text" className="Elem__EditAge" value={age} onChange={(e) => {
            this.setState({age: e.target.value})
          }}/>}
        </div>
        <div className="Elem__Editor">
          <div className="Elem__Edit" onClick={this.onEditUser}>
            <img src={edit} alt="edit info"/>
          </div>
          {this.state.isVisible && <div className="Elem__Agree" onClick={this.onSaveData}>
            <img src={done} alt="save info"/>
          </div>}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  changeUser
};

export default connect(null, mapDispatchToProps)(Elem);
