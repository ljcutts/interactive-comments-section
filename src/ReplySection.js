import React, { useRef, useEffect, useState } from "react";
import AddReply from "./AddReply";

function ReplySection({ replyList, setReplyList, removeReply, updateReply }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const [dimension, setDimensions] = useState(0);
  const replyRef = useRef();
  const lineRef = useRef();
  let replyContainerHeight;
  let lineHeight;

  //  useEffect(() => {
  //   replyContainerHeight = replyRef.current.getBoundingClientRect().height;
  //   if (lineRef.current) {
  //       const { current } = lineRef
  //        lineHeight = current.getBoundingClientRect().height
  //        lineHeight = `${replyContainerHeight} px`;
  //   }
  //   console.log(replyContainerHeight);
  //   console.log(lineHeight)
  //  }, [lineRef])

  const submitUpdate = (value) => {
    updateReply(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
     if (edit.id) {
       return <AddReply edit={edit} submitUpdate={submitUpdate}/>
    }
    
  return (
    <section>
      {replyList.map((replies) => {
        const { id, replys } = replies;
        return (
          <section className="reply-section" key={id}>
            <div className="line-container">
              <div className="line" ref={lineRef}></div>
            </div>
            <div className="reply-comment-container" ref={replyRef}>
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
                <span className="mention">@amyrobson</span>
                <span className="content"> {replys}</span>
              </div>
              <div className="comment-bottom">
                <div className="vote-counter">
                  <img src="/images/icon-plus.svg" alt="" />
                  0
                  <img src="/images/icon-minus.svg" alt="" />
                </div>
                <div className="reply-container-btn">
                  <section onClick={() => removeReply(id)}>
                    <img src="/images/icon-delete.svg" alt="" />
                    <span className="trash">Trash</span>
                  </section>
                  <section onClick={() => setEdit({ id: id, value: replys })}>
                    <img src="/images/icon-edit.svg" alt="" />
                    <span>Edit</span>
                  </section>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default ReplySection;
