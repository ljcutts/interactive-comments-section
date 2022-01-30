import React, {useState} from "react";
import data from "./data.json";
import ReplySection from "./ReplySection";
import CommentLists from "./CommentLists";
import "./App.css";

//Work on the Edit feature so that you don't edit it in the "add a comment" box and add a button that says 'update' after you hit the edit button
function App() {
  const getLocalStorage = () => {
  let commentLists = localStorage.getItem('commentLists');
  if (commentLists) {
    return (commentLists = JSON.parse(localStorage.getItem("commentLists")));
  } else {
    return [];
  }
}
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(getLocalStorage());
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const {comments} = data;

  const handleSubmit = (e) => {
    e.preventDefault();
     if (comment && isEditing) {
      setCommentList(
        commentList.map((item) => {
          if (item.id === editID) {
            return { ...item, comment: comment };
          }
          return item;
        })
      );
      setComment("");
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), comment: comment };
      setCommentList([...commentList, newItem]);
      setComment('');
    }
  };

  const removeItem = (id) => {
    setCommentList(commentList.filter((item) => item.id !== id));
  };

   const editItem = (id) => {
     const specificItem = commentList.find((item) => item.id === id);
     setIsEditing(true);
     setEditID(id);
     setComment(specificItem.comment);
   };


  return (
    <main>
      {comments.map((comment, index) => {
        const { content, createdAt, score, user, replies } = comment;
        const { image, username } = user;

        const { png } = image;
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
                const { content, createdAt, user, score, id } = reply;
                const { image, username } = user;
                const { png } = image;
                return (
                  <>
                    <section key={reply.id} className="reply-section">
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
                            <img
                              src="/images/icon-delete.svg"
                              alt=""
                            />
                            <span className="trash">Trash</span>
                            <img src="/images/icon-edit.svg" alt="" />
                            <span>Edit</span>
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
      {commentList.length > 0 && (
        <CommentLists
          items={commentList}
          removeItem={removeItem}
          editItem={editItem}
        />
      )}

      <form className="add-comment-container" onSubmit={handleSubmit}>
        <textarea
          name=""
          id="text-box"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className="comment-container-bottom">
          <img
            src="/images/avatars/image-juliusomo.png"
            width="34px"
            height="34px"
          />
          <button>SEND</button>
        </div>
      </form>
    </main>
  );
}

export default App;
