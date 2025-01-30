import { Route, Routes } from "react-router-dom";
import Home from "./pr5/pages/Home.jsx";
import Layout from "./pr5/components/Layout.jsx";
import About from "./pr5/pages/About.jsx";

export default function App5() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}
