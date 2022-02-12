import React, { useRef, useEffect, useState } from "react";
import AddReply2 from "./AddReply2";
import DeleteModal2 from "./DeleteModal2";

function ReplySection2({
  replyList2,
  removeReply2,
  updateReply2,
  deleteMessageToggle2,
  deleteMessage2,
}) {
  const [edit2, setEdit2] = useState({
    id: null,
    value: "",
  });

  const submitUpdate2 = (value) => {
    updateReply2(edit2.id, value);
    setEdit2({
      id: null,
      value: "",
    });
  };

  if (edit2.id) {
    return <AddReply2 edit2={edit2} submitUpdate2={submitUpdate2} />;
  }

  return (
    <section>
      {replyList2.map((replies) => {
        const { id, replys2 } = replies;
        return (
          <section className="reply-section" key={id}>
            <div className="line-container">
              <div className="line"></div>
            </div>
            <div className="reply-comment-container">
              <div className="comment-top">
                <img
                  src="/images/avatars/image-juliusomo.png"
                  className="img-container"
                  width="34px"
                  height="34px"
                />
                <span className="username">juliusomo</span>
                <span className="comment-date">now</span>
              </div>
              <div className="reply-content-box">
                <span className="mention">@maxblagun</span>
                <span className="content"> {replys2}</span>
              </div>
              <div className="comment-bottom">
                <div className="vote-counter">
                  <img src="/images/icon-plus.svg" alt="" />
                  0
                  <img src="/images/icon-minus.svg" alt="" />
                </div>
                <div className="reply-container-btn">
                  <section onClick={deleteMessageToggle2}>
                    <img src="/images/icon-delete.svg" alt="" />
                    <span className="trash">Trash</span>
                  </section>
                  <section onClick={() => setEdit2({ id: id, value: replys2 })}>
                    <img src="/images/icon-edit.svg" alt="" />
                    <span>Edit</span>
                  </section>
                </div>
              </div>
            </div>
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
