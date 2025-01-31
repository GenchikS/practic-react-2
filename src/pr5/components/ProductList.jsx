import css from "./productlist.module.css";
import { Link } from "react-router-dom";

export const ProductList = ({ products }) => {
  return (
    <div className={css.container}>
      {products.map((product) => (
        <div key={product.id} className={css.cardWrapper}>
          <Link to={`${product.id}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5g9exCouSqdbYhSI9WlRwKNgTq13gytdcg&s"
              alt={product.name} width="120" height="80"
            />
            <h3 className={css.productName}>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
