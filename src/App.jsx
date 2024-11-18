import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const inputFile = useRef(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const clear = () => {
    setImageUrl(null);
    if (inputFile.current) {
      inputFile.current.value = '';
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="heading">Image Upload and Preview</h1>
        <div className="upload">
          <input type="file" onChange={handleImageUpload} ref={inputFile}/>
        </div>
        <div>
          <p className="string">Image URL: {imageUrl}</p>
        </div>

        <div className="preview">
          <img src={imageUrl} />
        </div>
        <button className="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default App;
