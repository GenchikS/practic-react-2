import { Suspense } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        laborum amet ab cumque sit nihil dolore modi error repudiandae
        perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
        mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
        asperiores facere natus sapiente cum neque laudantium quam, expedita
        voluptates atque quia aspernatur saepe illo, rem quasi praesentium
        aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
        praesentium totam ducimus similique asperiores culpa, eius amet
        repudiandae quam ut. Architecto commodi, tempore ut nostrum voluptas
        dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
        eaque voluptatibus eveniet error, nulla rem iusto?
      </p>
      <ul>
        <li>
          <Link to="collections">CollectionsPage</Link>
        </li>
        <li>
          <Link to="contacts">ContactsPage</Link>
        </li>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate("/", { replace: true })} //  необов'язковий аргумент функції navigate - це об'єкт параметрів
          >
            HomePage
          </button>
        </li>
      </ul>
      {/* Suspense - зупиняє завантаження всіх маршрутів. fallback={<div>Loading...</div>} - дія за замовчуванням при завантаженні */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}