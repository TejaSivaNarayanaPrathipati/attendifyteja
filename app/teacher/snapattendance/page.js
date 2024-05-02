// "use client";
// import Head from "next/head";
// import { useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import styles from "../../styles.module.css"
// import Link from "next/link";
// import snapimage from '../../../Assets/Snap Page.png';
// import name from '../../../Assets/namelogo.png'

// const ReactApp = () => {
//   const [image, setImage] = useState(null);
//   const [uploadImage, setUploadImage] = useState(null);
//   const [annotatedImage, setAnnotatedImage] = useState(null);
//   const [upscaling, setUpScaling] = useState("1");
//   const [threshold, setThreshold] = useState("0.6");

//   const selectImage = async () => {
//     const fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = "image/*";

//     // Add event listener to handle file selection
//     fileInput.addEventListener("change", async (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const imageUrl = URL.createObjectURL(file);
//         setImage(imageUrl);
//         convertToBlob(imageUrl);
//         setUploadImage(null);
//         setAnnotatedImage(null);
//       }
//     });

//     // Check if camera capture is supported and allow capture
//     if (
//       "mediaDevices" in navigator &&
//       "getUserMedia" in navigator.mediaDevices
//     ) {
//       fileInput.capture = "camera";
//     }

//     // Click the file input to trigger file selection
//     fileInput.click();
//   };

//   const convertToBlob = (imageUrl) => {
//     fetch(imageUrl)
//       .then((response) => response.blob())
//       .then((blob) => setUploadImage(blob))
//       .catch((error) =>
//         console.error("Error converting image to blob:", error)
//       );
//   };

//   const uri = "http://192.168.1.8:5000"; // Adjust the URI accordingly

//   const processImage = async () => {
//     if (image && uploadImage) {
//       let formData = new FormData();
//       formData.append("image", uploadImage);
//       formData.append("upscaling", upscaling);
//       formData.append("threshold", threshold);

//       setAnnotatedImage(null);
//       try {
//         const response = await axios.get("https://h30rztz2q8.execute-api.ap-south-1.amazonaws.com/dev/user/?objectKey=eblock.jpeg");
//         const data = await response.json();
//         console.log(data);
//         // setAnnotatedImage(`data:image/jpeg;base64,${response.data.image}`);
//       } catch (error) {
//         console.error("Error processing image:", error);
//       }
//     } else {
//       console.log("No image selected");
//     }
//   };

//   const arrayBufferToBase64 = (buffer) => {
//     let binary = "";
//     const bytes = new Uint8Array(buffer);
//     for (let i = 0; i < bytes.byteLength; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     return btoa(binary);
//   };
//   return (
//     <div className={styles.homecontainer}>
//       <>
//         {/* <Head>
//         <title>next-pwa example</title>
//       </Head> */}


//         <div className="navbar bg-primary bg-base-100">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//               </div>
//               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                 <li><Link href="/home" >Home</Link></li>
//                 <li><Link href="/teacher" >Back</Link></li>
//               </ul>
//             </div>
//           </div>
//           <div className="navbar-center">
//             <Image className={styles.navimgpos} src={name} width={120} />
//           </div>
//           <div className="navbar-end">
//             <button className="btn btn-ghost btn-circle">
//               <div className="indicator">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
//                 <span className="badge badge-xs badge-primary indicator-item"></span>
//               </div>
//             </button>
//           </div>
//         </div>

//        <div className={styles.quote}>

//        <div>
//           <h1 className={styles.caveatsanp}>Attendance through the lens! </h1>
//         </div>


//         <div>
//           <h1 className={styles.caveat2}>"Faces become signatures, photos mark the present." </h1>
//         </div>

//        </div>

//         <div >

//           <div className={styles.teabtpos}>
//             <button
//               className={styles.dayBtn}
//               onClick={selectImage}
//             >
//               Select Image
//             </button>
//           </div>

//           <div className={styles.teabtpos}>

//             <button
//               className={styles.dayBtn}
//               onClick={processImage}
//             >
//               Process Image
//             </button>

//           </div>

//           <div className={styles.teabtpos}>

//             <input
//               className="border border-gray-400 rounded p-2 mb-4"

//               type="text"
//               placeholder="Upscaling Factor"
//               value={upscaling}
//               onChange={(e) => setUpScaling(e.target.value)}
//             />

//           </div>

//           <div className={styles.teabtpos}>
//             <input
//               className="border border-gray-400 rounded p-2 mb-4"
//               type="text"
//               placeholder="Threshold Factor"
//               value={threshold}
//               onChange={(e) => setThreshold(e.target.value)}
//             />
//           </div>



//           <div className={styles.teabtpos}>

//             <div className={styles.teabtpos}>
//               {image && (
//                 <Image
//                   src={image}
//                   alt="Selected Image"
//                   width={300}
//                   height={300}
//                   className={styles.serimgpos}
//                   // className='my-4'
//                 />
//               )}
//             </div>
//             <div className={styles.teabtpos}>

