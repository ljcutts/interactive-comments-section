import React, { useState } from "react";
import AddReply3 from "./AddReply3";
import DeleteModal3 from "./DeleteModal3";

function ReplySection3({
  replyList3,
  removeReply3,
  updateReply3,
  deleteMessageToggle3,
  deleteMessage3,
}) {
  // helps set the id and reply value that is being edited
  const [edit3, setEdit3] = useState({
    id: null,
    value: "",
  });

  //function to update the reply that is being edited
  const submitUpdate3 = (value) => {
    updateReply3(edit3.id, value);
    setEdit3({
      id: null,
      value: "",
    });
  };

  // only renders the reply container when reply is being edited
  if (edit3.id) {
    return <AddReply3 edit3={edit3} submitUpdate3={submitUpdate3} />;
  }

  return (
    // mapping of all the replies in the third reply array
    <section>
      {replyList3.map((replies) => {
        const { id, replys3 } = replies;
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
                <span className="mention">@ramsesmiron</span>
                <span className="content"> {replys3}</span>
              </div>
              <div className="comment-bottom mobile-version" id="com-bot">
                <div className="vote-counter">
                  <img src="/images/icon-plus.svg" alt="" />
                  <span className="rotate-score">0</span>
                  <img src="/images/icon-minus.svg" alt="" />
                </div>
                <div className="reply-container-btn">
                  <section onClick={deleteMessageToggle3}>
                    <img src="/images/icon-delete.svg" alt="" />
                    <span className="trash">Delete</span>
                  </section>
                  <section onClick={() => setEdit3({ id: id, value: replys3 })}>
                    <img src="/images/icon-edit.svg" alt="" />
                    <span>Edit</span>
                  </section>
                </div>
              </div>
            </div>
            {/* modal for the delete message */}
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
