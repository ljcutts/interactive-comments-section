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
   {comments.map((comment, index) => {
        const {content, createdAt, score, user, replies } = comment
        const {image, username} = user
       
        const {png} = image
        return (
          <section key={index}>
            <div className="comment-container">
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
              <div className="content-box">
                <span className="content">{content}</span>
              </div>
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
            {replies
              .filter((reply, index) => index === 0)
              .map((reply) => {
                const { content, createdAt, user, score } = reply;
                const { image, username } = user;
                const { png } = image;
                return (
                  <>
                    <section className="reply-section">
                      <div className="line-container">
                        <div className="line"></div>
                      </div>
                      <div className="reply-comment-container">
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
                        <div className="reply-content-box">
                          <span className="mention">@maxlagun</span>
                          <span className="content"> {content}</span>
                        </div>
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
                    </section>
                  </>
                );
              })}
            {replies
              .filter((reply, index) => index === 1)
              .map((reply) => {
                const { content, createdAt, user, score } = reply;
                const { image, username } = user;
                const { png } = image;
                return (
                  <>
                    <section className="reply-section">
                      <div className="line-container-2">
                        <div className="line-2"></div>
                      </div>
                      <div className="reply-comment-container">
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
                        <div className="reply-content-box">
                          <span className="mention">@ramsesmiron</span>
                          <span className="content"> {content}</span>
                        </div>
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
                    </section>
                  </>
                );
              })}
          </section>
        );
      })}
    </main>
  );
}

export default App;
