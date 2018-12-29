import React from 'react'
import { connect } from 'react-redux'

class Comments extends React.Component {
  constructor() {
    super()
    this.renderComment = this.renderComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  renderComment(comment,i) {
    const { postId } = this.props.match.params
    if(comment.user !== undefined || comment.text !== undefined) {
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment" 
                    onClick={() => this.props.removeComment(postId, i)}>&times;</button>
          </p>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const {postId} = this.props.match.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    const postId = this.props.match.params.postId;
    const comments= this.props.comments[postId]

    return (
      <div className="comments">
      {(comments !== undefined) && Object.values(comments).map((comment,i) => this.renderComment(comment,i))} 
        <form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments