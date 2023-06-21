import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@mui/material";

const FileUploader = ({ selectedFile, setSelectedFile, onFileChange }) => {
  const [fileError, setFileError] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      setFileError("");
      onFileChange(file);
    },
    onDropRejected: () => {
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
            Selected File: {selectedFile.name} ({selectedFile.size} bytes)
          </p>
        )}
        {fileError && <p style={{ color: "red" }}>{fileError}</p>}
      </div>
      {selectedFile && selectedFile.type.startsWith("image/") && (
        <div style={{ textAlign: "center" }}>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
