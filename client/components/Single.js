import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'
import Photo from './Photo'
import Comments from './Comments'

const Single = (state) => {
  const { postId } = state.match.params;
  const i = state.posts.findIndex((post) => post.code === postId)
  const post = state.posts[i];
  const postComments = state.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...state} />
      <Comments {...state} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Single)