//               {annotatedImage && (
//                 <Image
//                   src={annotatedImage}
//                   alt="Annotated Image"
//                   width={300}
//                   height={300}
//                   className={styles.serimgpos}
//                   // className="my-4"
//                 />
//               )}
//             </div>


//           </div>
//         </div>
//       </>


//       <div>

//         <Image src={snapimage} width={1024} alt="Snappageimage" className={styles.snapimgpos} />

//       </div>
//     </div>
//   );
// };
// export default ReactApp;


"use client";
import Head from "next/head";
import { useState } from "react";
import axios, { Axios } from "axios";
import Image from "next/image";
import styles from "../../styles.module.css";
import Link from "next/link";
import snapimage from "../../../Assets/Snap Page.png";
import name from '../../../Assets/namelogo.png'
import { TiArrowBack } from "react-icons/ti";
// import { Storage } from "aws-amplify";

const ReactApp = () => {
  const [image, setImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [annotatedImage, setAnnotatedImage] = useState(null);
  const [upscaling, setUpScaling] = useState("1");
  const [threshold, setThreshold] = useState("0.6");
  const [detectedPersons, setDetectedPersons] = useState([]);
  const [imageId, setImageId] = useState(null);

  const getCurrentDateTimeString = () => {
    const now = new Date();

    // Get the date components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
    const day = String(now.getDate()).padStart(2, "0");

    // Get the time components
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Construct the string in the desired format
    const dateTimeString = `${year}_${month}_${day}_${hours}_${minutes}_${seconds}`;

    return dateTimeString;
  };
  console.log(getCurrentDateTimeString());
  const uploadTheImage = async () => {
    if (image && uploadImage) {
      const now = getCurrentDateTimeString();
      // setImageId(now);
      try {
        const response = await axios.put(
          `https://h30rztz2q8.execute-api.ap-south-1.amazonaws.com/dev/faceapp-input-image/${now}.jpeg`,
          uploadImage,
          {
            headers: {
              "Content-Type": "image/jpeg",
            },
          }
        );
        console.log("response", response);
        processImage(now);
      } catch (error) {
        console.error("Error processing image:", error);
      }
    } else {
      console.log("No image selected");
    }
  };

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

  const processImage = async (now) => {
    if (image && uploadImage) {
      let formData = new FormData();
      formData.append("image", uploadImage);
      formData.append("upscaling", upscaling);
      formData.append("threshold", threshold);

      setAnnotatedImage(null);
      try {
        const response = await axios.get(
          `https://h30rztz2q8.execute-api.ap-south-1.amazonaws.com/dev/user/?objectKey=${now}.jpeg`
        );
        // const data = await response.json();
        console.log(response.data.DetectedPersons);
        setDetectedPersons(response.data.DetectedPersons);
        // setAnnotatedImage(data:image/jpeg;base64,${response.data.image});
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
    <div className={styles.homecontainer}>
      <>
        {/* <Head>
        <title>next-pwa example</title>
      </Head> */}


        <div className="navbar bg-primary bg-base-100">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link href="/teacher">
                  <TiArrowBack />
                </Link>
              </div>
            </button>
          </div>

          <div className="navbar-center">
            <Image className={styles.navimgpos} src={name} width={120} />
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                <li><Link href="/home" >Home</Link></li>
                <li><Link href="/onboarding" >Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>



        <div className={styles.quote}>
          <div>
            <h1 className={styles.caveatsanp}>Attendance through the lens..! </h1>
          </div>

          <div>
            <h1 className={styles.caveat2}>
              "Faces become signatures, photos mark the present."{" "}
            </h1>
          </div>

        </div>

        <div>
          <div className={styles.teabtpos}>
            <button className={styles.dayBtn} onClick={selectImage}>
              Select Image
            </button>
          </div>

          <div className={styles.teabtpos}>
            <button className={styles.dayBtn} onClick={uploadTheImage}>
              Process Image
            </button>
          </div>

          <div className={styles.teabtpos}>
            <div className={styles.imgbtpos}>
              {image && (
                <Image
                  src={image}
                  alt="Selected Image"
                  width={300}
                  height={300}
                  // className="my-4"
                />
              )}
            </div>
            <div className={styles.teabtpos}>
              {detectedPersons.length != 0 && (
                <div>
                  <h2>Detected Persons</h2>
                  <ul>
                    {detectedPersons.map((person, index) => (
                      <li key={index}>
                        <p>
                          <strong>Person {index + 1}</strong>
                        </p>
                        <p>Name: {person.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
            <div className={styles.teabtpos}>
              {annotatedImage && (
                <Image
                  src={annotatedImage}
                  alt="Annotated Image"
                  width={300}
                  height={300}
                  // className="my-4"
                />
              )}
            </div>
          </div>


        </div>
      </>

      {/* <div className={styles.teabtpos}>
        <Link href="/teacher" className={styles.backbtn}>
          Back
        </Link>
      </div> */}

      <div>
        <Image
          src={snapimage}
          width={1024}
          alt="Snappageimage"
          className={styles.snapimgpos}
        />
      </div>
    </div>
  );
};
export default ReactApp;