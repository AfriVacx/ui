import React from 'react'

function Video() {
  return (
    <div className="afrivacx_video">
      <p>
        This is <b>Afri</b>
        <span>Vacx</span>
      </p>
      <div className="vid">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/_mHo9vGulx8?si=oW_FCwmy5_h7JiDl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video
