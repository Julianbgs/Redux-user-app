import React, { Component } from 'react';
import { addUser } from '../../actions/actions';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';

import './Form.sass';

class FormUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      picture: '',
    }
  }

  onDrop = (files) => {
    console.log(files);
    if (files && files.length) {
      const file = files[0]
      const fr = new FileReader();
      fr.onload = (e) => {
        this.setState({
          picture: e.target.result
        })
      };
      fr.readAsDataURL(file)
    }
    // this.setState({
    //   picture: picture
    // })
  };

  handleUserAdd = (e) => {
    e.preventDefault();
    const { name, age, picture } = this.state;

    if (name && age && picture) {
      const { addUser } = this.props;
      addUser(name, age, picture);
      this.setState({
        name: '',
        age: '',
        picture: '',
      })
    } else {
      alert('заполните поля')
    }
  };

  render() {
    const { name, age } = this.state;
    return (
      <div className="Form">
        <form className="Form__Wrap" onSubmit={this.handleUserAdd}>
          <input type="text" className="Form__Input" value={name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
          <input type="text" className="Form__Input" value={age} onChange={(e) => { this.setState({ age: e.target.value }) }} />
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
