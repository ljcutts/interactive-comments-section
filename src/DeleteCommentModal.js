import React from "react";

function DeleteCommentModal({ removeItem, deleteCommentToggle, id }) {
  return (
    <div className="delete-container">
      <div className="delete-box">
        <h1>Delete comment</h1>
        <span>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </span>
        <div className="btn-container">
          <button className="first-btn" onClick={deleteCommentToggle}>
            NO, CANCEL
          </button>
          <button className="second-btn" onClick={() => removeItem(id)}>
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCommentModal;
