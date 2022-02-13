import React, {useState} from 'react';
import DeleteCommentModal from './DeleteCommentModal';

function CommentLists({removeItem, items, editItem, isEditing, deleteCommentMessage, deleteCommentToggle}) {



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
             <div className="you-container">
               <span className="inside-you">you</span>
             </div>
             <span className="comment-date">now</span>
           </div>
           <div className="content-box">
             {isEditing ? (
               <form>
                 <textarea
                   name=""
                   id="text-box"
                   placeholder="Edit comment..."
                 ></textarea>
               </form>
             ) : (
               <div style={{overflow: 'auto'}}>
                 <span className="content">{comment}</span>
               </div>
             )}
           </div>
           <div className="comment-bottom">
             <div className="vote-counter">
               <img src="/images/icon-plus.svg" alt="" />
               0
               <img src="/images/icon-minus.svg" alt="" />
             </div>
             <div className="reply-container-btn">
               <section onClick={deleteCommentToggle}>
                 <img src="/images/icon-delete.svg" alt="" />
                 <span className="trash">Trash</span>
               </section>
               <section onClick={() => editItem(id)}>
                 <img src="/images/icon-edit.svg" alt="" />
                 <span>Edit</span>
               </section>
             </div>
           </div>
           {deleteCommentMessage && (
             <DeleteCommentModal
               deleteCommentToggle={deleteCommentToggle}
               removeItem={removeItem}
               id={id}
             />
           )}
         </div>
       );
     })}
    </section>
  );
    
  
    
}

export default CommentLists;
