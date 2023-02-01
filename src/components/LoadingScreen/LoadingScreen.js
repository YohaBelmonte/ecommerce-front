import "./LoadingScreen.css";
import React, { useEffect, useState } from "react";

import Lottie from "react-lottie";
// Busco el .json descargado de la url: lottiefiles ↓
import * as preloaderCircles from "../LoadingScreen/Preloader-shadow-circles.json";
import * as checkSuccess from "../LoadingScreen/Preloader-success.json";


const defaultOption1 = {
  loop: true,
  autoplay: true,
  animationData: preloaderCircles.default,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOption2 = {
    loop: true,
    autoplay: true,
    animationData: checkSuccess.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    },
  };
  


function PreLoader() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);
  
    useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
            setloading(true);
  
            setTimeout(() => {
              setcompleted(true);
            }, 1000);
          });
      }, 2000);
    }, []);

  return (
    <div>
    {/* TERNARIO 1 ↓ */}
      {!completed ? (
        <>
        {/* TERNARIO 2 ↓ */}
          {!loading ? (
            <Lottie options={defaultOption1} height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        {/* FIN TERNARIO 2 ↑ */}
        </>
      ) : (
        <>
          <h1>Your Data</h1>
          <br />
          <h6 style={{ position: "Absolute", right: "5rem", bottom: "0" }}>
            <a
              style={{ color: "white" }}
              href="https://lottiefiles.com/chrisgannon"
            >
              Earth Animation by Chris Gannon on LottieFiles
            </a>
            <br />
            <a style={{ color: "white" }} href="https://lottiefiles.com/darius">
              Success Animation by Chris Gannon on LottieFiles
            </a>
          </h6>
        </>
      )}
      {/* FIN TERNARIO 1 ↑ */}
    </div>
  );
}
export default PreLoader;
