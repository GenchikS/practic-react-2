
//  приклад методу map
// export default function Product2() {
//   return (
//     <ul>
//       {[1, 2, 3].map((item) => {
//         return <li key={item.id}>{item}</li>;
//       })}
//     </ul>
//   );
// }




export default function BookList ({ books }){
  return (
    <ul>
      {books.map((book) => {
          return (
            //   якщо масив немає ключів, можна використати index
            // <li key={index}>Name: {book.name}</li>  
            <li key={book.id}>Name: {book.name}</li>
        )
        })}
    </ul>
  )
}