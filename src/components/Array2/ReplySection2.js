import React, { useState } from "react";
import AddReply2 from "./AddReply2";
import DeleteModal2 from "./DeleteModal2";

function ReplySection2({
  replyList2,
  removeReply2,
  updateReply2,
  deleteMessageToggle2,
  deleteMessage2,
}) {
  // helps set the id and reply value that is being edited
  const [edit2, setEdit2] = useState({
    id: null,
    value: "",
  });

  //function to update the reply that is being edited
  const submitUpdate2 = (value) => {
    updateReply2(edit2.id, value);
    setEdit2({
      id: null,
      value: "",
    });
  };

  // only renders the reply container when reply is being edited
  if (edit2.id) {
    return <AddReply2 edit2={edit2} submitUpdate2={submitUpdate2} />;
  }

  return (
    // mapping of all the replies in the second reply array
    <section>
      {replyList2.map((replies) => {
        const { id, replys2 } = replies;
        return (
          <section className="reply-section" key={id}>
            <div className="line-container">
              <div className="line"></div>
            </div>
            <div className="reply-comment-container" id="reply-container2">
              <div className="comment-top">
                <img
                  src="/images/avatars/image-juliusomo.png"
                  className="img-container"
                  width="34px"
                  height="34px"
                  alt="juliusomo"
                />
                <span className="username">juliusomo</span>
                <div className="you-container">
                  <span className="inside-you">you</span>
                </div>
                <span className="comment-date">now</span>
              </div>
              <div className="reply-content-box">
                <span className="mention">@maxblagun</span>
                <span className="content"> {replys2}</span>
              </div>
              <div className="comment-bottom mobile-version" id="com-bot">
                <div className="vote-counter">
                  <img src="/images/icon-plus.svg" alt="" />
                  <span className="rotate-score">0</span>
                  <img src="/images/icon-minus.svg" alt="" />
                </div>
                <div className="reply-container-btn">
                  <section onClick={deleteMessageToggle2}>
                    <img src="/images/icon-delete.svg" alt="" />
                    <span className="trash">Delete</span>
                  </section>
                  <section onClick={() => setEdit2({ id: id, value: replys2 })}>
                    <img src="/images/icon-edit.svg" alt="" />
                    <span>Edit</span>
                  </section>
                </div>
              </div>
            </div>
            {/* modal for the delete message */}
            {deleteMessage2 && (
              <DeleteModal2
                deleteMessageToggle2={deleteMessageToggle2}
                removeReply2={removeReply2}
                id={id}
              />
            )}
          </section>
        );
      })}
    </section>
  );
}

export default ReplySection2;
