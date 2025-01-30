// import axios from "axios";
// import { forwardRef, useRef, useState } from "react";
// import { useEffect } from "react";
// import ArticleList from "./pr4/components/ArcticleList.jsx";
// import fetchApiItems from "./pr4/components/api/api.js";
// import { SearchForm } from "./pr4/components/SearchForm.jsx";
// import Player from "./pr4/components/Player/Player.jsx";
// import CustomButton from "./pr4/components/CustomButton/CustomButton.jsx";
import UserMenu from "./pr4/components/UserMenu/UserMenu.jsx";

// const CustomButton = forwardRef((props, ref) => (
//   <button ref={ref}>{props.children}</button>
// ));



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
  // const [value, setValue] = useState(0);
  // const btnRef = useRef();

  // console.log("APP btnRef.current", btnRef.current);

  // useEffect(() => {
  //   console.log("useEffect btnRef.current", btnRef.current);
  // })

  // const handleClick = () => {
  //   console.log()
  // }

  // продовження приклад useRef
  // const valueRef = useRef(0)

  // useEffect(() => {
  //   console.log("useEfect value.current", valueRef.current);
  //   console.log("useEfect value", valueRef);

  // })

  // const handleClick = () => {
  //   valueRef.current += 1;
  // }

  // перенаправлення useRef, щоб пропсом передати ref на елемент усередині самого компонента, а не на сам компонент
  // const btnRef = useRef();

  // useEffect(() => {
  //   btnRef.current.focus(), []
  // })

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
      {/* <button onClick={() => setValue(value + 1)}>
        Update ${value} to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button> */}
      {/* продовження приклад useRef */}
      {/* <button onClick={handleClick}>Click to update ref value</button> */}
      {/* // приклад відеоплеєру, початковий код вище return{" "} */}
      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}
      {/* перенаправлення useRef, щоб пропсом передати ref на елемент усередині самого компонента, а не на сам компонент */}
      {/* <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton> */}
      <UserMenu/>
    </div>
  );
}

export default App4;
