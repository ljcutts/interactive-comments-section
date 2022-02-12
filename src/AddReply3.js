import React, { useState } from "react";
import data from "./data.json";

function AddReply3({
  replyList3,
  setReplyList3,
  setReplyButton3,
  edit3,
  submitUpdate3,
}) {
  const [replys3, setReplys3] = useState(edit3 ? edit3.value : "");

  const handleSubmit = (e) => {
    if (edit3) {
      submitUpdate3({
        id: new Date().getTime().toString(),
        replys3: replys3,
      });
    }
    e.preventDefault();
    const newItem3 = { id: new Date().getTime().toString(), replys3: replys3 };
    const newReply3 = [...replyList3, newItem3];
    setReplyList3(newReply3);
    setReplys3("");
    setReplyButton3(false);
  };

  ///maybe add form to ReplySection instead of this file

  return (
    <form className="add-reply-container" onSubmit={handleSubmit}>
      {edit3 ? (
        <>
          <textarea
            name=""
            id="text-box"
            placeholder="Add a reply..."
            value={replys3}
            onChange={(e) => setReplys3(e.target.value)}
          ></textarea>
          <div className="comment-container-bottom">
            <img
              src="/images/avatars/image-juliusomo.png"
              width="34px"
              height="34px"
            />
            <button>UPDATE</button>
          </div>
        </>
      ) : (
        <>
          <textarea
            name=""
            id="text-box"
            placeholder="Add a reply..."
            value={replys3}
            onChange={(e) => setReplys3(e.target.value)}
          ></textarea>
          <div className="comment-container-bottom">
            <img
              src="/images/avatars/image-juliusomo.png"
              width="34px"
              height="34px"
            />
            <button>REPLY</button>
          </div>
        </>
      )}
    </form>
  );
}

export default AddReply3;
