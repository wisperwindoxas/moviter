import React from 'react'
import {Language } from './contextApi'
export default function Modal({video,setModal}) {
	const [language] = React.useContext(Language)

	console.log(language);

  return (
    <div className="modal">
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
        <h1>{language === "eng" ? "Movies trail is not defined" : "Филмь трейлер не найден"}</h1>
      ) : (
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
      )}
    </div>
  );
}
