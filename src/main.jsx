// import React, { createContext, useContext } from 'react'
import ReactDOM from "react-dom/client";
// import App1_2 from "./App1_2.jsx";
// import App4 from "./App4.jsx";
// import { userContext, UserProvider } from "./pr4/src/userContext/userContext.jsx";
// import App5 from './App5.jsx';
import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { App6lms } from "./App6lms.jsx";
import { Provider } from "react-redux";
// import { store } from "./pr6lms/redux/store.js";
//  App6 Phonebook
// import App6 from "./App6.jsx";
// import { store } from "./pr6(redux)/redux/store.js";
// App6 test
// import App6 from "./App6(redux)test.jsx";
// import { store } from "./pr6(redux)test/redux/store.js";
// import App7lms from "./App7lms.jsx";
// import { store } from "./pr7(redux)lms/redux/store.js";
import App7Test from "./App7Test.jsx";
import { store } from "./pr7(redux)test/redux/store.js";


// Pr4 створення контексту, та передача його через Provider
// const myContext = createContext();

// const contextValue = {
//   userName: "Test default",
//   isLoggetIn: true
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App1_2 /> */}
    {/* огорнення Provider, щоб компоненти мали доступ для отримання доступу до значення контексту */}
    {/* <myContext.Provider value={{ username: "Mango" }}>
      <App />
    </myContext.Provider> */}
    {/* <userContext.Provider value={contextValue}>
      <App4 />
    </userContext.Provider> */}
    {/* <UserProvider>
      <App4 />
    </UserProvider> */}
    {/* BrowserRouter необхідно для роутів */}
    {/* <BrowserRouter>
      <App5 />
    </BrowserRouter> */}
    {/* App6 Phonebook */}
    {/* <BrowserRouter> */}
    {/* необхідно прописати вірний шлях до store */}
    {/* <Provider store={store}>
        <App6 />
      </Provider>
    </BrowserRouter> */}
    {/* <BrowserRouter>
      <Provider store={store}>
        <App6lms />
      </Provider>
    </BrowserRouter> */}
    {/* <BrowserRouter> */}
    {/* необхідно прописати вірний шлях до store */}
    {/* <Provider store={store}> */}
    {/* <App6 /> */}
    {/* </Provider> */}
    {/* </BrowserRouter> */}
    {/* <BrowserRouter> */}
    {/* необхідно прописати вірний шлях до store */}
    {/* <Provider store={store}> */}
    {/* <App7Test /> */}
    {/* </Provider> */}
    {/* </BrowserRouter> */}
    {/* <BrowserRouter> */}
    {/* необхідно прописати вірний шлях до store */}
    {/* <Provider store={store}> */}
    {/* <App7lms /> */}
    {/* </Provider> */}
    {/* </BrowserRouter> */}
    {/* App7Test + селектори*/}
    <BrowserRouter>
      {/* необхідно прописати вірний шлях до store */}
      <Provider store={store}>
        <App7Test />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
