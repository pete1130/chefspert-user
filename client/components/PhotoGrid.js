import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'
import Photo from './Photo'

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo key={i} i={i} post={post} {...this.props} />)}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid)

