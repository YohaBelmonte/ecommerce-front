import "./LoadingScreen.css";
import React, { useEffect, useState } from "react";

// Se importa la libreria de LOTTIE ↓
import Lottie from "react-lottie";
// Busco el .json (las imagenes que voy a mostrar en el loading) descargado de la url: lottiefiles ↓
import * as preloaderCircles from "../LoadingScreen/Preloader-shadow-circles.json";
import * as checkSuccess from "../LoadingScreen/Preloader-success2.json";


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
    // se guardan los datos de la api↓
    const [data, setData] = useState([]);
    // con esto ↓ avisamos con un "TRUE" en 2 states diferentes y, con un retraso de por medio, que la api ya se guardó
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);
  
    useEffect(() => {
      // ↓ se agrega el setTimeout: tiempo de espera para que se vea el preloader por 2000=2seg
      setTimeout(() => {
        // marcador de posicion: se trae una api ramdom del link ↓
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            // console.log(json);
            // luego de traer datos de la api ramdom, lo guardamos en data
            setData(json);
            // con esto decimos que los datos estan en proceso de guardado : se transforma en TRUE↓
            setloading(true);
            // ↓ se agrega otro setTimeout para que se vea el 2do preloader por 1000=1seg
            setTimeout(() => {
              // con esto decimos que los datos ya estan guardado (TRUE) pero despues de 1seg
              setcompleted(true);
            }, 1000);
          });
      }, 2000);
    }, []);

  return (
    <div  className="body-preloader">
    {/* TERNARIO 1 ↓: buscamos renderizar los componentes cuando el estado "completed" sea FALSE */}
      {!completed ? (
        <>
        {/* TERNARIO 2 ↓: buscamos renderizar los componentes cuando el estado "loading" sea FALSE */}
          {!loading ? (
            // <div className="spinner">
            //   <span>Loading...</span>
            //   <div className="half-spinner"></div>
            // </div>
            <Lottie className="spinner2" options={defaultOption1} height={200} width={200} />
          ) : (
            //Forma de llamar ↓ al component de la libreria LOTTIE
            <Lottie options={defaultOption2} height={100} width={100} />
            // <div className="completed">&#x2713;</div>
          )}
        {/* FIN TERNARIO 2 ↑ */}
        </>
      ) : (
        ""
      )}
      {/* FIN TERNARIO 1 ↑ */}
    </div>
  );
}
export default PreLoader;






// function PreLoader() {
//   // se guardan los datos de la api↓
//   const [data, setData] = useState([]);
//   // con esto ↓ avisamos con un "TRUE" en 2 states diferentes y, con un retraso de por medio, que la api ya se guardó
//   const [loading, setloading] = useState(undefined);
//   const [completed, setcompleted] = useState(undefined);

//   useEffect(() => {
//     // ↓ se agrega el setTimeout: tiempo de espera para que se vea el preloader por 2000=2seg
//     setTimeout(() => {
//       // marcador de posicion: se trae una api ramdom del link ↓
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           // luego de traer datos de la api ramdom, lo guardamos en data
//           setData(json);
//           // con esto decimos que los datos estan en proceso de guardado : se transforma en TRUE↓
//           setloading(true);
//           // ↓ se agrega otro setTimeout para que se vea el 2do preloader por 1000=1seg
//           setTimeout(() => {
//             // con esto decimos que los datos ya estan guardado (TRUE) pero despues de 1seg
//             setcompleted(true);
//           }, 1000);
//         });
//     }, 2000);
//   }, []);

// return (
//   <div>
//   {/* TERNARIO 1 ↓: buscamos renderizar los componentes cuando el estado "completed" sea FALSE */}
//     {!completed ? (
//       <>
//       {/* TERNARIO 2 ↓: buscamos renderizar los componentes cuando el estado "loading" sea FALSE */}
//         {!loading ? (
//           <div className="spinner">
//             <span>Loading...</span>
//             <div className="half-spinner"></div>
//           </div>
//           // <Lottie options={defaultOption1} height={200} width={200} />
//         ) : (
//           //Forma de llamar ↓ al component de la libreria LOTTIE
//           <Lottie options={defaultOption2} height={100} width={100} />
//           // <div className="completed">&#x2713;</div>
//         )}
//       {/* FIN TERNARIO 2 ↑ */}
//       </>
//     ) : (
//       <>
//         <h1>Your Data</h1>
//         <br />
//         <h6 style={{ position: "Absolute", right: "5rem", bottom: "0" }}>
//           <a
//             style={{ color: "white" }}
//             href="https://lottiefiles.com/chrisgannon"
//           >
//             Earth Animation by Chris Gannon on LottieFiles
//           </a>
//           <br />
//           <a style={{ color: "white" }} href="https://lottiefiles.com/darius">
//             Success Animation by Chris Gannon on LottieFiles
//           </a>
//         </h6>
//       </>
//     )}
//     {/* FIN TERNARIO 1 ↑ */}
//   </div>
// );
// }
// export default PreLoader;