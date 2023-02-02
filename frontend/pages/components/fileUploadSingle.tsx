import { ChangeEvent, useState } from 'react';
import styles from "../../styles/Home.module.css";

function FileUploadSingle() {
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

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

<div>{file && `${file.name} - ${file.type}`}</div>
      <button className={styles.button} onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default FileUploadSingle;