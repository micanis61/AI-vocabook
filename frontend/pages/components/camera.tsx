import React, { useState, useRef, ChangeEvent} from "react";
import { Camera } from "react-camera-pro";
import styles from "../../styles/Home.module.css";

export default function TakePhoto() {
  const camera: any = useRef(null);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    fetch('http://localhost:3000/word/sendphoto/post', {
      method: 'POST',
      body: file,

      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  console.log(camera)
  return (
    <div>
      <div className={styles.camera}>
        <Camera
          ref={camera}
          facingMode={"environment"}
          aspectRatio={9 / 16}
          errorMessages={{
            noCameraAccessible: undefined,
            permissionDenied: undefined,
            switchCamera: undefined,
            canvas: undefined
          }} />
      </div>
      <br />
      <button className={styles.button} onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <br />
      <img className={styles.image} src={image} alt="TakePhoto" />
    </div>
  );
        }