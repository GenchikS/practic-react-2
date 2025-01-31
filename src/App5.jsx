import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pr5/pages/HomePage.jsx";
import Layout from "./pr5/components/Layout.jsx";
import AboutPage from "./pr5/pages/AboutPage.jsx";
import NotFoundPage from "./pr5/pages/NotFoundPage.jsx";
import ProductsPage from "./pr5/pages/ProductsPage.jsx";
import clsx from "clsx";
import css from "./app5.module.css"
import ProductsDetailsPage from "./pr5/pages/ProductsDetailsPage.jsx";
import CollectionsPage from "./pr5/pages/CollectionsPage.jsx";
import ContactsPage from "./pr5/pages/ContactsPage.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

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
      </Layout>
    </div>
  );
}
