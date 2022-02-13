import React, { useState, useEffect, useRef } from "react";

function AddReply3({
  replyList3,
  setReplyList3,
  setReplyButton3,
  edit3,
  submitUpdate3,
}) {
  let handleSubmit
  const [replys3, setReplys3] = useState(edit3 ? edit3.value : "");
  const handle = useRef(null)

  handleSubmit = (e) => {
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

 useEffect(() => {
  handle.current.handleSubmit = (e) => {
       e.preventDefault();
       const newItem3 = {
         id: new Date().getTime().toString(),
         replys3: "hello there",
       };
       const newReply3 = [...replyList3, newItem3];
       setReplyList3(newReply3);
       setReplys3("");
   }
 })

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
              alt='juliusomo'
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
              alt='juliusomo'
            />
            <button>REPLY</button>
          </div>
        </>
      )}
    </form>
  );
}

export default AddReply3;
