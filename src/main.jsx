// import React, { createContext, useContext } from 'react'
import ReactDOM from "react-dom/client";
// import App1_2 from "./App1_2.jsx";
// import App4 from "./App4.jsx";
// import { userContext, UserProvider } from "./pr4/src/userContext/userContext.jsx";
import App5 from './App5.jsx';
import React from "react";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <App5 />
    </BrowserRouter>
  </React.StrictMode>
);
