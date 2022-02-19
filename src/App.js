import React, { useState, useEffect, useRef } from "react";
import data from "./data.json";
import AddReply from "./AddReply";
import CommentLists from "./CommentLists";
import ReplySection from "./ReplySection";
import AddReply2 from "./AddReply2";
import AddReply3 from "./AddReply3";
import ReplySection2 from "./ReplySection2";
import ReplySection3 from "./ReplySection3";
import "./App.css";
import DeleteInitalCommentModal from "./DeleteInitalCommentModal";

//edit functionality doesn't properly work, can't get line to act right
//try to make the post date dynamic with Date
//organize code files
//clean up code and add documentation


function App() {
  const getLocalStorage = () => {
    let commentLists = localStorage.getItem("commentLists");
    if (commentLists) {
      return (commentLists = JSON.parse(localStorage.getItem("commentLists")));
    } else {
      return [];
    }
  };

  // const timePassed = () => {
  //   var time1 = new Date().getHours(); //"now"
  //   var time2 = new Date(2022, 1, 19, 9, 23).getHours(); // some date
  //   const timeDifference = Math.abs(time2 - time1);
  //   console.log(timeDifference);
  // };

  // useEffect(() => { 
  //   setInterval(timePassed, 3000);
  // })

  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(getLocalStorage());
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingInitial, setEditingInital] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [deleteMessage2, setDeleteMessage2] = useState(false);
  const [deleteMessage3, setDeleteMessage3] = useState(false);
  const [deleteCommentMessage, setDeleteCommentMessage] = useState(false);
  const [deleteInitialCommentMessage, setDeleteInitialCommentMessage] = useState(false);
  const [replyList, setReplyList] = useState([]);
  const [replyList2, setReplyList2] = useState([]);
  const [replyList3, setReplyList3] = useState([]);
  const [replyButton, setReplyButton] = useState(false);
  const [replyButton2, setReplyButton2] = useState(false);
  const [replyButton3, setReplyButton3] = useState(false);
  const [updateComment, setUpdateComment] = useState(false);
  const [score1, setScore1] = useState(12);
  const [score2, setScore2] = useState(5);
  const [score3, setScore3] = useState(4);
  const [initialReply, setInitialReply] = useState(`I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.`)
  const { comments } = data;
  const editRef = useRef(null);

   useEffect(() => {
     if (editingInitial) {
       editRef.current.focus();
     }
   }, [editingInitial]);


  const upVote1 = () => {
    if (score1 !== 13) {
      setScore1(score1 + 1);
    }
  };

  const upVote2 = () => {
    if (score2 !== 6) {
      setScore2(score2 + 1);
    }
  };

  const upVote3 = () => {
    if (score3 !== 5) {
      setScore3(score3 + 1);
    }
  };

  const downVote1 = () => {
    if (score1 === 13) {
      setScore1(score1 - 1);
    }
  };

  const downVote2 = () => {
    if (score2 === 6) {
      setScore2(score2 - 1);
    }
  };

  const downVote3 = () => {
    if (score3 === 5) {
      setScore3(score3 - 1);
    }
  };

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

  const removeItem = (id) => {
    setCommentList(commentList.filter((item) => item.id !== id));
    setDeleteCommentMessage(false);
  };

  const deleteMessageToggle = () => {
    setDeleteMessage(!deleteMessage);
  };

  const deleteMessageToggle2 = () => {
    setDeleteMessage2(!deleteMessage2);
  };

  const deleteMessageToggle3 = () => {
    setDeleteMessage3(!deleteMessage3);
  };

  const deleteCommentToggle = () => {
    setDeleteCommentMessage(!deleteCommentMessage);
  };

  const deleteInitialCommentToggle = () => {
    setDeleteInitialCommentMessage(!deleteInitialCommentMessage);
  };

  const commentToggle = (bool) => {
    setUpdateComment(bool);
  };

  const removeReply = (id) => {
    const removedArr = replyList.filter((replies) => replies.id !== id);
    setReplyList(removedArr);
    setDeleteMessage(false);
  };

  const removeInitialReply = () => {
    const section = document.getElementById("inital-reply");
    section.remove();
    setDeleteInitialCommentMessage(false);
  };

  const removeReply2 = (id) => {
    const removedArr = replyList2.filter((replies) => replies.id !== id);
    setReplyList2(removedArr);
    setDeleteMessage2(false);
  };

  const removeReply3 = (id) => {
    const removedArr = replyList3.filter((replies) => replies.id !== id);
    setReplyList3(removedArr);
    setDeleteMessage3(false);
  };

  const editItem = (id) => {
    setUpdateComment(true);
    setIsEditing(true);
    const specificItem = commentList.find((item) => item.id === id);
    setEditID(id);
    setComment(specificItem.comment);
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

  const toggleEditing = () => {
    setEditingInital(!editingInitial);
  };

  return (
    <main>
      <section>
        {comments
          .filter((comment, index) => index === 0)
          .map((comment, index) => {
            const { content, createdAt, user } = comment;
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
                    alt="amyrobson"
                  />
                  <span className="username">{username}</span>
                  <span className="comment-date">{createdAt}</span>
                </div>
                <div className="content-box">
                  <span className="content">{content}</span>
                </div>
                <div className="comment-bottom">
                  <div className="vote-counter">
                    <img src="/images/icon-plus.svg" alt="" onClick={upVote1} />
                    <span className="rotate-score">{score1}</span>

                    <img
                      src="/images/icon-minus.svg"
                      alt=""
                      onClick={downVote1}
                    />
                  </div>
                  <div
                    className="reply-container-btn"
                    onClick={openReplyBox}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <img src="/images/icon-reply.svg" alt="" />
                      <span>Reply</span>
                    </div>
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
            const { content, createdAt, user, replies } = comment;
            const { image, username } = user;

            const { png } = image;
            return (
              <section>
                <div className="comment-container" key={index}>
                  <div className="comment-top">
                    <img
                      src={png}
                      className="img-container"
                      width="34px"
                      height="34px"
                      alt="maxblagun"
                    />
                    <span className="username">{username}</span>
                    <span className="comment-date">{createdAt}</span>
                  </div>
                  <div className="content-box">
                    <span className="content">{content}</span>
                  </div>
                  <div className="comment-bottom">
                    <div className="vote-counter">
                      <img
                        src="/images/icon-plus.svg"
                        alt=""
                        onClick={upVote2}
                      />
                      <span className="rotate-score">{score2}</span>
                      <img
                        src="/images/icon-minus.svg"
                        alt=""
                        onClick={downVote2}
                      />
                    </div>
                    <div
                      className="reply-container-btn"
                      onClick={openReplyBox2}
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <img src="/images/icon-reply.svg" alt="" />
                        <span>Reply</span>
                      </div>
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
                    const { content, createdAt, user, id } = reply;
                    const { image, username } = user;
                    const { png } = image;
                    return (
                      <>
                        <section key={id} className="reply-section">
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
                                alt="ramsesmiro"
                                n
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
                                <img
                                  src="/images/icon-plus.svg"
                                  alt=""
                                  onClick={upVote3}
                                />
                                <span className="rotate-score">{score3}</span>
                                <img
                                  src="/images/icon-minus.svg"
                                  alt=""
                                  onClick={downVote3}
                                />
                              </div>
                              <div
                                className="reply-container-btn"
                                onClick={openReplyBox3}
                                style={{ cursor: "pointer" }}
                              >
                                <div>
                                  <img src="/images/icon-reply.svg" alt="" />
                                  <span>Reply</span>
                                </div>
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
                    const { createdAt, user, score, id } = reply;
                    const { image, username } = user;
                    const { png } = image;
                    return (
                      <>
                        <section
                          key={id}
                          id="inital-reply"
                          className="reply-section"
                        >
                          <div className="line-container-2">
                            <div className="line-2"></div>
                          </div>
                          <div
                            className="reply-comment-container"
                            id="initial-comment"
                          >
                            <div className="comment-top">
                              <img
                                src={png}
                                className="img-container"
                                width="34px"
                                height="34px"
                                alt="juliusomo"
                              />
                              <span className="username">{username}</span>
                              <div className="you-container">
                                <span className="inside-you">you</span>
                              </div>
                              <span className="comment-date">{createdAt}</span>
                            </div>
                            <div className="reply-content-box">
                              <span className="mention">@ramsesmiron</span>
                              {editingInitial ? (
                                <textarea
                                  ref={editRef}
                                  id="inital-text-box"
                                  value={initialReply}
                                  onChange={(e) =>
                                    setInitialReply(e.target.value)
                                  }
                                ></textarea>
                              ) : (
                                <textarea
                                  readOnly
                                  className="remove-focus"
                                  id="inital-text-box"
                                  value={initialReply}
                                  onChange={(e) =>
                                    setInitialReply(e.target.value)
                                  }
                                ></textarea>
                              )}
                            </div>
                            <div className="comment-bottom">
                              <div
                                className="vote-counter"
                                id="initial-vote-counter"
                              >
                                <img src="/images/icon-plus.svg" alt="" />
                                <span className="rotate-score">{score}</span>
                                <img src="/images/icon-minus.svg" alt="" />
                              </div>
                              <div
                                className="reply-container-btn"
                                id="inital-reply-btn"
                              >
                                {editingInitial ? (
                                  <button
                                    className="inital-button"
                                    onClick={toggleEditing}
                                  >
                                    UPDATE
                                  </button>
                                ) : (
                                  <>
                                    <section
                                      onClick={deleteInitialCommentToggle}
                                    >
                                      <img
                                        src="/images/icon-delete.svg"
                                        alt=""
                                      />
                                      <span className="trash">Delete</span>
                                    </section>
                                    <section onClick={toggleEditing}>
                                      <img src="/images/icon-edit.svg" alt="" />
                                      <span>Edit</span>
                                    </section>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          {deleteInitialCommentMessage && (
                            <DeleteInitalCommentModal
                              deleteInitialCommentToggle={
                                deleteInitialCommentToggle
                              }
                              removeInitialReply={removeInitialReply}
                            />
                          )}
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
      {CommentLists.length > 0 && updateComment === false ? (
        <CommentLists
          items={commentList}
          removeItem={removeItem}
          editItem={editItem}
          commentToggle={commentToggle}
          deleteCommentMessage={deleteCommentMessage}
          deleteCommentToggle={deleteCommentToggle}
        />
      ) : (
        ""
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
            alt="juliusomo"
          />
          {updateComment ? (
            <button onClick={() => commentToggle(false)}>UPDATE</button>
          ) : (
            <button onClick={() => commentToggle(false)}>SEND</button>
          )}
        </div>
      </form>
    </main>
  );
}

export default App;
