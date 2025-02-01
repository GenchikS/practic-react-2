import { NavLink, Route, Routes } from "react-router-dom";
import Layout from "./pr5/components/Layout.jsx";
import clsx from "clsx";
import css from "./app5.module.css"
import { lazy, Suspense } from "react";
//  прибирання імпротів та заміна їх на lazy на асинхронне завантаження лише при необхідності компоненту
// import HomePage from "./pr5/pages/HomePage.jsx";
// import AboutPage from "./pr5/pages/AboutPage.jsx";
// import CollectionsPage from "./pr5/pages/CollectionsPage.jsx";
// import ContactsPage from "./pr5/pages/ContactsPage.jsx";
// import ProductsPage from "./pr5/pages/ProductsPage.jsx";
// import ProductsDetailsPage from "./pr5/pages/ProductsDetailsPage.jsx";
// import NotFoundPage from "./pr5/pages/NotFoundPage.jsx";


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

// заміна імпортів компонентів на асинхронне завантаження лише при необхідності завантаження компоненту. Перехід за маршрутом компоненту
const HomePage = lazy(() => import("./pr5/pages/HomePage.jsx"));
const AboutPage = lazy(() => import("./pr5/pages/AboutPage.jsx"));
const CollectionsPage = lazy(() => import("./pr5/pages/CollectionsPage.jsx"));
const ContactsPage = lazy(() => import("./pr5/pages/ContactsPage.jsx"));
const ProductsPage = lazy(() => import("./pr5/pages/ProductsPage.jsx"));
const ProductsDetailsPage = lazy(() => import("./pr5/pages/ProductsDetailsPage.jsx"));
const NotFoundPage = lazy(() => import("./pr5/pages/NotFoundPage.jsx"));



export default function App5() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          HomePage
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          AboutPage
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          ProductsPage
        </NavLink>
      </nav>
      <Layout>
        {/* Suspense - зупиняє завантаження всіх маршрутів. fallback={<div>Loading...</div>} - дія за замовчуванням при завантаженні */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />}>
              <Route path="collections" element={<CollectionsPage />} />
              <Route path="contacts" element={<ContactsPage />} />
            </Route>
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:productId"
              element={<ProductsDetailsPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
