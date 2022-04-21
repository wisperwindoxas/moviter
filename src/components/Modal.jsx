import React from 'react'
import {Language } from './contextApi'
export default function Modal({video,setModal}) {
	const [language] = React.useContext(Language)

  return (
    <div className="modal" onClick={() => setModal(false)}>
        <div className="container">
        <svg
          onClick={() => setModal(false)}
          stroke="currentColor"
          fill="#fff"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="34px"
          width="34px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            stroke="#fff"
            strokeWidth="2"
            d="M3,3 L21,21 M3,21 L21,3"
          ></path>
        </svg>
        {video.length === 0 ? (
          <h1 className='watch_error'>{language === "eng" ? "Movies trail is not defined" : "Филмь трейлер не найден"}</h1>
        ) : (
          <iframe
            onClick={(e) => e.stopPropagation()}
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${video[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
