import { Link, useLocation, useParams } from "react-router-dom";
import getProducts from "../components/getProducts.js";

const ProductsDetailsPage = () => {
    const products = getProducts();
    const { productId } = useParams();
    // const productNameId = String(
    //   products
    //     .filter((product) => product.id === productId)
    //     .map((product) => product.name)
    // );
    // console.log("nameId2", productNameId);
    // замінено однією строчкою на метод find
    const productNameId = products.find((product) => product.id === productId);
  // console.log("productNameId", productNameId);
  
  // добавлення location для отримання url з фільтром та параметрами попереднього маршруту
  const location = useLocation();
  // console.log("location2", location.state)

  const backLocation = location.state ?? "/products";
    
    return (
      <div>
        <h2>{productNameId.name}</h2>
        <img src={productNameId.photo} alt="" height="320" />
        <p>productId: {productId}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
        {/* добавлення location */}
        <Link to={backLocation} >Back to products</Link>
      </div>
    );
}

export default ProductsDetailsPage;