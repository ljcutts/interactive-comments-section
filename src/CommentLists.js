import React from 'react';

function CommentLists({removeItem, items, editItem, isEditing}) {
  return (
    <section>
      {items.map((item) => {
        const {id, comment} = item
       return (
         <div className="comment-container" key={id}>
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
           <div className="content-box">
             {isEditing ? (
               <textarea className="content">{comment}</textarea>
             ) : (
               <span className="content">{comment}</span>
             )}
           </div>
           <div className="comment-bottom">
             <div className="vote-counter">
               <img src="/images/icon-plus.svg" alt="" />
               0
               <img src="/images/icon-minus.svg" alt="" />
             </div>
             <div className="reply-container-btn">
               <img
                 src="/images/icon-delete.svg"
                 alt=""
                 onClick={() => removeItem(id)}
               />
               <span className="trash">Trash</span>
               <img
                 src="/images/icon-edit.svg"
                 alt=""
                 onClick={() => editItem(id)}
               />
               <span>Edit</span>
             </div>
           </div>
         </div>
       );
     })}
    </section>
  );
    
  
    
}

export default CommentLists;
