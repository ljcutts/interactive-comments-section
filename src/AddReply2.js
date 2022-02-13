import React, { useState} from "react";


function AddReply2({
  replyList2,
  setReplyList2,
  setReplyButton2,
  edit2,
  submitUpdate2,
}) {
  const [replys2, setReplys2] = useState(edit2 ? edit2.value : "");

  const handleSubmit = (e) => {
    if (edit2) {
      submitUpdate2({
        id: new Date().getTime().toString(),
        replys2: replys2,
      });
    }
    e.preventDefault();
    const newItem2 = { id: new Date().getTime().toString(), replys2: replys2 };
    const newReply2 = [...replyList2, newItem2];
    setReplyList2(newReply2);
    setReplys2("");
    setReplyButton2(false);
  };

  return (
    <form className="add-reply-container" onSubmit={handleSubmit}>
      {edit2 ? (
        <>
          <textarea
            name=""
            id="text-box"
            placeholder="Add a reply..."
            value={replys2}
            onChange={(e) => setReplys2(e.target.value)}
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
            value={replys2}
            onChange={(e) => setReplys2(e.target.value)}
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

export default AddReply2;
