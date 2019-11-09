import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      character: []
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
      deleteComment,
      inList,
      getFavCharactersList
    } = this.props;
    return (
      <div>
        <div className="card-list">
          <div className="card">
            <h1 className="card-name">{characterName}</h1>
            <div className="center-img">
              <div className="img-div">
                <img className="small-img" src={characterImage} alt="" />
                <p className="comment">{this.props.comment}</p>
                <div className="center-input">
                  <input
                    className="comment-input"
                    type="text"
                    name=""
                    id=""
                    value={comment}
                    onChange={this.setComment}
                  />
                </div>
                <div className="center-btn">
                  <button
                    className="post-btn"
                    onClick={() => {
                      createComment(id, comment);
                    }}
                  >
                    Post Comment
                  </button>
                </div>
                <div className="ctr-btn">
                  <button
                    className="no-btn"
                    onClick={() => {
                      deleteComment(id);
                    }}
                  >
                    <i className="far fa-times-circle"></i>
                  </button>
                  {inList ? (
                    <button>trash</button>
                  ) : (
                    <button
                      className="plus-btn"
                      onClick={() =>
                        getFavCharactersList({
                          id,
                          characterName,
                          characterImage,
                          inList: true
                        })
                      }
                    >
                      <i className="fas fa-plus-circle"></i>
                    </button>
                  )}
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
