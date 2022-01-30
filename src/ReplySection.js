import React from "react";
import data from './data.json'

function ReplySection() {
  const {comments, replies} = data;
  return (
  <main>
    {data.comments.replies.map((reply) => {
      return (
        <div>
          {reply.content}
        </div>
      )
    })}
  </main>
  )
}


export default ReplySection;
