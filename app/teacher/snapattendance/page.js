"use client"; 
import Head from "next/head";
import "../../styles.module.css";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const ReactApp = () => {
  const [image, setImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [annotatedImage, setAnnotatedImage] = useState(null);
  const [upscaling, setUpScaling] = useState("1");
  const [threshold, setThreshold] = useState("0.6");

  const selectImage = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    // Add event listener to handle file selection
    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        convertToBlob(imageUrl);
        setUploadImage(null);
        setAnnotatedImage(null);
      }
    });

    // Check if camera capture is supported and allow capture
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      fileInput.capture = "camera";
    }

    // Click the file input to trigger file selection
    fileInput.click();
  };

  const convertToBlob = (imageUrl) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => setUploadImage(blob))
      .catch((error) =>
        console.error("Error converting image to blob:", error)
      );
  };

  const uri = "http://192.168.1.8:5000"; // Adjust the URI accordingly

  const processImage = async () => {
    if (image && uploadImage) {
      let formData = new FormData();
      formData.append("image", uploadImage);
      formData.append("upscaling", upscaling);
      formData.append("threshold", threshold);

      setAnnotatedImage(null);
      try {
        const response = await axios.post(`${uri}/take_attendance`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setAnnotatedImage(`data:image/jpeg;base64,${response.data.image}`);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    } else {
      console.log("No image selected");
    }
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };
  return (
    <>
      <Head>
        <title>next-pwa example</title>
      </Head>
      <h1 className="text-3xl font-bold underline">Snap Attendance</h1>
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          onClick={selectImage}
        >
          Select Image
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          onClick={processImage}
        >
          Process Image
        </button>
        <input
          className="border border-gray-400 rounded p-2 mb-4"
          type="text"
          placeholder="Upscaling Factor"
          value={upscaling}
          onChange={(e) => setUpScaling(e.target.value)}
        />
        <input
          className="border border-gray-400 rounded p-2 mb-4"
          type="text"
          placeholder="Threshold Factor"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />
        {image && (
          <Image
            src={image}
            alt="Selected Image"
            width={300}
            height={300}
            className="my-4"
          />
        )}
        {annotatedImage && (
          <Image
            src={annotatedImage}
            alt="Annotated Image"
            width={300}
            height={300}
            className="my-4"
          />
        )}
      </div>
    </>
  );
};
export default ReactApp;
