import './App.css'
//  Practic 1
// import Card from './pr1/component/Card/Card.jsx';
// import { Card2 } from './pr1/component/Card2/Card2.jsx';
// import Product from './pr1/component/Poroduct/Product.jsx'
// import Product2 from './pr1/component/Product2/Product2.jsx';
//  Practic 2
 // import ClickButoon from './pr2/components/ClickButoon.jsx/ClickButoon.jsx';
import { useState } from "react";
import ClickButton2 from './pr2/components/ClickButton2/ClickButton2.jsx';




//  Practic 1
//  приклад розбирання масиву об'єктів
// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

 //  Practic 2





function App() {
  //  Practic 1
  // const url =
  //   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
  // const isCondition = true;

  //  Practic 2
  // declaration
  // function handleClick() {
  // alert("I'm a button!");
  // return
  // }
  // expression приклад вище
  // const handleClick = () => {
  // alert("I'm a button!");
  // }
  // приклад отримання event
  // const handleClick = (evn) => {
  //   console.log("evn",evn)
  // }
  // приклад реактивності useState
  // const [total, setTotal] = useState(0)
  // const [total2, setTotal2] = useState(0);
  // const [isNext, setIsNext] = useState(false);


  // const handleClick = () => {
  //   if (total>3 && total<7) {
  //     setIsNext(true)
  //   } else { setIsNext(false) }
  //   setTotal(total + 1);
  // }

  // const handleClick2 = () => {
  //   setTotal2(total2 + 1);
  // };

  return (
    <div>
      {/* pract1 */}
      <h3>Practic 1</h3>
      {/* <Product name={"AAA"} url={url} price={500 } /> */}
      {/* {isCondition && <Product name={"BBB_1"} />} */}
      {/* {!isCondition && <Product name={"BBB_2"} />} */}
      {/* {isCondition ? <Product name={"CCC"} /> : <Product name={"DDD"} />} */}
      {/* <Product2 books={favouriteBooks} /> */}
      {/* <Card><Card2/></Card> */}
      <h3>Practic 2</h3>
      {/* <button onClick={handleClick}>Click me!</button> */}
      {/* приклад без створення ф-ції handleClick */}
      {/* <button onClick={() => alert("I'm a button!")}>Click me!</button> */}
      {/* приклад отримання event */}
      {/* <button onClick={handleClick}>Click me!</button> */}
      {/* приклад використання читання пропсів */}
      {/* <ClickButoon message="Hello 1">Hello One</ClickButoon>
      <ClickButoon message="Hello 2">Hello Two</ClickButoon> */}
      {/* приклад реактивності useState*/}
      {/* <button onClick={handleClick}>Current: {total}</button>
      {isNext && <button onClick={handleClick2}>Current: {total2}</button>} */}
      {/* приклад ізоляції стану, якщо в компоненті, то різні стани, навіть коли одинакове посилання на компонент */}
      <ClickButton2 />
      <ClickButton2 />
    </div>
  );
}

export default App


