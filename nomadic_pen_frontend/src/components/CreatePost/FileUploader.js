import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@mui/material";

const FileUploader = ({ onFileChange, selectedFile }) => {
  const [fileError, setFileError] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDropAccepted: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result;
        setFileError("");
        onFileChange(base64String);
      };

      reader.onerror = () => {
        setFileError("Error occurred while reading the file.");
      };

      reader.readAsDataURL(file);
    },
    onDropRejected: () => {
      onFileChange(null);
      setFileError("Invalid file type. Please select an image.");
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{ marginBottom: "1rem", textAlign: "center" }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image here or click to browse</p>
        )}
        <Button variant="contained">Browse</Button>
        {selectedFile && (
          <p>
            Selected File: {selectedFile.substring(0, 20)}... (
            {selectedFile.length} characters)
          </p>
        )}
        {fileError && <p style={{ color: "red" }}>{fileError}</p>}
      </div>
      {selectedFile && selectedFile.startsWith("data:image/") && (
        <div style={{ textAlign: "center" }}>
          <img
            src={selectedFile}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
