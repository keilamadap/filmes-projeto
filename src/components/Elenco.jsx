// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const api_key = "4624345e635a614abd2677f6977efc2d";
// const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
// const moviesURL = "https://api.themoviedb.org/3/movie/";

// const Elenco = () => {
//   const { id } = useParams();
//   const [elenco, setElenco] = useState("");

//   // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

//   const getElenco = async (url) => {
//     const result = await fetch(url);
//     const data = await result.json();
//     setElenco(data);
//     console.log(data);
//   };

//   useEffect(() => {
//     const elencoURL = `${moviesURL}${id}/credits?api_key=${api_key}`;
//     getElenco(elencoURL);
//   }, []);

//   return (
//     <section className="elenco-pai">
//       <h3>Elenco original</h3>
//       <div className="elenco-container">
//         {elenco
//           ? elenco.cast.map((ator) => {
//               return (
//                 <ul elenco={ator} key={ator.name}>
//                   {" "}
//                   <img src={imgBaseUrl + ator.profile_path} />
//                   {ator.name} / {ator.character}
//                 </ul>
//               );
//             })
//           : null}
//       </div>
//     </section>
//   );
// };

// export default Elenco;
