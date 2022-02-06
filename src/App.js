import React, {useState} from "react";
import data from "./data.json";
import AddReply from "./AddReply";
import CommentLists from "./CommentLists";
import ReplySection from "./ReplySection";
import "./App.css";

//Work on the Edit feature so that you don't edit it in the "add a comment" box and add a button that says 'update' after you hit the edit button
function App() {
  const getLocalStorage = () => {
    let commentLists = localStorage.getItem("commentLists");
    if (commentLists) {
      return (commentLists = JSON.parse(localStorage.getItem("commentLists")));
    } else {
      return [];
    }
  };

  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(getLocalStorage());
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [replyList, setReplyList] = useState([]);
  const [replyButton, setReplyButton] = useState(false);
  const [replyButton2, setReplyButton2] = useState(false);
  const { comments } = data;


  const openReplyBox = () => {
    setReplyButton(!replyButton);
  }

  const openReplyBox2 = () => {
    setReplyButton2(!replyButton2);
  };

  const updateReply = (replyId, newValue) => { setReplyList((prev) =>
    prev.map((item) => (item.id === replyId ? newValue : item))
  );
};
 
  

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
      setComment("");
    }
  };

  //for the comment in the replies array in data.json, maybe make another useState for the replies array using its id(reply.filter, something like that)
  const removeItem = (id) => {
    setCommentList(commentList.filter((item) => item.id !== id));
  };

  const removeReply = (id) => {
    const removedArr = replyList.filter((replies) => replies.id !== id);
    setReplyList(removedArr);
  };


  const editItem = (id) => {
    setIsEditing(true);
    const specificItem = commentList.find((item) => item.id === id);
    setEditID(id);
    setComment(specificItem.comment);
    console.log(isEditing);
  };

  return (
    <main>
      <section>
        {comments
          .filter((comment, index) => index === 0)
          .map((comment, index) => {
            const { content, createdAt, score, user, replies } = comment;
            const { image, username } = user;

            const { png } = image;
            return (
              <div className="comment-container" key={index}>
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
                  <div className="reply-container-btn" onClick={openReplyBox2}>
                    <img
                      src="/images/icon-reply.svg"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            );
          })}
        {replyButton && (
          <AddReply
            replyList={replyList}
            setReplyList={setReplyList}
            setReplyButton={setReplyButton}
          />
        )}
        {replyList.length > 0 && (
          <ReplySection
            replyList={replyList}
            setReplys={setReplyList}
            removeReply={removeReply}
            updateReply={updateReply}
          />
        )}
      </section>
      <section>
        {comments
          .filter((comment, index) => index === 1)
          .map((comment, index) => {
            const { content, createdAt, score, user, replies } = comment;
            const { image, username } = user;

            const { png } = image;
            return (
              <div className="comment-container" key={index}>
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
                  <div className="reply-container-btn" onClick={openReplyBox2}>
                    <img
                      src="/images/icon-reply.svg"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            );
          })}
        {replyButton2 && (
          <AddReply
            replyList={replyList}
            setReplyList={setReplyList}
            setReplyButton={setReplyButton2}
          />
        )}
        {replyList.length > 0 && (
          <ReplySection
            replyList={replyList}
            setReplys={setReplyList}
            removeReply={removeReply}
            updateReply={updateReply}
          />
        )}
      </section>

      {/* {comments.map((comment, index) => {
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
                            <img src="/images/icon-delete.svg" alt="" />
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
      })} */}
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
