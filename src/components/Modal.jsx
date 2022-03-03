import React from 'react'

export default function Modal({video,setModal}) {
  console.log(video[0].key);
  return (
    <div className="modal" onClick={() =>setModal(false) }>
      <iframe
      onClick={(e) => e.stopPropagation()}
        width="1200"
        height="668"
        src={`https://www.youtube.com/embed/${video[0].key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
