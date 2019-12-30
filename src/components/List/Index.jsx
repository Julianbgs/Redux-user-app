import React, {Component} from 'react';
import Elem from '../../components/Elem/Index'
import { connect } from "react-redux";

import './List.sass';

function mapStateToProps(state) {
  return {
    data: state
  };

}

class List extends Component {
  render() {
    return (
      <div className="List">
        {
          this.props.data.map(function (item, index) {
            return <Elem dataList={item} key={item.id}/>
          })
        }
      </div>
    )
  }
}



export default connect(mapStateToProps, null)(List);
