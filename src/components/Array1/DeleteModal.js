import React from 'react'

function DeleteModal({removeReply, deleteMessageToggle, id}) {  
  
  return (
    <div className="delete-container">
      <div className="delete-box">
        <h1>Delete comment</h1>
        <span>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </span>
        <div className="btn-container">
          {/* remove delete message */}
          <button className="first-btn" onClick={deleteMessageToggle}>NO, CANCEL</button>
          {/* deletes reply from first reply array */}
          <button className="second-btn" onClick={() => removeReply(id)}>
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal

//ª