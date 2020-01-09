import React, { Component } from 'react';
import { addUser } from '../../actions/actions';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';

import './Form.sass';

class FormUsers extends Component {

  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.ageRef = React.createRef();
    this.state = { pictures: [] };
  }

  onDrop = (picture) => {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  };

  handleUserAdd = (e) => {
    e.preventDefault();
    const name = this.nameRef.current.value;
    const age = this.ageRef.current.value;
    const id  = Math.random() * 10;
    this.props.addUser(name, age, id);
  };

  render() {
    return (
      <div className="Form" onSubmit={this.handleUserAdd}>
        <form className="Form__Wrap">
          <input type="text" className="Form__Input" ref={this.nameRef} />
          <input type="text" className="Form__Input" ref={this.ageRef} />
          <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png']}
            maxFileSize={5242880}
          />
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
