import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

export default function () {
  const camera: any = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <div>
      <Camera ref={camera} errorMessages={{
        noCameraAccessible: undefined,
        permissionDenied: undefined,
        switchCamera: undefined,
        canvas: undefined
      }} />
      <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <img src={image} alt="TakePhoto" />
    </div>
  );
}
