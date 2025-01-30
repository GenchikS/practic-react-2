import { useUser } from "../../src/userContext/userContext.jsx";

export default function UserMenu() {
    console.log(useUser());
    const { userName, isLoggedIn, logOut, logIn } = useUser();
    return (
      <div>
        {isLoggedIn ? (
          <>
            <p>Welcoem {userName}</p>
            <button onClick={logOut}>Log out</button>
          </>
        ) : (
          <button onClick={logIn}>Log in</button>
        )}
      </div>
    );
}