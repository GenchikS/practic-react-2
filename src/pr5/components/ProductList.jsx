import css from "./productlist.module.css";
import { Link, useLocation } from "react-router-dom";

export const ProductList = ({ products }) => {
  // добавлення location для передачі url з фільтром та параметрами до ProductsDetailsPage
  const location = useLocation();
  // console.log("location", location.state);
  return (
    <div className={css.container}>
      {products.map((product) => (
        <div key={product.id} className={css.cardWrapper}>
          {/* добавлення state={location} */}
          <Link to={`${product.id}`} state={location}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5g9exCouSqdbYhSI9WlRwKNgTq13gytdcg&s"
              alt={product.name}
              width="120"
              height="80"
            />
            <h3 className={css.productName}>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
