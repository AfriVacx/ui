import React, { useRef, useEffect, useContext } from "react";

import { ValueContext } from "../Context";

function ImageUpload() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const { setProfileImage } = useContext(ValueContext);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dmzo3ogl5",
        uploadPreset: "zvedo9a4",
      },
      (error, result) => {
        if (result.info.files) {
          setProfileImage(result.info.files);
        }
      }
    );
  }, [setProfileImage]);
  return (
    <div className="upload_image">
      <button onClick={() => widgetRef.current.open()}>Upload image</button>
    </div>
  );
}

export default ImageUpload;
