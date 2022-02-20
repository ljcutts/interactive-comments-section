import React, {useState} from "react";


function AddReply({
  replyList,
  setReplyList,
  setReplyButton,
  edit,
  submitUpdate,
}) {

  // helps to initialize and edit replys
  const [replys, setReplys] = useState(edit ? edit.value : "");

  // function that handles the submission of replies for the first array list
  const handleSubmit = (e) => {
    if (edit) {
      submitUpdate({
        id: new Date().getTime().toString(),
        replys: replys,
      });
    } else {
      e.preventDefault();
      const newItem = { id: new Date().getTime().toString(), replys: replys };
      const newReply = [...replyList, newItem];
      setReplyList(newReply);
      setReplys("");
      setReplyButton(false);
    }
  };

  return (
    // form to edit or submit replies in the first reply array
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
              alt="juliusomo"
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
              alt="juliusomo"
            />
            <button>REPLY</button>
          </div>
        </>
      )}
    </form>
  );
}


export default AddReply;
