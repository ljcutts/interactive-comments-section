import React, {useState} from "react";
import data from "./data.json";
import AddReply from "./AddReply";
import CommentLists from "./CommentLists";
import ReplySection from "./ReplySection";
import AddReply2 from "./AddReply2";
import AddReply3 from "./AddReply3";
import ReplySection2 from "./ReplySection2"
import ReplySection3 from "./ReplySection3";
import DeleteModal from "./DeleteModal";
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
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [deleteMessage2, setDeleteMessage2] = useState(false);
  const [deleteMessage3, setDeleteMessage3] = useState(false);
  const [replyList, setReplyList] = useState([]);
  const [replyList2, setReplyList2] = useState([]);
  const [replyList3, setReplyList3] = useState([]);
  const [replyButton, setReplyButton] = useState(false);
  const [replyButton2, setReplyButton2] = useState(false);
  const [replyButton3, setReplyButton3] = useState(false);
  const { comments } = data;

  const openReplyBox = () => {
    setReplyButton(!replyButton);
  };

  const openReplyBox2 = () => {
    setReplyButton2(!replyButton2);
  };

  const openReplyBox3 = () => {
    setReplyButton3(!replyButton3);
  };


  const updateReply = (replyId, newValue) => {
    setReplyList((prev) =>
      prev.map((item) => (item.id === replyId ? newValue : item))
    );
  };

  const updateReply2 = (replyId, newValue) => {
    setReplyList2((prev) =>
      prev.map((item) => (item.id === replyId ? newValue : item))
    );
  };

   const updateReply3 = (replyId, newValue) => {
     setReplyList3((prev) =>
       prev.map((item) => (item.id === replyId ? newValue : item))
     );
   };

  //for the comment in the replies array in data.json, maybe make another useState for the replies array using its id(reply.filter, something like that)
  const removeItem = (id) => {
    setCommentList(commentList.filter((item) => item.id !== id));
  };

  const deleteMessageToggle = () => {
    setDeleteMessage(!deleteMessage);
  }

   const deleteMessageToggle2 = () => {
     setDeleteMessage2(!deleteMessage2);
   };

   const deleteMessageToggle3 = () => {
     setDeleteMessage3(!deleteMessage3);
   };




  const removeReply = (id) => {
    const removedArr = replyList.filter((replies) => replies.id !== id);
    setReplyList(removedArr);
  };

  const removeReply2 = (id) => {
    const removedArr = replyList2.filter((replies) => replies.id !== id);
    setReplyList2(removedArr);
  };

  const removeReply3 = (id) => {
    const removedArr = replyList3.filter((replies) => replies.id !== id);
    setReplyList3(removedArr);
  };

  const editItem = (id) => {
    setIsEditing(true);
    const specificItem = commentList.find((item) => item.id === id);
    setEditID(id);
    setComment(specificItem.comment);
    console.log(isEditing);
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

  return (
    <main>
      <section>
        {comments
          .filter((comment, index) => index === 0)
          .map((comment, index) => {
            const { content, createdAt, score, user } = comment;
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
                  <div
                    className="reply-container-btn"
                    onClick={openReplyBox}
                    style={{ cursor: "pointer" }}
                  >
                    <img src="/images/icon-reply.svg" alt="" />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            );
          })}
        {replyList.length > 0 && (
          <ReplySection
            replyList={replyList}
            setReplys={setReplyList}
            deleteMessageToggle={deleteMessageToggle}
            deleteMessage={deleteMessage}
            updateReply={updateReply}
            removeReply={removeReply}
          />
        )}
        {replyButton && (
          <AddReply
            replyList={replyList}
            setReplyList={setReplyList}
            setReplyButton={setReplyButton}
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
              <section key={index}>
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
                    <div
                      className="reply-container-btn"
                      onClick={openReplyBox2}
                      style={{ cursor: "pointer" }}
                    >
                      <img src="/images/icon-reply.svg" alt="" />
                      <span>Reply</span>
                    </div>
                  </div>
                </div>
                {replyButton2 && (
                  <AddReply2
                    replyList2={replyList2}
                    setReplyList2={setReplyList2}
                    setReplyButton2={setReplyButton2}
                  />
                )}
                {replies
                  .filter((reply, index) => index === 0)
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
                              <span className="mention">@maxblagun</span>
                              <span className="content"> {content}</span>
                            </div>
                            <div className="comment-bottom">
                              <div className="vote-counter">
                                <img src="/images/icon-plus.svg" alt="" />
                                {score}
                                <img src="/images/icon-minus.svg" alt="" />
                              </div>
                              <div
                                className="reply-container-btn"
                                onClick={openReplyBox3}
                                style={{ cursor: "pointer" }}
                              >
                                <img src="/images/icon-reply.svg" alt="" />
                                <span>Reply</span>
                              </div>
                            </div>
                          </div>
                        </section>
                      </>
                    );
                  })}
                {replyButton3 && (
                  <AddReply3
                    replyList3={replyList3}
                    setReplyList3={setReplyList3}
                    setReplyButton3={setReplyButton3}
                  />
                )}
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
          })}
        {replyList2.length > 0 && (
          <ReplySection2
            replyList2={replyList2}
            setReplyList2={setReplyList2}
            removeReply2={removeReply2}
            updateReply2={updateReply2}
            deleteMessageToggle2={deleteMessageToggle2}
            deleteMessage2={deleteMessage2}
          />
        )}
        {replyList3.length > 0 && (
          <ReplySection3
            replyList3={replyList3}
            setReplyList3={setReplyList3}
            removeReply3={removeReply3}
            updateReply3={updateReply3}
            deleteMessageToggle3={deleteMessageToggle3}
            deleteMessage3={deleteMessage3}
          />
        )}
      </section>
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
