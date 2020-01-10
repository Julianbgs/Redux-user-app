import React, {Component} from 'react';
import Elem from '../../components/Elem/Index'
import { connect } from "react-redux";

import './List.sass';

function mapStateToProps(state) {
  return {
    users: state.users.list
  };

}

class List extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="List">
        {
          users && Array.isArray(users) && users.map(function (user) {
            return <Elem dataList={user} key={user.id}/>
          })
        }
      </div>
    )
  }
}



export default connect(mapStateToProps, null)(List);
