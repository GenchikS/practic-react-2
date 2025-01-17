import './App.css'
//  Practic 1
// import Card from './pr1/component/Card/Card.jsx';
// import { Card2 } from './pr1/component/Card2/Card2.jsx';
// import Product from './pr1/component/Poroduct/Product.jsx'
// import Product2 from './pr1/component/Product2/Product2.jsx';
//  Practic 2
 // import ClickButoon from './pr2/components/ClickButoon.jsx/ClickButoon.jsx';
import { useEffect, useState } from "react";
import ClickButton3 from './pr2/components/ClickButton3/ClickButton3.jsx';
import ClickButton4 from './pr2/components/ClickButton4/ClickButton4.jsx';
import ClickEffect from './pr2/components/ClickEffect/ClickEffect.jsx';
import Modal from './pr2/components/ClickEffect/Modal.jsx';
// import ClickButton2 from './pr2/components/ClickButton2/ClickButton2.jsx';




//  Practic 1
//  приклад розбирання масиву об'єктів
// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

 //  Practic 2





function App1_2() {
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

  // підняття стану, переносимо стан до батька та прокидаємо дані стану та ф-ції пропсами
  // const [total, setTotal] = useState(0);

  // const handleClick = () => {
  //   setTotal(total + 1);
  // };

  // приклад оновлення об'єктів з декількома значеннями
  // const [total, setTotal] = useState({
  //   a: 0,
  //   b:0
  // })

  // const handleClickA = () => {
  //   setTotal({...total, a: total.a + 1})
  // }

  // const handleClickB = () => {
  //   setTotal({ ...total, b: total.b + 1 })
  // }

  // використання хука useEffect
  // const [colors, setColor] = useState(0)
  // const handleClick = () => {
  //   setColor(colors + 1)
  // }

  // useEffect(() => {
  //   console.log("Hello:", colors);
  // }, [colors]);

  // приклад монтування та розмонтування кожні 2 сек
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);
  // }, []);
  // приклад монтування та виведення кожні 2 сек
  // приклад монтування модального вікна з помилкою (виток пам'яті) та без помилки
  // const [isOpen, setIsOpen] = useState(false);
  // приклад з встановленням залежності
  // const [clicks, setClicks] = useState(0);

  // useEffect(() => {
  //   console.log("Clicks updated: ", clicks);
  // }, [clicks]);

  // приклад використання залежнеості та декількох ефектів
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(0);

  // useEffect(() => {
  //   console.log("First updated: ", first);
  // }, [first]);

  // useEffect(() => {
  //   console.log("Second updated: ", second);
  // }, [second]);

  // useEffect(() => {
  //   console.log("First or second updated: ", first + second);
  // }, [first, second]);
  // Робота з LocalStorage та скидання значення
  // const [clicks, setClicks] = useState(0);
  // useEffect(() => {
  //   //  збереження в LS
  //     window.localStorage.setItem("saved-clicks", clicks);
  //     console.log(`Clicks changed - ${clicks}`);
  //   }, [clicks]);
  // Робота з LocalStorage та скидання значення
  // const [clicks, setClicks] = useState(0);
  // useEffect(() => {
  //   window.localStorage.setItem("saved-clicks", clicks);
  //   console.log(`Clicks changed - ${clicks}`);
  // }, [clicks]);
  // приклад запису та читання з LocalStorage
//   const [variable, setVariable] = useState(() => {
//     const localStorage = window.localStorage.getItem("key");
//     if (localStorage !== null) {
//       return Number(localStorage)
//     }
//     return 10;
//   })

//   useEffect(() => {
//   window.localStorage.setItem("key", variable)
// }, [variable])


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
      {/* приклад реактивності useState, при onClick значення стану одинакове*/}
      {/* <button onClick={handleClick}>Current: {total}</button>
      {isNext && <button onClick={handleClick2}>Current: {total2}</button>} */}
      {/* приклад ізоляції стану, якщо стан оголошено в компоненті, то різні стани, навіть коли одинакове посилання на компонент */}
      {/* <ClickButton2 />
      <ClickButton2 /> */}
      {/* підняття стану, переносимо стан до батька та прокидаємо дані стану та ф-ції пропсами */}
      {/* <ClickButton3 value={total} onUpdate={handleClick} />
      <ClickButton3 value={total} onUpdate={handleClick} /> */}
      {/* приклад оновлення об'єктів з декількома значеннями */}
      {/* <ClickButton4 total={total.a} upDate={handleClickA}/>
      <ClickButton4 total={total.b} upDate={handleClickB}/> */}
      {/* використання хука useEffect */}
      {/* <ClickEffect current={colors} upDate={handleClick} /> */}
      {/* приклад монтування та розмонтування кожні 2 сек */}
      {/* <div>App</div> */}
      {/* приклад монтування модального вікна з помилкою (виток пам'яті) та без помилки*/}
      {/* <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && <Modal />}
        {isOpen && <p>Now you can see me!</p>}
      </div> */}
      {/* приклад з встановленням залежності*/}
      {/* <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button> */}
      {/* приклад з встановленням залежності та декількох ефектів */}
      {/* <>
        <button onClick={() => setFirst(first + 1)}>First: {first}</button>
        <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
        <p>Total: {first + second}</p>
      </> */}
      {/* робота з LocalStorage */}
      {/* <div>
        <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
        </button>
        <button onClick={() => setClicks(0)}>Reset</button>
      </div> */}
      {/* приклад читання з LocalStorage */}
      {/* <div>
        <button onClick={()=> setVariable(variable + 1)}>You clicked {variable} times</button>
        <button onClick={()=> setVariable(0)}>Resset</button>
      </div> */}
    </div>
  );
}

export default App1_2


