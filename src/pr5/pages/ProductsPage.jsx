import { useSearchParams } from "react-router-dom";
import getProducts from "../components/getProducts.js";
import { ProductList } from "../components/ProductList.jsx";
import { SearchBox } from "../components/SearchBox.jsx";

export default function ProductsPage() {
  const products = getProducts();

 //  створення хуків для параметрів пошуку в url
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams2, setSearchParams2] = useSearchParams();

  //  метод get - створення значень в строчці url в змінну productName ключ name
  const productName = searchParams.get(`name`) ?? ``;
//   console.log("productName", productName);

  const upDateSourcheParams = (key, value) => {
    //  зчитування значення sourchParams та створення копії поточних значень
    const upDateParams = new URLSearchParams(searchParams);
      // console.log("upDateParams", upDateParams);
      if (value !== "") {
        //  оновлення або додає пару ключ-значення
        upDateParams.set(key, value);
      } else {
          upDateParams.delete(key);
      }
    // застосовує зміни до URL, зберігаючи інші параметри
    setSearchParams(upDateParams);
  };
 
  const productPrice = searchParams.get(`price`) ?? ``;
    //   console.log("productPrice", productPrice);
    
  const upDateSourcheParams2 = (key, value) => {
    const upDateParams = new URLSearchParams(searchParams2);
     upDateParams.set(key, value);
    setSearchParams2(upDateParams);
    };
    
    const filterParamsProducts = products.filter(
      (product) =>
        // console.log("product.name", product.name)  - доступ до ключа name
        product.name.toLowerCase().includes(productName.toLowerCase()) //  productName- значення пошуку
    );
    console.log("filterParamsProducts", filterParamsProducts);
  
  return (
    <main>
      <SearchBox
        value={productName}
        onChange={(value) => upDateSourcheParams("name", value)} //  value - передача введеного значення в ключ name
      />
      {/* додано ще одне поле для пошуку параметрів */}
      <SearchBox
        value={productPrice}
        onChange={(value) => upDateSourcheParams2("price", value)} //  name, price - автоматичне добавлення в url назви параметру пошуку
      />
      {/* була передача всього масиву */}
      {/* <ProductList products={products} /> */}
      {/* стала передача відфільтрованного масиву */}
      <ProductList products={filterParamsProducts} />
    </main>
  );
}