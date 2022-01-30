import React from "react";
import data from "./data.json";
import ReplySection from "./ReplySection";
import "./App.css";

function App() {

  const {comments} = data;
  console.log(data);
  console.log(data.comments[1]);
  return (
    <main>
   {comments.map((comment) => {
        const {content, createdAt, score, user, replies } = comment
       
        const {image, username} = user
        const {replyingTo} = replies
        const {png} = image
        return (
          <div key={comment.id} className="comment-container">
            <div className="comment-top">
              <img
                src={png}
                className="img-container"
                width="34px"
                height="34px"
              />
              <span className="username">{username}</span>
              <span className="comment-date">{createdAt}</span>
            </div>
            <div className="content-box">{content}</div>
            <div className="comment-bottom">
              <div className="vote-counter">
                <img src="/images/icon-plus.svg" alt="" />
                {score}
                <img src="/images/icon-minus.svg" alt="" />
              </div>
              <div className="reply-container-btn">
                <img src="/images/icon-reply.svg" alt="" />
                <span>Reply</span>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default App;
