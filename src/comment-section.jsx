/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Forum() {
  const data = {
    currentUser: {
      image: {
        png: './images/avatars/image-juliusomo.png',
        webp: './images/avatars/image-juliusomo.webp',
      },
      username: 'juliusomo',
    },
    comments: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: '1 month ago',
        score: 12,
        user: {
          image: {
            png: './images/avatars/image-amyrobson.png',
            webp: './images/avatars/image-amyrobson.webp',
          },
          username: 'amyrobson',
        },
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: '2 weeks ago',
        score: 5,
        user: {
          image: {
            png: './images/avatars/image-maxblagun.png',
            webp: './images/avatars/image-maxblagun.webp',
          },
          username: 'maxblagun',
        },
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: '1 week ago',
            score: 4,
            replyingTo: 'maxblagun',
            user: {
              image: {
                png: './images/avatars/image-ramsesmiron.png',
                webp: './images/avatars/image-ramsesmiron.webp',
              },
              username: 'ramsesmiron',
            },
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: '2 days ago',
            score: 2,
            replyingTo: 'ramsesmiron',
            user: {
              image: {
                png: './images/avatars/image-juliusomo.png',
                webp: './images/avatars/image-juliusomo.webp',
              },
              username: 'juliusomo',
            },
          },
        ],
      },
    ],
  };
  const currentUser = data.currentUser;
  const comments = data.comments;

  function CommentHeader({ comment }) {
    return (
      <div className='flex'>
        <img
          src={`./src/assets/img/image-${comment.user.username.toLowerCase()}.png`}
        />
        <h3>{comment.user.username}</h3>
        <p>{comment.createdAt}</p>
      </div>
    );
  }

  function CommentFooter({ comment }) {
    return (
      <div>
        <Votes comment={comment} />
      </div>
    );
  }

  function Votes({ comment }) {
    const [votes, setVotes] = useState(comment.score);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);
    function upvote() {
      if (upvoted) {
        setUpvoted(false);
        setVotes((curVotes) => curVotes - 1);
      } else {
        setUpvoted(true);
        setVotes((curVotes) => curVotes + 1);
      }
      if (downvoted) {
        setDownvoted(false);
        setVotes((curVotes) => curVotes + 1);
      }
    }
    function downvote() {
      if (downvoted) {
        setDownvoted(false);
        setVotes((curVotes) => curVotes + 1);
      } else {
        setDownvoted(true);
        setVotes((curVotes) => curVotes - 1);
      }
      if (upvoted) {
        setUpvoted(false);
        setVotes((curVotes) => curVotes - 1);
      }
    }
    return (
      <div className='flex'>
        <button onClick={downvote}>-</button>
        <p>{votes}</p>
        <button onClick={upvote}>+</button>
      </div>
    );
  }
  function CommentContent({ comment }) {
    return (
      <div>
        {comment.replyingTo ? `@${comment.replyingTo}` : ''}
        {comment.content}
      </div>
    );
  }
  function Comment({ comment }) {
    return (
      <div>
        <div>
          <CommentHeader comment={comment} />
          <CommentContent comment={comment} />
          <CommentFooter comment={comment} />
        </div>
        {comment.replies ? <Replies comment={comment}></Replies> : ''}
      </div>
    );
  }

  function Replies({ comment }) {
    const replies = comment.replies.map((reply) => (
      <Comment key={reply.user.username} comment={reply} />
    ));
    return <div>{replies}</div>;
  }

  function InputArea() {}
  const allComments = comments.map((comment) => (
    <Comment key={comment.user.username} comment={comment} />
  ));
  return <div>{allComments}</div>;
}
