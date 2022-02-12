import React, { useRef, useEffect, useState } from "react";
import AddReply3 from "./AddReply3";
import DeleteModal3 from "./DeleteModal3";

function ReplySection3({
  replyList3,
  removeReply3,
  updateReply3,
  deleteMessageToggle3,
  deleteMessage3,
}) {
  const [edit3, setEdit3] = useState({
    id: null,
    value: "",
  });

  const submitUpdate3 = (value) => {
    updateReply3(edit3.id, value);
    setEdit3({
      id: null,
      value: "",
    });
  };

  if (edit3.id) {
    return <AddReply3 edit3={edit3} submitUpdate3={submitUpdate3} />;
  }

  return (
    <section>
      {replyList3.map((replies) => {
        const { id, replys3 } = replies;
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
                <span className="mention">@ramsesmiron</span>
                <span className="content"> {replys3}</span>
              </div>
              <div className="comment-bottom">
                <div className="vote-counter">
                  <img src="/images/icon-plus.svg" alt="" />
                  0
                  <img src="/images/icon-minus.svg" alt="" />
                </div>
                <div className="reply-container-btn">
                  <section onClick={deleteMessageToggle3}>
                    <img src="/images/icon-delete.svg" alt="" />
                    <span className="trash">Trash</span>
                  </section>
                  <section onClick={() => setEdit3({ id: id, value: replys3 })}>
                    <img src="/images/icon-edit.svg" alt="" />
                    <span>Edit</span>
                  </section>
                </div>
              </div>
            </div>
            {deleteMessage3 && (
              <DeleteModal3
                deleteMessageToggle3={deleteMessageToggle3}
                removeReply3={removeReply3}
                id={id}
              />
            )}
          </section>
        );
      })}
    </section>
  );
}

export default ReplySection3;
