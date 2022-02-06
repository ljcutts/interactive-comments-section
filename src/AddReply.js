import React, {useState} from "react";
import data from './data.json'

function AddReply({
  replyList,
  setReplyList,
  setReplyButton,
  edit,
  submitUpdate,
  setReplyButton2,
}) {
  const [replys, setReplys] = useState(edit ? edit.value : "");

  const handleSubmit = (e) => {
    if (edit) {
      submitUpdate({
        id: new Date().getTime().toString(),
        replys: replys,
      });
    }
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), replys: replys };
    const newReply = [...replyList, newItem];
    setReplyList(newReply);
    console.log(replyList);
    setReplys("");
    setReplyButton(false);
    setReplyButton2(false);
  };

  ///maybe add form to ReplySection instead of this file

  return (
    <form className="add-reply-container" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <textarea
            name=""
            id="text-box"
            placeholder="Add a reply..."
            value={replys}
            onChange={(e) => setReplys(e.target.value)}
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
            value={replys}
            onChange={(e) => setReplys(e.target.value)}
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


export default AddReply;
