import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }
  setComment = e => {
    this.setState({
      comment: e.target.value
    });
  };
  render() {
    const { comment } = this.state;
    const {
      characterName,
      characterImage,
      createComment,
      id,
      deleteComment
    } = this.props;
    return (
      <div>
        <div className="card-list">
          <div className="card">
            <h1 className="card-name">{characterName}</h1>
            <div className="center-img">
              <div>
                <img className="small-img" src={characterImage} alt="" />
                <p className="comment">{this.props.comment}</p>
                <input
                  className="comment-input"
                  type="text"
                  name=""
                  id=""
                  value={comment}
                  onChange={this.setComment}
                />
                <button
                  className="post-btn"
                  onClick={() => {
                    createComment(id, comment);
                  }}
                >
                  Post Comment
                </button>
                <div className="ctr-btn">
                  <button
                    className="no-btn"
                    onClick={() => {
                      deleteComment(id);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
