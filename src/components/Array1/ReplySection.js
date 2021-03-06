import React, {useState } from "react";
import AddReply from "./AddReply";
import DeleteModal from "./DeleteModal";

function ReplySection({
  replyList,
  removeReply,
  updateReply,
  deleteMessageToggle,
  deleteMessage
}) {
  // helps set the id and reply value that is being edited
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //function to update the reply that is being edited
  const submitUpdate = (value) => {
    updateReply(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

// only renders the reply container when reply is being edited
  if (edit.id) {
    return <AddReply edit={edit} submitUpdate={submitUpdate} />;
  }

  return (
    // mapping of all the replies in the first reply array
    <section>
      {replyList.map((replies) => {
        const { id, replys } = replies;
        return (
          <>
            <section className="reply-section" key={id}>
              <div className="line"></div>

              <div className="reply-comment-container" id="reply-container">
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
                  <span className="mention">@amyrobson</span>
                  <span className="content"> {replys}</span>
                </div>
                <div
                  className="comment-bottom"
                  id="com-bot"
                >
                  <div className="vote-counter">
                    <img src="/images/icon-plus.svg" alt="" />
                    <span className="rotate-score">0</span>
                    <img src="/images/icon-minus.svg" alt="" />
                  </div>
                  <div className="reply-container-btn">
                    <section onClick={deleteMessageToggle}>
                      <img src="/images/icon-delete.svg" alt="" />
                      <span className="trash">Delete</span>
                    </section>
                    <section onClick={() => setEdit({ id: id, value: replys })}>
                      <img src="/images/icon-edit.svg" alt="" />
                      <span>Edit</span>
                    </section>
                  </div>
                </div>
              </div>
              {/* modal for the delete message */}
              {deleteMessage && (
                <DeleteModal
                  deleteMessageToggle={deleteMessageToggle}
                  removeReply={removeReply}
                  id={id}
                />
              )}
            </section>
          </>
        );
      })}
    </section>
  );
}

export default ReplySection;
