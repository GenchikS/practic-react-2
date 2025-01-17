// import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ArticleList from "./pr4/components/ArcticleList.jsx";
import fetchApiItems from "./pr4/components/api/api.js";
import { SearchForm } from "./pr4/components/SearchForm.jsx";

function App4() {
// приклад useEffect
  // стан для масиву
//   const [articles, setArticles] = useState([]);
  // стан для лодера
//   const [isLoading, setIsLoading] = useState(false);
  // стан для обробки помилок
//   const [error, setError] = useState(false);

    // приклад useEffect
//   useEffect(() => {
//       async function fetchApi() {
//           try {
//           setArticles([]);
//           setError(false);
//           setIsLoading(true);
//           const data = await fetchApiItems("react");
//           // console.log(data);
//               setArticles(data);
//           } catch (error) {
//             setError(true);
//           // return error;
//         } finally {
//           setIsLoading(false);
//         }
//       }
//   fetchApi()
//   }, []);

  //  при використанні SearchForm для пошуку useEffect не потрібно. Монтування відбувається після submit
//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setIsLoading(true);
//       const data = await fetchApiItems(topic);
//       // console.log(data);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//       // return error;
//     } finally {
//       setIsLoading(false);
//     }
    //   };
    // приклад useRef
    const btnRef = useRef();

  return (
    <div>
      <h3>Practic4</h3>
      {/* приклад useEffect */}
      {/* {isLoading && <p>Loading data, please wait .....</p>} */}
      {/* {error && <p>Data not found!</p>} */}
      {/* {articles.length > 0 && <ArticleList items={articles} />} */}
      {/* приклад використання SearchForm без useEffect */}
      {/* <SearchForm onSearch={handleSearch} /> */}
      {/* приклад стану та map */}
      {/* const [planets, setPlanets] = useState(["Earth","Mars","Jupiter","Venus",]); */}
      {/* const [query, setQuery] = useState(""); */}
      {/* const filteredPlanets = planets.filter((planet) => planet.includes(query)); */}
      {/* return ( */}
      {/* <ul> */}
      {/* {filteredPlanets.map((planet) => ( */}
      {/* <li key={planet.id}>{planet}</li> */}
      {/* ))} */}
      {/* </ul> */}
      {/* ); */}
      {/* продовження приклад стану, кліку та map */}
      {/* const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]); */}
      {/* const [query, setQuery] = useState(""); */}
      {/* const [clicks, setClicks] = useState(0); */}
      {/* const filteredPlanets = planets.filter((planet) => planet.includes(query)); */}
      {/* return ( */}
      {/* <> */}
      {/* <button onClick={() => setClicks(clicks + 1)}> */}
      {/* Number of clicks: {clicks} */}
      {/* </button> */}
      {/* <ul> */}
      {/* {filteredPlanets.map((planet) => ( */}
      {/* <li key={planet}>{planet}</li> */}
      {/* ))} */}
      {/* </ul> */}
      {/* </> */}
      {/* ); */}
      {/* продовження приклад стану, кліку та map з мемозацією, щоб кожного разу не повертати масив який не змінився */}
      {/* const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]); */}
      {/* const [query, setQuery] = useState(""); */}
      {/* const [clicks, setClicks] = useState(0); */}
      {/* const filteredPlanets = useMemo( */}
      {/* () => planets.filter((planet) => planet.includes(query)), */}
      {/* [planets, query] */}
      {/* ); */}
      {/* return ( */}
      {/* <> */}
      {/* <button onClick={() => setClicks(clicks + 1)}> */}
      {/* Number of clicks: {clicks} */}
      {/* </button> */}
      {/* <ul> */}
      {/* {filteredPlanets.map((planet) => ( */}
      {/* <li key={planet}>{planet}</li> */}
      {/* ))} */}
      {/* </ul> */}
      {/* </> */}
      {/* ); */}
      {/* приклад useRef */}
      <button ref={btnRef}>Button with ref</button>
    </div>
  );
}

export default App4;
