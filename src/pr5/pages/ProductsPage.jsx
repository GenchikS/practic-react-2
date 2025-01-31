import getProducts from "../components/getProducts.js";
import { ProductList } from "../components/ProductList.jsx";

export default function ProductsPage() {
    const products = getProducts();
    return (
        <main>
            <ProductList products={ products} />
        </main>
    )
}