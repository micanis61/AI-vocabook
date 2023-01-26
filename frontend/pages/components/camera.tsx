import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import styles from "../../styles/Home.module.css";

export default function TakePhoto() {
  const camera: any = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <div>
      <div className={styles.camera}>
        <Camera ref={camera} errorMessages={{
          noCameraAccessible: undefined,
          permissionDenied: undefined,
          switchCamera: undefined,
          canvas: undefined
        }} />
      </div>

      <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <img src={image} alt="TakePhoto" />
    </div>
  );
}